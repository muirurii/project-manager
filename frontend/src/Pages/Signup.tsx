import { Alert, Button } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphQL/mutations/users";
import { useDispatch } from "react-redux";
import { setUser } from "../features/user/userSlice";

interface FormTypes {
  username: string;
  email: string;
  password: string;
  repeatPassword: string;
}

const SignUp = () => {
  const [mutate, { data, error }] = useMutation(ADD_USER);
  const dispatch = useDispatch();

  const validate = (values: FormTypes) => {
    const errors: any = {};

    if (!values.email) {
      errors.email = "email required";
    }
    if (!values.username) {
      errors.username = "username required";
    }
    if (!values.password) {
      errors.password = "password required";
    }
    if (values.password !== values.repeatPassword) {
      errors.password = "passwords don't match";
      errors.repeatPassword = "passwords don't match";
    }

    return errors;
  };

  return (
    <div className="container">
      <h1 className="my-4">SignUp</h1>
      <Formik
        initialValues={{
          username: "",
          email: "",
          password: "",
          repeatPassword: "",
          rememberMe: false,
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          const { data } = await mutate({
            variables: {
              ...values,
            },
          });
          if(data){
            dispatch(setUser(data.getUser))
          }
          console.log("success", data);
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
              Registered
            </Alert>
          ) : null}
          <div className="mb-3">
            <label className="form-label" htmlFor="username">
              username
            </label>
            <Field
              type="text"
              id="username"
              className="form-control"
              name="username"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="username" />
            </Alert>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">
              email
            </label>
            <Field
              type="text"
              id="email"
              className="form-control"
              name="email"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="email" />
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
            <label className="form-label" htmlFor="password">
              repeat password
            </label>
            <Field
              type="password"
              className="form-control"
              id="repeatPassword"
              name="repeatPassword"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="repeatPassword" />
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
          <Button type="submit" variant="primary">
            Sign up
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default SignUp;
