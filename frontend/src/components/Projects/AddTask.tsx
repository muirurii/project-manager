import { useState } from 'react';
import { Alert,Button,Modal } from 'react-bootstrap';
import { Formik,Field,Form,ErrorMessage } from 'formik';
import { useMutation } from '@apollo/client';
import { ADD_TASK } from '../../graphQL/mutations/tasks';

interface FormTypes {
  taskName:string,
  description:string,
  estimatedHours:number,
  assignedUsers: string
}

const AddTask = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [mutate,{error,data}] = useMutation(ADD_TASK);

  const validate = (values:FormTypes)=>{
      const errors:any = {};

      if(!values.taskName){
        errors.taskName = "please enter a task name"
      }
      if(!values.description){
        errors.description = "please enter a description"
      }
      if(!values.estimatedHours){
        errors.estimatedHours = "please enter estimated hours"
      }
      if(!values.assignedUsers){
        errors.assignedUsers = "please select a user"
      }

      return errors;
  }

  return (
    <>
      <Button  className="rounded-pill d-inline-block ms-4 btn-primary" onClick={handleShow}>
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
            estimatedHours:0,
            assignedUsers:"6414a81b9a5af026d722011b"
        }}
        validate={validate}
        onSubmit= {async (values,{setSubmitting}) =>{
            setSubmitting(true);
           const {data} = await mutate({
              variables:{
                ...values,
                creatorId:"6414a81b9a5af026d722011b",
                projectId:"641b4a17de5d38342dccb763"
              }
            })
            console.log(data);
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
              Task added successfully
            </Alert>
          ) : null}
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
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="taskName" />
            </Alert>
            </div>
            <div className="mb-3">
                <label className="form-label" htmlFor="description">description</label>
                <Field type="textarea"
                className="form-control"
                id="description"
                name ="description"
                />
                <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="description" />
            </Alert>
            </div>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="estimatedHours">
                estimated hours
            </label>
            <Field type="number"
            className="form-control"
            name ="estimatedHours"
            id="estimatedHours"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="estimatedHours" />
            </Alert>
            </div>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="assignedUsers">
                assigned members
            </label>
            <Field type="text"
            className="form-control"
            name ="assignedUsers"
            id="assignedUsers"
            />
            <Alert className="p-0 text-danger mt-1" variant="light">
              <ErrorMessage name="assignedUsers" />
            </Alert>
            </div>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <Button className="rounded-pill px-4 btn-primary" type="submit">
            Add task
          </Button>
          <Button className="rounded-pill px-4" variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
        </Form>
        </Formik>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AddTask;