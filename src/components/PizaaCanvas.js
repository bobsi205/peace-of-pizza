import React from "react";
import imgPepperoni from "../images/toppings/pepperoni.png";
import imgArtichoke from "../images/toppings/artichoke.png";
// import imgBabyMozzarella from "../images/toppings/BabyMozzarella.png";
import Pizza from "../images/Pizza2.0.png";

const PizaaCanvas = () => {
  //{rx,ry,topping,sx}
  const [ToppingsLoc, setToppingsLoc] = React.useState([]);
  const canvasRef = React.useRef(null);
  var imageObj1 = new Image();
  var imageObj2 = new Image();
  var pizzaImg = new Image();
  imageObj1.src = imgPepperoni;
  var toppings = {
    pepperoni: imageObj1
  };
  pizzaImg.src = Pizza;
  toppings = { ...toppings, artichoke: imageObj1 };

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const loc = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    ctx.drawImage(pizzaImg, 0, 0, canvas.width, canvas.height);

    console.log(ToppingsLoc, canvas.getBoundingClientRect());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pizzaImg, 0, 0, canvas.width, canvas.height);
    ToppingsLoc.forEach(location =>
      ctx.drawImage(
        toppings.pepperoni,
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
        width={500}
        height={500}
        onClick={e => {
          const canvas = canvasRef.current;
          const loc = canvas.getBoundingClientRect();
          const newLocation = {
            x: e.clientX - 25 - loc.left,
            y: e.clientY - 25 - loc.top,
            part: Math.floor(Math.random() * Math.floor(5)) * 50
          };
          setToppingsLoc([...ToppingsLoc, newLocation]);
        }}
      />
    </div>
  );
};

export default PizaaCanvas;
