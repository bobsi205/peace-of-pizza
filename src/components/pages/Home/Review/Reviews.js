import React from "react";
import { Container, Media } from "react-bootstrap";

import reviewsData from "./reviews.json";
import imgStarFull from "./images/icon-star-full.svg";
import imgStarEmpty from "./images/icon-star-empty.svg";

const Reviews = () => {
  const reviews = reviewsData;

  const GetStarts = rate => {
    let starts = [];

    for (let i = 1; i <= 5; i++) {
      if (i <= rate) {
        starts.push(<img src={imgStarFull} alt="" height="16" key={i} />);
      } else {
        starts.push(<img src={imgStarEmpty} alt="" height="16" key={i} />);
      }
    }

    return starts;
  };

  return (
    <section className="py-4 my-4">
      <Container>
        <h3 className="text-center">Here's What People Think About Us</h3>

        <div className="row my-4">
          {reviews.map(review => (
            <div className="p-2 col-12 col-lg-6" key={review.id}>
              <Media className="bg-light p-4 rounded-lg">
                <img
                  src={review.avatar}
                  alt=""
                  width={64}
                  height={64}
                  className="mr-4"
                  style={{ borderRadius: "100%" }}
                />
                <Media.Body>
                  <span className="d-flex">
                    <h5 className="flex-fill">{review.user}</h5>
                    <span>{GetStarts(review.rate)}</span>
                  </span>

                  <p>{review.text}</p>
                </Media.Body>
              </Media>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Reviews;
