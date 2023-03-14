import { Button } from "react-bootstrap";
import {Formik,Form,Field,ErrorMessage} from "formik";


const SignUp = () => {

  return (
    <div className="container">
      <h1 className="my-4">SignUp</h1>
        <Formik
         initialValues= {{
            username:"",
            email:"",
            password:"",
            repeatPassword:"",
            rememberMe:false
        }}
        onSubmit= {(values,{setSubmitting}) =>{
            console.log(values);
        }}
        >
            <Form>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="username">
                username
            </label>
            <Field type="text"
            id="username"
            className="form-control"
            name ="username"
            />
            </div>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="email">
                email
            </label>
            <Field type="text"
            id="email"
            className="form-control"
            name ="email"
            />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password">password</label>
                <Field type="password"
                className="form-control"
                id="password"
                name ="password"
                />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="password">repeat password</label>
                <Field type="password"
                className="form-control"
                id="repeatPassword"
                name ="repeatPassword"
                />
            </div>
            <div className="mb-3"><div className="form-check">
                <input type="checkbox" id="formBasicCheckbox" className="form-check-input" />
                <label title=""
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
  )
}

export default SignUp