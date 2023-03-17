import { Button, ButtonGroup } from "react-bootstrap";
import { Formik, Form, Field, ErrorMessage } from "formik";

const NewProject = () => {
  return (
    <div className="container">
      <h1 className="my-4">New Project</h1>
      <Formik
        initialValues={{
          projectName: "",
          description: "",
          estimatedHours: "",
        }}
        onSubmit={(values, { setSubmitting }) => {
          console.log(values);
        }}
      >
        <Form>
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
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="projectDescription">
              project photo
            </label>
              <Field
                type="file"
                className="form-control"
                id="projectDescription"
                name="projectDescription"
              />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="password">
              estimated hours
            </label>
            <Field
              type="password"
              className="form-control"
              id="estimatedHours"
              name="estimatedHours"
            />
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
