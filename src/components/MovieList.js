import React from "react";
import { Row } from "react-bootstrap";
import { CardMovie } from "./CardMovie";
import { Paginate } from "./Paginate";

export const MovieList = ({ movies, getPagination }) => {
  return (
    <Row className="mt-3">
      {movies.length >= 1 ? (
        movies.map((mov) => {
          return <CardMovie key={mov.id} mov={mov}></CardMovie>;
        })
      ) : (
        <h1></h1>
      )}

      <Paginate getPagination={getPagination}></Paginate>
    </Row>
  );
};
