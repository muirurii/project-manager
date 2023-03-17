import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Formik,Field,Form } from 'formik';

const AddMember = () =>{
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button  className="rounded-pill d-inline-block ms-4 btn-primary" onClick={handleShow}>
        Add member
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add member</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Formik
         initialValues= {{
            memberName:"",
        }}
        onSubmit= {(values,{setSubmitting}) =>{
            console.log(values);
        }}
        >
            <Form>
            <div className="mb-3">
            <label className="form-label"
            htmlFor="memberName">
                member name
            </label>
            <Field type="text"
            className="form-control"
            name ="memberName"
            id="memberName"
            />
            </div>
        </Form>
        </Formik>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-between align-items-center">
          <Button className="rounded-pill px-4 btn-primary" type="submit" onClick={handleClose}>
            Add
          </Button>
          <Button className="rounded-pill px-4" variant="outline-dark" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default AddMember;