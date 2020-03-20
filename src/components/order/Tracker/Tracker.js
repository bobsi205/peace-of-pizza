import React, { useState, useEffect, useContext } from "react";
import { Container, ProgressBar } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";

const Tracker = () => {
  const { getCart, emptyCart } = useContext(CartContext);

  const [getProgress, setProgress] = useState([
    {
      label: "Order arrived",
      status: {
        now: 40,
        variant: "success",
        fontSize: "15pt"
      }
    },
    {
      label: "Making",
      status: {
        now: 15,
        variant: "dark",
        fontSize: "10pt"
      }
    },
    {
      label: "Oven",
      status: {
        now: 15,
        variant: "dark",
        fontSize: "10pt"
      }
    },
    {
      label: "Packing",
      status: {
        now: 15,
        variant: "dark",
        fontSize: "10pt"
      }
    },
    {
      label: "Delivery",
      status: {
        now: 15,
        variant: "dark",
        fontSize: "10pt"
      }
    }
  ]);
  useEffect(() => {
    emptyCart();
    setTimeout(() => {
      nextStage();
    }, 10000);
  }, []);
  const nextStage = () => {
    let tempProgress = [...getProgress];
    let i = tempProgress.findIndex(bar => bar.status.variant === "success");
    if (i < tempProgress.length - 1) {
      tempProgress[i + 1].status.now = 40;
      tempProgress[i + 1].status.variant = "success";
      tempProgress[i].status.now = 15;
      tempProgress[i].status.variant = "primary";
      setProgress(tempProgress);
    }
  };

  return (
    <Container
      className="d-flex justify-content-center flex-column"
      // style={{ width: "75%" }}
    >
      <h5 className="mt-5 mb-3">
        {getCart.currentUser.username}, Your pizza is on the way!
      </h5>
      <p> now all you need to do is sit and wait </p>
      <p>while our machine wheeles are grinding to make your perfect pizza</p>
      <Container
        className="d-flex justify-content-center rounded border bg-light align-items-center"
        style={{
          width: "100%",
          height: "150px"
        }}
      >
        <ProgressBar
          className="my-2 flex-fill"
          style={{
            height: "50px"
          }}
        >
          {getProgress.map((bar, index) => {
            return (
              <ProgressBar
                style={{ fontSize: bar.fontSize }}
                key={index}
                now={bar.status.now}
                label={bar.label}
                variant={bar.status.variant}
              />
            );
          })}
        </ProgressBar>
      </Container>
    </Container>
  );
};

export default Tracker;
