import React, { useRef, useState, useContext } from "react";
import { Button, ProgressBar } from "react-bootstrap";
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
      if (over.distance < 10) {
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
    console.log("Canvas updated");
    const canvas = refCanvas.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgPizza, 0, 0, canvas.width, canvas.height);

    getOrder.forEach(topping => {
      const top = toppingsData.find(top => top.id === topping.id);
      const img = new Image();
      img.src = top.atlas;
      img.onload = () => {
        ctx.drawImage(
          img,
          topping.index * 50,
          0,
          50,
          50,
          topping.coords.x,
          topping.coords.y,
          50,
          50
        );
      };
    });
  };

  // const handleUndo = () => {
  //   if (getOrder.length > 0) {
  //     const tempOrder = [...getOrder];
  //     tempOrder.pop();
  //     setOrder(tempOrder);
  //   }
  // };

  // const handleClear = () => {
  //   setOrder([]);
  // };

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
            onClick={setSelectedTopping}
            selected={topping.id === getSelectedTopping}
            limit={toppingsLimit}
          />
        );
      });
  };

  return (
    <>
      <div className="d-flex flex-row">
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

        <span className="p-4 order-2">
          <canvas
            style={{
              height: "400px",
              minHeight: "400px",
              width: "400px",
              minWidth: "400px",
              margin: "10px 25px"
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
              className="flex-fill ml-2"
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
