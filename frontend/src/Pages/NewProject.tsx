import { Button, Alert } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useMutation } from "@apollo/client";
import { ADD_PROJECT } from "../graphQL/mutations/projects";

interface FormTypes {
    projectName: string
    description: string
    picture: string
    estimatedHours: string
}

const NewProject = () => {

  const [mutate,{data,error}] = useMutation(ADD_PROJECT);

  const validate = (values: FormTypes) => {
    const errors: any = {};

    if (!values.projectName) {
      errors.projectName = "project name is required";
    }
    if (!values.description) {
      errors.description = "project description is required";
    }
    if (!values.picture) {
      errors.picture = "project picture is required";
    }
    if (!values.estimatedHours) {
      errors.estimatedHours = "enter estimated hours";
    }

    return errors;
  };
  return (
    <div className="container">
      <h1 className="my-4">New Project</h1>
      <Formik
        initialValues={{
          projectName: "",
          description: "",
          picture:"",
          estimatedHours: "",
        }}
        validate={validate}
        onSubmit={async (values, { setSubmitting }) => {
          setSubmitting(true);
          await mutate({
            variables:{
              ...values,
              creatorId:"641b48c7de5d38342dccb761"
            }
          })
          setSubmitting(false);
          console.log(values);
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
              Project created successfully
            </Alert>
          ) : null}
          <div className="mb-3">
            <label className="form-label" htmlFor="projectName">
              project name
            </label>
            <Field
              type="text"
              className="form-control"
              id="projectName"
              name="projectName"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="projectName" />
            </Alert>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="description">
              project description
            </label>
            <Field
              type="textarea"
              className="form-control"
              id="description"
              name="description"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="description" />
            </Alert>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="picture">
              project photo
            </label>
              <Field
                type="text"
                className="form-control"
                id="picture"
                name="picture"
              />
              <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="picture" />
            </Alert>
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="estimatedHours">
              estimated hours
            </label>
            <Field
              type="number"
              className="form-control"
              id="estimatedHours"
              name="estimatedHours"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="estimatedHours" />
            </Alert>
          </div>
          <Button type="submit" variant="primary">
            Create project
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default NewProject;
