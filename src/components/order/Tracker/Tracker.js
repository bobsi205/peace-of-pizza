import React, { useState, useEffect } from "react";
import { Container, ProgressBar } from "react-bootstrap";

const Tracker = () => {
  const [getProgress, setProgress] = useState([
    {
      label: "Order arrived",
      status: {
        now: 40,
        variant: "success"
      }
    },
    {
      label: "Making",
      status: {
        now: 15,
        variant: "dark"
      }
    },
    {
      label: "Oven",
      status: {
        now: 15,
        variant: "dark"
      }
    },
    {
      label: "Packing",
      status: {
        now: 15,
        variant: "dark"
      }
    },
    {
      label: "Delivery",
      status: {
        now: 15,
        variant: "dark"
      }
    }
  ]);
  useEffect(() => {
    setTimeout(() => {
      nextStage();
    }, 3000);
  });
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
    <Container className="d-flex justify-content-center flex-column">
      <h2>Great! Your pizza is on the way!</h2>

      <Container
        className="d-flex justify-content-center"
        style={{ width: "100%" }}
      >
        <ProgressBar
          className="my-2 flex-fill"
          style={{
            height: "50px",
            fontSize: "12pt"
          }}
        >
          {getProgress.map((bar, index) => {
            return (
              <ProgressBar
                key={index}
                now={bar.status.now}
                label={bar.label}
                variant={bar.status.variant}
              />
            );
          })}
        </ProgressBar>
      </Container>
      <input type="button" onClick={() => nextStage()} value="next stage" />
    </Container>
  );
};

export default Tracker;
