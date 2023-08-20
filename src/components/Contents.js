import React, { useState } from "react";
import "../assets/scss/sidebar.scss";
import { Col, Container, Row } from "react-bootstrap";
import Sidebar from "./Sidebar";
import Header from "./Header";

const Contents = ({ children }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <Header show={show} setShow={setShow} />
      <Container fluid>
        <Row>
          <Col md={2} lg={1}>
            <Sidebar show={show} />
          </Col>
          <Col md={10} lg={11}>
            {children}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Contents;
