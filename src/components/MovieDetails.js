import React from "react";
import { Col, Row } from "react-bootstrap";

const MovieDetails = () => {
  return (
    <div>
      <Row className="justify-content-center">
        <Col md="12" xs="12" sm="12">
          <div className=" d-flex align-items-center">
            <img alt=""></img>
            <div>
              <p>اسم الفيلم: </p>
              <p>تاريخ الفيلم: </p>
              <p>عدد المقيمين: </p>
              <p>التقييم: </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col>
          
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
