import { Button } from "react-bootstrap";
import {Formik,Form,Field,ErrorMessage} from "formik";

const Login = () => {

  return (
    <div className="container">
        <h1 className="my-4">Login</h1>
        <Formik
         initialValues= {{
            username:"",
            password:"",
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
                username or email
            </label>
            <Field type="text"
            className="form-control"
            name ="username"
            id="username"
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
            Login
        </Button>
        </Form>
        </Formik>
    </div>
  )
}

export default Login