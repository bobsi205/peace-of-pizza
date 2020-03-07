import React from "react";
//toppings
import imgPepperoni from "../images/toppings/pepperoni.png";
import imgArtichoke from "../images/toppings/artichoke.png";
import imgBabyMozzarella from "../images/toppings/babyMozzarella.png";
import imgBeef from "../images/toppings/beef.png";
import imgBellPepers from "../images/toppings/bellPepers.png";
import imgBOlives from "../images/toppings/bOlives.png";
import imgBroccoli from "../images/toppings/broccoli.png";
import imgBulgarianCheese from "../images/toppings/bulgarianCheese.png";
import imgCabanos from "../images/toppings/cabanos.png";
import imgCorn from "../images/toppings/corn.png";
import imgExtraCheese from "../images/toppings/extraCheese.png";
import imgGarlic from "../images/toppings/garlic.png";
import imgGOlives from "../images/toppings/gOlives.png";
import imgJalapeno from "../images/toppings/jalapeno.png";
import imgMushrooms from "../images/toppings/mushrooms.png";
import imgSheepCheese from "../images/toppings/sheepCheese.png";
import imgTomato from "../images/toppings/tomato.png";
//pizza
import Pizza from "../images/Pizza2.0.png";

const PizaaCanvas = () => {
  //{rx,ry,topping,sx}
  const [ToppingsLoc, setToppingsLoc] = React.useState([]);
  const canvasRef = React.useRef(null);
  var pizzaImg = new Image();
  pizzaImg.src = Pizza;

  //toppings inialization
  var toppings = {
    pepperoni: new Image(),
    artichoke: new Image(),
    BabyMozzarella: new Image(),
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
  toppings.pepperoni.src = imgPepperoni;
  toppings.artichoke.src = imgArtichoke;
  toppings.BabyMozzarella.src = imgBabyMozzarella;
  toppings.beef.src = imgBeef;
  toppings.bellPepers.src = imgBellPepers;
  toppings.bOlives.src = imgBOlives;
  toppings.broccoli.src = imgBroccoli;
  toppings.bulgarianCheese.src = imgBulgarianCheese;
  toppings.cabanos.src = imgCabanos;
  toppings.corn.src = imgCorn;
  toppings.extraCheese.src = imgExtraCheese;
  toppings.garlic.src = imgGarlic;
  toppings.gOlives.src = imgGOlives;
  toppings.jalapeno.src = imgJalapeno;
  toppings.mushrooms.src = imgMushrooms;
  toppings.sheepCheese.src = imgSheepCheese;
  toppings.tomato.src = imgTomato;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pizzaImg, 0, 0, canvas.width, canvas.height);
    ToppingsLoc.forEach(location =>
      ctx.drawImage(
        toppings.jalapeno,
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
  });
  return (
    <div>
      <canvas
        style={{ backgroundImage: "url(../images/Pizza2.0.png)" }}
        ref={canvasRef}
        width={400}
        height={400}
        onClick={e => {
          const canvas = canvasRef.current;
          const canvasBound = canvas.getBoundingClientRect();

          if (
            Math.sqrt(
              Math.pow(e.clientX - canvasBound.left - canvas.width / 2, 2) +
                Math.pow(e.clientY - canvasBound.top - canvas.height / 2, 2)
            ) < 130
          ) {
            const newLocation = {
              x: e.clientX - 25 - canvasBound.left,
              y: e.clientY - 25 - canvasBound.top,
              part: Math.floor(Math.random() * Math.floor(5)) * 50
            };
            setToppingsLoc([...ToppingsLoc, newLocation]);
          } else {
            console.log("outside the pizza");
          }
        }}
      />
    </div>
  );
};

export default PizaaCanvas;
