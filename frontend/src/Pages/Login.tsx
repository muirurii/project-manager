import { Button, Alert } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GET_USER } from "../graphQL/queries/users";
import { useLazyQuery } from "@apollo/client";
import { useAppDispatch } from "../app/hooks";
import { setUser } from "../features/user/userSlice";

interface FormTypes {
  username: string;
  password: string;
}

const Login = () => {
  const [getUser, { data, error }] = useLazyQuery(GET_USER);

  const dispatch = useAppDispatch();

  const validate = (values: FormTypes) => {
    const errors: any = {};

    if (!values.username) {
      errors.username = "username or email required";
    }
    if (!values.password) {
      errors.password = "password required";
    }

    return errors;
  };

  if(data){
    console.log(data)
    dispatch(setUser(data.getUser));
  }

  return (
    <div className="container">
      <h1 className="my-4">Login</h1>
      <Formik
        initialValues={{
          username: "",
          password: "",
          rememberMe: false,
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
         const {data} = await getUser({
            variables: {
              ...values,
            },
          });
          console.log(data,"form")
        setSubmitting(false);
        }}
      >
        <Form>
          {error ? (
            <Alert className="p-2" variant="danger">
              {error.message}
            </Alert>
          ) : null}
          {data ? (
            <Alert className="p-2" variant="success">
              Log in successful
            </Alert>
          ) : null}
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              username or email
            </label>
            <Field
              type="text"
              className="form-control"
              name="username"
              id="username"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="username" />
            </Alert>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              password
            </label>
            <Field
              type="password"
              className="form-control"
              id="password"
              name="password"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="password" />
            </Alert>
          </div>
          <div className="mb-3">
            <div className="form-check">
              <input
                type="checkbox"
                id="formBasicCheckbox"
                className="form-check-input"
              />
              <label
                title=""
                htmlFor="formBasicCheckbox"
                className="form-check-label"
              >
                Remember Me?
              </label>
            </div>
          </div>
          <Button className="px-3" type="submit" variant="primary">
            Login
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default Login;
