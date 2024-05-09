import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";

export const CardMovie = ({ mov }) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="my-1 ">
      {/* { mov.known_for.map( ( c, i ) =>
      {
        if ( i === 0 ) { */}
      <Link to={`/movie/${mov.id}`}>
        <div className="card">
          <img
            src={`https://image.tmdb.org/t/p/w500/` + mov.poster_path}
            // src={"team-01.png"}
            className="card_img"
            alt=""
          />
          <div className="card_overly">
            <div className="overly-text">
              <p>اسم الفلم : {mov.original_name}</p>
              <p> تاريخ الاصدار: {mov.release_date}</p>
              <p>عدد المقيمين: {mov.vote_count}</p>
              <p>التقييم : {mov.vote_average}</p>
            </div>
          </div>
        </div>
      </Link>

      {/* }
      } ) } */}
    </Col>
  );
};
