import React, { useEffect, useRef, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import { withRouter } from "react-router-dom";
import ToppingsButtons from "./ToppingsButtons";

import toppings from "../../../data/pizzaToppings.json";

// TODO:
// * Check cart array structure

const PizaaCanvas = props => {
  const [getCart, setCart] = useContext(CartContext);
  const [getCurrTopId, setCurrTopId] = useState();

  const imgPizza = new Image();
  imgPizza.src = "/images/PizzaBuilder/pizza-base.png";
  imgPizza.onload = () => updateCanvas();

  const refCanvas = useRef(null);

  // let img;
  // const images = require.context("../../../images/toppings/", true);
  // for (let [key, value] of Object.entries(toppings)) {
  //   console.log(`${key}: ${value}`);
  //   img = { ...img, [key]: images("./" + key + ".png") };
  // }
  // let img = { ...img, babyMozzarella: images("./" + "babyMozzarella.png") };

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

    if (getCurrTopId && checkBounds) {
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

    getCart.pizzas[0].toppings.forEach(topping => {
      const top = toppings.find(top => top.id === topping.id);
      const atlas = new Image();
      atlas.src = top.atlas;
      atlas.onload = () => {
        ctx.drawImage(
          atlas,
          top.index * 50,
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
      <div className="d-flex align-content-center justify-content-center flex-column">
        {toppings.map(topping => {
          return (
            <ToppingsButtons
              key={topping.id}
              topping={topping}
              count={
                getCart.pizzas[0].toppings.filter(top => top.id === topping.id)
                  .length
              }
              setCurrTop={setCurrTopId}
            />
          );
        })}
      </div>

      <canvas
        style={{
          height: "400px",
          width: "400px"
        }}
        ref={refCanvas}
        width="400"
        height="400"
        onClick={e => addTopping(e)}
      />

      <div>
        <Button onClick={() => undo()}>UNDO</Button>
        <Button onClick={() => finishOrder()}>Finish Order</Button>
      </div>
    </>
  );
};

export default withRouter(PizaaCanvas);
