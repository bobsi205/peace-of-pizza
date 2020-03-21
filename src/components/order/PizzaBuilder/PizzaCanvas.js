import React, { useRef, useState, useContext } from "react";
import { Button, ProgressBar, Modal } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { withRouter } from "react-router-dom";
import ToppingButton from "./ToppingButton";

const PizaaCanvas = props => {
  const newPizza = true; // TODO: Check if in edit mode
  const pizzaId = ""; // TODO: Load current pizza's ID
  const pizzaName = "Test Pizza"; // TODO: Get pizza's name

  const toppingsLimit = 100;
  const [getSelectedTopping, setSelectedTopping] = useState();
  const { toppingsData, addPizza, updatePizza } = useContext(CartContext);
  const [getOrder, setOrder] = useState([]);
  const [smShow, setSmShow] = useState(false);

  const refCanvas = useRef(null);

  const imgPizza = new Image();
  imgPizza.src = "/images/PizzaBuilder/pizza-base.png";
  imgPizza.onload = () => updateCanvas();

  const addTopping = e => {
    const canvas = refCanvas.current;
    const canvasBound = canvas.getBoundingClientRect();
    const point = {
      x: e.clientX - canvasBound.left - 25,
      y: e.clientY - canvasBound.top - 25
    };

    const checkBounds = () => {
      const radius = Math.sqrt(
        Math.pow(point.x - canvas.width / 2 + 25, 2) +
          Math.pow(point.y - canvas.height / 2 + 25, 2)
      );
      return radius < 140;
    };

    const checkOverlap = () => {
      let closest = Infinity;
      let closestIndex = 0;

      getOrder.forEach((top, i) => {
        let distance = Math.sqrt(
          Math.pow(point.x - top.coords.x, 2) +
            Math.pow(point.y - top.coords.y, 2)
        );
        if (distance < closest) {
          closest = distance;
          closestIndex = i;
        }
      });

      return { distance: closest, index: closestIndex };
    };

    if (!getSelectedTopping) {
      let over = checkOverlap();
      if (over.distance < 15) {
        const tOrder = [...getOrder];
        tOrder.splice(over.index, 1);
        setOrder(tOrder);
      }
    } else if (
      checkBounds() &&
      getOrder.length < toppingsLimit &&
      checkOverlap().distance > 10
    ) {
      const newTopping = {
        id: getSelectedTopping,
        index: Math.floor(Math.random() * 5),
        coords: point
      };

      setOrder([...getOrder, newTopping]);
    }
  };

  const updateCanvas = () => {
    const canvas = refCanvas.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgPizza, 0, 0, canvas.width, canvas.height);

    getOrder.forEach(topping => {
      const top = toppingsData.find(top => top.id === topping.id);
      const img = new Image();
      img.src = top.atlas;
      ctx.drawImage(
        img,
        topping.index * 50,
        0,
        50,
        50,
        topping.coords.x * (400 / canvas.clientWidth),
        topping.coords.y * (400 / canvas.clientHeight),
        50,
        50
      );
    });
  };

  const handleUndo = () => {
    if (getOrder.length > 0) {
      const tempOrder = [...getOrder];
      tempOrder.pop();
      setOrder(tempOrder);
    }
  };

  const handleClear = () => {
    setOrder([]);
  };

  const handleFinish = () => {
    if (newPizza) {
      addPizza(pizzaName, getOrder);
    } else {
      updatePizza(pizzaId, pizzaName, getOrder);
    }
    props.history.push({
      pathname: `/order/stage-3`
    });
  };

  const toppingButtons = filter => {
    return toppingsData
      .filter(top => top.category === filter)
      .map(topping => {
        return (
          <ToppingButton
            key={topping.id}
            topping={topping}
            count={getOrder.filter(top => top.id === topping.id).length}
            onClick={() => {
              setSelectedTopping(topping.id);
              setSmShow(false);
            }}
            selected={topping.id === getSelectedTopping}
            limit={toppingsLimit}
          />
        );
      });
  };

  return (
    <>
      {/* Preload images */}
      <div style={{ width: "0", height: "0", overflow: "hidden" }}>
        {toppingsData.map(top => (
          <img src={top.atlas} alt="" />
        ))}
      </div>
      <div className="d-lg-flex flex-row">
        {window.innerWidth > 767 ? (
          <>
            <div className="mr-2 flex-fill order-1">
              <h4>Vegetable</h4>
              {toppingButtons("Vegetable")}
            </div>

            <span className="flex-fill d-flex flex-column order-3">
              <div className="mr-2">
                <h4>Dairy</h4>
                {toppingButtons("Dairy")}
              </div>

              <div className="mr-2">
                <h4>Meats</h4>
                {toppingButtons("Meats")}
              </div>
            </span>
          </>
        ) : (
          <div className="d-flex justify-content-center">
            <Button
              onClick={() => setSmShow(true)}
              className="align-self-center"
            >
              Select Topping
            </Button>

            <Modal
              size="sm"
              show={smShow}
              onHide={() => setSmShow(false)}
              aria-labelledby="example-modal-sizes-title-sm"
            >
              <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                  Toppings select
                </Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div className="mr-2 flex-fill order-1">
                  <h4>Vegetable</h4>
                  {toppingButtons("Vegetable")}
                </div>

                <span className="flex-fill d-flex flex-column order-3">
                  <div className="mr-2">
                    <h4>Dairy</h4>
                    {toppingButtons("Dairy")}
                  </div>

                  <div className="mr-2">
                    <h4>Meats</h4>
                    {toppingButtons("Meats")}
                  </div>
                </span>
              </Modal.Body>
            </Modal>
          </div>
        )}
        <span className="p-lg-4 order-2">
          <canvas
            style={{
              height: "100%",
              maxHeight: "400px",
              width: "100%",
              maxWidth: "400px"
            }}
            ref={refCanvas}
            width="400"
            height="400"
            onClick={e => addTopping(e)}
          />

          <ProgressBar
            className="my-2 flex-fill"
            now={getOrder.length}
            max={toppingsLimit}
            label={
              getOrder.length >= toppingsLimit ? "Toppings limit reached" : ""
            }
            style={{ height: "25px", fontSize: "12pt" }}
          />

          <div className="d-flex">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setSelectedTopping()}
            >
              Remove Topping
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="ml-2"
              onClick={() => handleUndo()}
            >
              Undo
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="flex-fill ml-2"
              onClick={() => handleClear()}
            >
              Clear
            </Button>
          </div>
          <div className="d-flex pt-2">
            <Button
              size="lg"
              variant="secondary"
              className="flex-fill"
              onClick={() => handleFinish()}
            >
              Finish
            </Button>
          </div>
        </span>
      </div>
    </>
  );
};

export default withRouter(PizaaCanvas);
