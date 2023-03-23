import { useState } from "react";
import { Button, Modal, Alert } from "react-bootstrap";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { ADD_MEMBER } from "../../graphQL/mutations/projects";
import { useMutation } from "@apollo/client";

interface FormTypes {
  username: string;
}

const AddMember = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mutate, { error, data }] = useMutation(ADD_MEMBER);

  const validate = (values: FormTypes) => {
    const errors: any = {};

    if (!values.username) {
      errors.username = "please enter a username";
    }
    return errors;
  };

  return (
    <>
      <Button
        className="rounded-pill d-inline-block ms-4 btn-primary"
        onClick={handleShow}
      >
        Add member
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Formik
            initialValues={{
              username: "",
            }}
            validate={validate}
            onSubmit={async (values, { setSubmitting }) => {
              setSubmitting(true);
              const { data } = await mutate({
                variables: {
                  username:values.username,
                  projectId: "641b4ab0de5d38342dccb765",
                },
              });
              console.log(data);
              console.log(error)
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
                  user added successfully
                </Alert>
              ) : null}
              <div className="mb-3">
                <label className="form-label" htmlFor="username">
                  username
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
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <Button className="rounded-pill px-4 btn-primary" type="submit">
            Add
          </Button>
          <Button
            className="rounded-pill px-4"
            variant="outline-dark"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
            </Form>
          </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddMember;
