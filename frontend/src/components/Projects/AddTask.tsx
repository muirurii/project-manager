import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik,Field,Form } from 'formik';

const AddTask = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className="rounded-pill d-inline-block ms-4" variant="dark" onClick={handleShow}>
        Add Task
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
         initialValues= {{
            taskName:"",
            description:"",
            estimatedHours:"",
            assignedUser:""
        }}
        onSubmit= {(values,{setSubmitting}) =>{
            console.log(values);
        }}
        >
            <Form>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="taskName">
                task name
            </label>
            <Field type="text"
            className="form-control"
            name ="taskName"
            id="taskName"
            />
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="description">description</label>
                <Field type="textarea"
                className="form-control"
                id="description"
                name ="description"
                />
            </div>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="estimatedHours">
                estimated hours
            </label>
            <Field type="text"
            className="form-control"
            name ="estimatedHours"
            id="estimatedHours"
            />
            </div>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="assignedMembers">
                assigned members
            </label>
            <Field type="text"
            className="form-control"
            name ="assignedMembers"
            id="assignedMembers"
            />
            </div>
        </Form>
        </Formik>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <Button className="rounded-pill px-4" type="submit" variant="dark" onClick={handleClose}>
            Login
          </Button>
          <Button className="rounded-pill px-4" variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddTask;