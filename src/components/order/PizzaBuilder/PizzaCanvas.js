import React, { useRef, useState, useContext } from "react";
import { Button, ProgressBar } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { withRouter } from "react-router-dom";
import ToppingButton from "./ToppingButton";

const PizaaCanvas = props => {
  const toppingsLimit = 100;
  const [getSelectedTopping, setSelectedTopping] = useState();
  const { getCart, setCart, toppings } = useContext(CartContext);
  const [getOrder, setOrder] = useState(getCart.order[0].pizzaToppings); // TODO: Load current pizza's toppings

  const refCanvas = useRef(null);

  const imgPizza = new Image();
  imgPizza.src = "/images/PizzaBuilder/pizza-base.png";
  imgPizza.onload = () => updateCanvas();

  const addTopping = e => {
    const canvas = refCanvas.current;
    const canvasBound = canvas.getBoundingClientRect();

    const checkBounds = () => {
      const radius = Math.sqrt(
        Math.pow(e.clientX - canvasBound.left - canvas.width / 2, 2) +
          Math.pow(e.clientY - canvasBound.top - canvas.height / 2, 2)
      );

      return radius < 140;
    };

    if (
      checkBounds() &&
      getSelectedTopping &&
      getOrder.length < toppingsLimit
    ) {
      const newTopping = {
        id: getSelectedTopping,
        index: Math.floor(Math.random() * 5),
        coords: {
          x: e.clientX - 25 - canvasBound.left,
          y: e.clientY - 25 - canvasBound.top
        }
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
      const top = toppings.find(top => top.id === topping.id);
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
    const tempCart = getCart;
    tempCart.order[0].pizzaToppings = getOrder;
    setCart(tempCart);

    props.history.push({
      pathname: `/order/stage-3`
    });
  };

  const toppingButtons = filter => {
    return toppings
      .filter(top => top.category === filter)
      .map(topping => {
        return (
          <ToppingButton
            key={topping.id}
            topping={topping}
            count={getOrder.filter(top => top.id === topping.id).length}
            onClick={setSelectedTopping}
            selected={topping.id === getSelectedTopping ? true : false}
            limit={toppingsLimit}
          />
        );
      });
  };

  return (
    <>
      {/* Preload images */}
      <div
        style={{
          height: 0,
          width: 0,
          overflow: "hidden",
          margin: 0,
          padding: 0
        }}
      >
        {toppings.map(top => (
          <img src={top.atlas} alt="" key={top.id} />
        ))}
      </div>

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
            <Button size="lg" onClick={() => handleUndo()}>
              Undo
            </Button>
            <Button
              size="lg"
              className="flex-fill mx-2"
              onClick={() => handleFinish()}
            >
              Finish
            </Button>
            <Button size="lg" onClick={() => handleClear()}>
              Clear
            </Button>
          </div>
        </span>
      </div>
    </>
  );
};

export default withRouter(PizaaCanvas);
