import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  Nav,
  Row,
  Tab,
  Table,
  Tabs,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { setAlert } from "../redux/actions/alertAction";
import { addUser, deleteUser, getAllUsers } from "../redux/actions/userActions";

const Dashboard = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { adminInfo } = useSelector((state) => state.adminLogin);
  const { success } = useSelector((state) => state.addUser);
  const { success : deleteSuccess } = useSelector((state) => state.deleteUser);
  const { loading, users } = useSelector((state) => state.allUsers);
  useEffect(() => {
    if (!adminInfo) {
      navigate("/");
    }
  }, [adminInfo]);
  const [formData, setFormData] = useState({
    email: "",
    username: "",
    mobile: "",
    address: "",
  });
  const { email, mobile, address, username } = formData;
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = () => {
    dispatch(addUser(formData));
    dispatch(setAlert("User added successfully!", "success"));
    setFormData({ email: "", username:"", mobile: "", address: "" });
  };
  useEffect(() => {
    dispatch(getAllUsers());
  }, [success, deleteSuccess]);
  const handleDelete = (id) => {
    dispatch(deleteUser(id))
    dispatch(setAlert("User deleted", "success"));
  }
  return (
    <Container>
      <Row className=" my-5">
        <Col
          xs={10}
          md={8}
          className="mx-auto my-5 p-4"
          style={{ backgroundColor: "white" }}
        >
          <Tabs
            defaultActiveKey="add"
            id="uncontrolled-tab-example"
            className="mb-3"
          >
            <Tab eventKey="add" title="Add new user">
              <Form>
                <Row className="mb-3">
                  <Form.Group as={Col}>
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Enter Username"
                      name="username"
                      value={username}
                      onChange={handleChange}
                    />
                  </Form.Group>

                  <Form.Group as={Col}>
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Mobile Number"
                      name="mobile"
                      value={mobile}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Row>
                <Form.Group className="mb-3" controlId="formGridAddress1">
                  <Form.Label>Address</Form.Label>
                  <Form.Control
                    placeholder="1234 Main St"
                    name="address"
                    value={address}
                    onChange={handleChange}
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email </Form.Label>
                  <Form.Control
                    placeholder="Enter email"
                    name="email"
                    value={email}
                    onChange={handleChange}
                  />
                </Form.Group>

                <Button variant="primary" onClick={handleSubmit}>
                  Submit
                </Button>
              </Form>
            </Tab>
            <Tab eventKey="all_users" title="All users">
              {loading ? (
                "...LOADING"
              ) : (
                <Table striped bordered hover responsive>
                  <thead>
                    <tr>
                      <th>Username</th>
                      <th>Mobile Number</th>
                      <th>Address</th>
                      <th>Email</th>
                      <th>Deleye</th>
                    </tr>
                  </thead>
                  <tbody>
                    {users.map((u) => (
                      <tr key={u._id}>
                        <td>{u.username}</td>
                        <td>{u.mobile}</td>
                        <td>{u.address}</td>
                        <td>{u.email}</td>
                        <td><Button onClick = {() => handleDelete(u._id)}>Delete</Button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </Table>
              )}
            </Tab>
          </Tabs>
        </Col>
      </Row>
    </Container>
  );
};

export default Dashboard;
