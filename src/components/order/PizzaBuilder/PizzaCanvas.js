import React, { useEffect, useRef, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { withRouter } from "react-router-dom";
import ToppingsButtons from "./ToppingsButtons";

import toppings from "../../../data/pizzaToppings.json";

const PizaaCanvas = props => {
  const [getCart, setCart] = useContext(CartContext);
  const [getCurrTopId, setCurrTopId] = useState();
  const toppingsImages = new Image();

  const imgPizza = new Image();
  imgPizza.src = "/images/PizzaBuilder/pizza-base.png";
  imgPizza.onload = () => updateCanvas();

  const refCanvas = useRef(null);

  const addTopping = e => {
    const canvas = refCanvas.current;
    const canvasBound = canvas.getBoundingClientRect();

    const checkBounds = () => {
      const radius = Math.sqrt(
        Math.pow(e.clientX - canvasBound.left - canvas.width / 2, 2) +
          Math.pow(e.clientY - canvasBound.top - canvas.height / 2, 2)
      );

      return radius < 130;
    };

    if (getCurrTopId && checkBounds()) {
      const newTopping = {
        id: getCurrTopId,
        index: Math.floor(Math.random() * 5),
        coords: {
          x: e.clientX - 25 - canvasBound.left,
          y: e.clientY - 25 - canvasBound.top
        }
      };

      let tempData = { ...getCart };
      tempData.pizzas[0].toppings.push(newTopping);
      setCart(tempData);
    }
  };

  const updateCanvas = () => {
    console.log("Canvas updated");
    const canvas = refCanvas.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(imgPizza, 0, 0, canvas.width, canvas.height);

    getCart.pizzas[0].toppings.map(topping => {
      const top = toppings.find(top => top.id === topping.id);
      const img = new Image();
      img.src = top.atlas;
      img.onload = () =>
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
    });
  };

  const undo = () => {
    if (getCart.pizzas[0].toppings.length > 0) {
      let tempCart = { ...getCart };
      let toppName = tempCart.pizzas[0].toppings.pop();
      tempCart.pizzas[0].toppingCount[toppName.name]--;
      setCart(tempCart);
      updateCanvas();
    } else console.log("there are no toppings");
  };

  const finishOrder = () => {
    props.history.push({
      pathname: `/order/stage-3`
    });
  };

  return (
    <>
      <div className="d-flex flex-row">
        <sidebar className="flex-fill">
          {toppings.map(topping => {
            return (
              <ToppingsButtons
                key={topping.id}
                topping={topping}
                count={
                  getCart.pizzas[0].toppings.filter(
                    top => top.id === topping.id
                  ).length
                }
                setCurrTop={setCurrTopId}
              />
            );
          })}
        </sidebar>

        <sidebar className="flex-fill">
          {toppings.map(topping => {
            return (
              <ToppingsButtons
                key={topping.id}
                topping={topping}
                count={
                  getCart.pizzas[0].toppings.filter(
                    top => top.id === topping.id
                  ).length
                }
                setCurrTop={setCurrTopId}
              />
            );
          })}
        </sidebar>

        <canvas
          style={{
            height: "400px",
            minHeight: "400px",
            width: "400px",
            minWidth: "400px"
          }}
          ref={refCanvas}
          width="400"
          height="400"
          onClick={e => addTopping(e)}
        />
      </div>

      <div>
        <Button onClick={() => undo()}>UNDO</Button>
        <Button onClick={() => finishOrder()}>Finish Order</Button>
      </div>
    </>
  );
};

export default withRouter(PizaaCanvas);
