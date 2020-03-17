import React, { useEffect, useRef, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { CartContext } from "../../../context/CartContext";
import ToppingsButtons from "./ToppingsButtons";
import { withRouter } from "react-router-dom";
//toppings
import imgPepperoni from "../../../images/toppings/pepperoni.png";
import imgArtichoke from "../../../images/toppings/artichoke.png";
import imgBabyMozzarella from "../../../images/toppings/babyMozzarella.png";
import imgBeef from "../../../images/toppings/beef.png";
import imgBellPepers from "../../../images/toppings/bellPepers.png";
import imgBOlives from "../../../images/toppings/bOlives.png";
import imgBroccoli from "../../../images/toppings/broccoli.png";
import imgBulgarianCheese from "../../../images/toppings/bulgarianCheese.png";
import imgCabanos from "../../../images/toppings/cabanos.png";
import imgCorn from "../../../images/toppings/corn.png";
import imgExtraCheese from "../../../images/toppings/extraCheese.png";
import imgGarlic from "../../../images/toppings/garlic.png";
import imgGOlives from "../../../images/toppings/gOlives.png";
import imgJalapeno from "../../../images/toppings/jalapeno.png";
import imgMushrooms from "../../../images/toppings/mushrooms.png";
import imgSheepCheese from "../../../images/toppings/sheepCheese.png";
import imgTomato from "../../../images/toppings/tomato.png";
//pizza
import Pizza from "../../../images/Pizza2.0.png";

const PizaaCanvas = props => {
  const [getCart, setCart] = useContext(CartContext);
  console.log(getCart);
  const [currTop, setCurrTop] = useState();
  var pizzaImg = new Image();
  pizzaImg.src = Pizza;

  const canvasRef = useRef(null);

  //toppings inialization
  var toppingsImg = {
    Pepperoni: new Image(),
    Artichoke: new Image(),
    BabyMozzarella: new Image(),
    Beef: new Image(),
    BellPepers: new Image(),
    BlackOlives: new Image(),
    Broccoli: new Image(),
    BulgarianCheese: new Image(),
    Cabanos: new Image(),
    Corn: new Image(),
    ExtraCheese: new Image(),
    Garlic: new Image(),
    GreenOlives: new Image(),
    Jalapenos: new Image(),
    Mushrooms: new Image(),
    SheepCheese: new Image(),
    Tomato: new Image()
  };
  toppingsImg.Pepperoni.src = imgPepperoni;
  toppingsImg.Artichoke.src = imgArtichoke;
  toppingsImg.BabyMozzarella.src = imgBabyMozzarella;
  toppingsImg.Beef.src = imgBeef;
  toppingsImg.BellPepers.src = imgBellPepers;
  toppingsImg.BlackOlives.src = imgBOlives;
  toppingsImg.Broccoli.src = imgBroccoli;
  toppingsImg.BulgarianCheese.src = imgBulgarianCheese;
  toppingsImg.Cabanos.src = imgCabanos;
  toppingsImg.Corn.src = imgCorn;
  toppingsImg.ExtraCheese.src = imgExtraCheese;
  toppingsImg.Garlic.src = imgGarlic;
  toppingsImg.GreenOlives.src = imgGOlives;
  toppingsImg.Jalapenos.src = imgJalapeno;
  toppingsImg.Mushrooms.src = imgMushrooms;
  toppingsImg.SheepCheese.src = imgSheepCheese;
  toppingsImg.Tomato.src = imgTomato;
  // let img;
  // const images = require.context("../../../images/toppings/", true);
  // for (let [key, value] of Object.entries(toppings)) {
  //   console.log(`${key}: ${value}`);
  //   img = { ...img, [key]: images("./" + key + ".png") };
  // }
  // let img = { ...img, babyMozzarella: images("./" + "babyMozzarella.png") };
  const undo = () => {
    if (getCart.pizzas[0].toppings.length > 0) {
      let tempCart = { ...getCart };
      let toppName = tempCart.pizzas[0].toppings.pop();
      tempCart.pizzas[0].toppingCount[toppName.name]--;
      setCart(tempCart);
      updateCanvas();
    } else console.log("there are no toppings");
  };
  useEffect(() => {
    console.log(currTop);

    updateCanvas();
  });

  const updateCanvas = () => {
    console.log(getCart.pizzas[0].toppings);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pizzaImg, 0, 0, canvas.width, canvas.height);
    getCart.pizzas[0].toppings.forEach(location =>
      ctx.drawImage(
        location.topping,
        location.part,
        0,
        50,
        50,
        location.x,
        location.y,
        50,
        50
      )
    );
  };

  const finishOrder = () => {
    props.history.push({
      pathname: `/order/stage-3`
    });
  };

  return (
    <>
      <div className="d-flex align-content-center justify-content-center flex-column">
        <h2>Meats</h2>
        {getCart.toppingBuilder.meats.map(ele => {
          return (
            <ToppingsButtons
              topping={ele}
              count={getCart.pizzas[0].toppingCount[ele.replace(/\s/g, "")]}
              setCurrTop={setCurrTop}
            />
          );
        })}

        <h2>Cheeses</h2>
        {getCart.toppingBuilder.cheeses.map(ele => {
          return (
            <ToppingsButtons
              topping={ele}
              count={getCart.pizzas[0].toppingCount[ele.replace(/\s/g, "")]}
              setCurrTop={setCurrTop}
            />
          );
        })}
      </div>
      <canvas
        style={{
          height: 400,
          width: 400
        }}
        ref={canvasRef}
        width={400}
        height={400}
        onClick={e => {
          const canvas = canvasRef.current;
          const canvasBound = canvas.getBoundingClientRect();

          if (currTop === undefined) {
            console.log("choose a topping");
          } else if (
            Math.sqrt(
              Math.pow(e.clientX - canvasBound.left - canvas.width / 2, 2) +
                Math.pow(e.clientY - canvasBound.top - canvas.height / 2, 2)
            ) < 130
          ) {
            const newLocation = {
              x: e.clientX - 25 - canvasBound.left,
              y: e.clientY - 25 - canvasBound.top,
              name: currTop,
              part: Math.floor(Math.random() * Math.floor(5)) * 50,
              topping: toppingsImg[currTop]
            };
            console.log(currTop, getCart.pizzas[0].toppingCount[currTop]);
            let tempData = { ...getCart };
            tempData.pizzas[0].toppings.push(newLocation);
            tempData.pizzas[0].toppingCount[currTop]++;
            setCart(tempData);

            updateCanvas();
          } else {
            console.log("outside the pizza");
          }
        }}
      />
      <div className="d-flex align-content-center justify-content-center flex-column">
        <h2>Vegetables</h2>
        {getCart.toppingBuilder.vegetables.map(ele => {
          return (
            <ToppingsButtons
              topping={ele}
              count={getCart.pizzas[0].toppingCount[ele.replace(/\s/g, "")]}
              setCurrTop={setCurrTop}
            />
          );
        })}
      </div>
      <div>
        <Button onClick={() => undo()}>UNDO</Button>
        <Button onClick={() => finishOrder()}>Finish Order</Button>
      </div>
    </>
  );
};

export default withRouter(PizaaCanvas);
