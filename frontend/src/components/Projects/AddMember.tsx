import { useEffect, useState } from "react";
import { Button, Modal, Alert, ListGroup } from "react-bootstrap";
import { ADD_MEMBER } from "../../graphQL/mutations/projects";
import { GET_USERS } from "../../graphQL/queries/users";
import { useMutation, useLazyQuery, ApolloError } from "@apollo/client";
import Loader from "../Layout/Loader";
import { UserBasicTypes } from "../../Types";
import { ErrorMessage, Field, Formik, Form } from "formik";

interface PropTypes {
  children: React.ReactNode;
  show: boolean;
  handleClose: () => void;
  handleShow: () => void;
}

let timeout: any;

const ModalLayout = ({
  children,
  show,
  handleClose,
  handleShow,
}: PropTypes) => {
  return (
    <>
      <Button
        className="rounded-pill d-inline-block ms-4 btn-primary"
        onClick={handleShow}
      >
        Add member
      </Button>
      <Modal show={show} onHide={handleClose} onShow={handleShow}>
        <Modal.Header closeButton>Users</Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button
            className="rounded-pill d-inline-block ms-4 btn-primary"
            onClick={handleClose}
          >
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

const AddMember = ({
  project,
  username,
}: {
  project: string;
  username: string;
}) => {
  const [getUsers, { data, error, loading }] = useLazyQuery(GET_USERS);
  const [users, setUsers] = useState<UserBasicTypes[]>([]);
  const [filteredUsers, setFilteredUsers] = useState<UserBasicTypes[]>([]);

  // MODAL
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = async () => {
    setShow(true);
    await getUsers({
      variables: {
        username,
        project,
      },
    });
  };
  //

  //FETCH USERS
  useEffect(() => {
    if (data) {
      const users = data.getUsers as UserBasicTypes[];
      setUsers(users);
      setFilteredUsers(users);
    }
  }, [loading]);

  const [mutate, addMember] = useMutation(ADD_MEMBER);
  const mutationError: ApolloError | undefined = addMember.error;
  const mutationData: any = addMember.data;
  const mutationLoading: boolean = addMember.loading;

  const validate = (values: { username: string }) => {
    const errors: { username?: string } = {};

    if (!values.username) {
      errors.username = "please enter a username";
    }
    return errors;
  };

  if (loading) {
    return (
      <ModalLayout
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <Loader height="100%" width="100%" />
      </ModalLayout>
    );
  }

  if (error) {
    return (
      <ModalLayout
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <p>Error fetching users</p>
      </ModalLayout>
    );
  }

  const handleSearch:
    | React.KeyboardEventHandler<HTMLInputElement>
    | undefined = (e) => {

      const filtered = users.filter((user) => {
        console.log(user.username
          .trim()
          .toLowerCase()
          .includes(e.currentTarget.value.trim().toLowerCase()))
      return user.username
          .trim()
          .toLowerCase()
          .includes(e.currentTarget.value.trim().toLowerCase())
      }
      );
      setFilteredUsers(filtered);

    };

  return (
    <>
      <ModalLayout
        show={show}
        handleClose={handleClose}
        handleShow={handleShow}
      >
        <Formik
          initialValues={{
            username: "",
          }}
          validate={validate}
          onSubmit={() => console.log("first")}
        >
          <Form>
            {mutationError ? (
              <Alert className="p-2" variant="danger">
                {mutationError?.message}
              </Alert>
            ) : null}
            {mutationData ? (
              <Alert className="p-2" variant="success">
                Member added
              </Alert>
            ) : null}
            <div className="mb-3">
              <Field
                type="text"
                className="form-control"
                name="username"
                id="username"
                placeholder="Search users: try typing a username or email"
                onKeyUp={handleSearch}
              />
              <Alert className="p-0 text-danger mt-1" variant="light">
                <ErrorMessage name="username" />
              </Alert>
            </div>
          </Form>
        </Formik>
        {!filteredUsers.length ? (
          <p>No users found</p>
        ) : (
          <ListGroup>
            {filteredUsers.map((user) => (
              <ListGroup.Item key={user._id}>{user.username}</ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </ModalLayout>
    </>
  );
};

export default AddMember;
