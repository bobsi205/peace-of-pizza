import React, { useEffect, useRef, useState, useContext } from "react";
import { Button } from "react-bootstrap";
import { MyContext } from "../../context/MyContext";

//toppings
import imgPepperoni from "../../images/toppings/pepperoni.png";
import imgArtichoke from "../../images/toppings/artichoke.png";
import imgBabyMozzarella from "../../images/toppings/babyMozzarella.png";
import imgBeef from "../../images/toppings/beef.png";
import imgBellPepers from "../../images/toppings/bellPepers.png";
import imgBOlives from "../../images/toppings/bOlives.png";
import imgBroccoli from "../../images/toppings/broccoli.png";
import imgBulgarianCheese from "../../images/toppings/bulgarianCheese.png";
import imgCabanos from "../../images/toppings/cabanos.png";
import imgCorn from "../../images/toppings/corn.png";
import imgExtraCheese from "../../images/toppings/extraCheese.png";
import imgGarlic from "../../images/toppings/garlic.png";
import imgGOlives from "../../images/toppings/gOlives.png";
import imgJalapeno from "../../images/toppings/jalapeno.png";
import imgMushrooms from "../../images/toppings/mushrooms.png";
import imgSheepCheese from "../../images/toppings/sheepCheese.png";
import imgTomato from "../../images/toppings/tomato.png";
//pizza
import Pizza from "../../images/Pizza2.0.png";

const PizaaCanvas = props => {
  const [myData, setMyData] = useContext(MyContext);
  console.log(myData);
  const [currTop, setCurrTop] = useState();
  var pizzaImg = new Image();
  pizzaImg.src = Pizza;

  const canvasRef = useRef(null);

  //toppings inialization
  var toppingsImg = {
    pepperoni: new Image(),
    artichoke: new Image(),
    babyMozzarella: new Image(),
    beef: new Image(),
    bellPepers: new Image(),
    bOlives: new Image(),
    broccoli: new Image(),
    bulgarianCheese: new Image(),
    cabanos: new Image(),
    corn: new Image(),
    extraCheese: new Image(),
    garlic: new Image(),
    gOlives: new Image(),
    jalapeno: new Image(),
    mushrooms: new Image(),
    sheepCheese: new Image(),
    tomato: new Image()
  };
  toppingsImg.pepperoni.src = imgPepperoni;
  toppingsImg.artichoke.src = imgArtichoke;
  toppingsImg.babyMozzarella.src = imgBabyMozzarella;
  toppingsImg.beef.src = imgBeef;
  toppingsImg.bellPepers.src = imgBellPepers;
  toppingsImg.bOlives.src = imgBOlives;
  toppingsImg.broccoli.src = imgBroccoli;
  toppingsImg.bulgarianCheese.src = imgBulgarianCheese;
  toppingsImg.cabanos.src = imgCabanos;
  toppingsImg.corn.src = imgCorn;
  toppingsImg.extraCheese.src = imgExtraCheese;
  toppingsImg.garlic.src = imgGarlic;
  toppingsImg.gOlives.src = imgGOlives;
  toppingsImg.jalapeno.src = imgJalapeno;
  toppingsImg.mushrooms.src = imgMushrooms;
  toppingsImg.sheepCheese.src = imgSheepCheese;
  toppingsImg.tomato.src = imgTomato;
  // let img;
  // const images = require.context("../../images/toppings/", true);
  // for (let [key, value] of Object.entries(toppings)) {
  //   console.log(`${key}: ${value}`);
  //   img = { ...img, [key]: images("./" + key + ".png") };
  // }
  // let img = { ...img, babyMozzarella: images("./" + "babyMozzarella.png") };
  const undo = () => {
    if (myData.pizzas[0].toppings.length > 0) {
      myData.pizzas[0].toppings.pop();
      updateCanvas();
    } else console.log("there are no toppings");
  };
  useEffect(() => {
    updateCanvas();
  });

  const updateCanvas = () => {
    console.log(myData.pizzas);
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pizzaImg, 0, 0, canvas.width, canvas.height);
    myData.pizzas[0].toppings.forEach(location =>
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

  return (
    <>
      <div className="d-flex align-content-center justify-content-center flex-column">
        <h2>Meats</h2>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("pepperoni")}
        >
          Pepperoni
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("beef")}
        >
          Beef
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("cabanos")}
        >
          Cabanos
        </Button>

        <h2>Cheeses</h2>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("babyMozzarella")}
        >
          baby muzzarella
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("bulgarianCheese")}
        >
          Bulgarian Cheese
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("extraCheese")}
        >
          Extra Cheese
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("sheepCheese")}
        >
          Sheep Cheese
        </Button>
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
              part: Math.floor(Math.random() * Math.floor(5)) * 50,
              topping: toppingsImg[currTop]
            };
            myData.pizzas[0].toppings.push(newLocation);
            updateCanvas();
          } else {
            console.log("outside the pizza");
          }
        }}
      />
      <div className="d-flex align-content-center justify-content-center flex-column">
        <h2>Vegetables</h2>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("artichoke")}
        >
          artichoke
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("bOlives")}
        >
          Black Olives
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("gOlives")}
        >
          Green Olives
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("broccoli")}
        >
          Broccoli
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("corn")}
        >
          Corn
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("garlic")}
        >
          Garlic
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("jalapeno")}
        >
          Jalapenos
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("mushrooms")}
        >
          Mushrooms
        </Button>
        <Button
          variant="light"
          className="toppingBtnGrp"
          onClick={() => setCurrTop("tomato")}
        >
          Tomato
        </Button>
        <div class="btn-group" role="group" aria-label="Basic example">
          <Button
            variant="light"
            className="btn-secondary"
            onClick={() => setCurrTop("tomato")}
          >
            Tomato
          </Button>
          <Button variant="light" className="btn-secondary toppingCount">
            7
          </Button>
        </div>
      </div>
      <div>
        <Button onClick={() => undo()}>UNDO</Button>
      </div>
    </>
  );
};

export default PizaaCanvas;
