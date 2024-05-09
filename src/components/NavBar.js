import React, { useState } from "react";
import {
  Button,
  Col,
  Container,
  Row,
} from "react-bootstrap";
import { FaBeer } from "react-icons/fa";
import { FaFacebook, FaSearch } from "react-icons/fa";
 

const NavBar = ( { search } ) =>
{
  const onSearch = (word) =>
  {
    search(word)
  }
  return (
    <div className="nav-style w-100">
      <Container nav-container>
        <Row className="pt-3 ">
          <Col xs="2" lg="1">
            <img className="logo" src="team-01.png" alt=""></img>
          </Col>
          <Col xs="10" lg="11">
            <div className="search">
              <FaSearch className="icon" />
              <input
                onChange={ ( e ) => onSearch( e.target.value ) }
                type="text"
                className="form-control"
                placeholder="ابحث.."
              ></input>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default NavBar;
