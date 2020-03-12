import React from "react";
import { Container, Media } from "react-bootstrap";

// TODO:
// Add more reviews
// Change the rating meter
// Fix the grid spacing

const Reviews = () => {
  const reviews = [
    {
      id: 0,
      user: "joe.smo6",
      avatar: "\\images\\avatars\\avatar-01.jpg",
      text: "It's good.",
      rate: 5
    },
    {
      id: 1,
      user: "david.sank",
      avatar: "\\images\\avatars\\avatar-02.jpg",
      text:
        "Perfect flop and crisp, but cheese and sauce is a tad bland. Still a great neighborhood spot",
      rate: 4.8
    },
    {
      id: 2,
      user: "arbi",
      avatar: "\\images\\avatars\\avatar-03.jpg",
      text:
        "All quality ingredients, lots of dough, not enough sauce and cheese. Bottom cooked well done, which is nice",
      rate: 4.5
    },
    {
      id: 3,
      user: "dylan.flores",
      avatar: "\\images\\avatars\\avatar-04.jpg",
      text:
        "Alright Frankie, we got a banger of a slice here today. Crust is very crispy and there’s no New York flop present here. Cheese melts in your mouth. Not too greasy either. If you haven’t been here yet put it on the list. ",
      rate: 4.2
    }
  ];
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
                  className="mr-4 rounded-lg"
                />
                <Media.Body>
                  <span className="d-flex">
                    <h5 className="flex-fill">{review.user}</h5>
                    <span>
                      <strong>{review.rate}</strong> / 5
                    </span>
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
