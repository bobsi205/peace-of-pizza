import React from "react";
import { Button } from "react-bootstrap";
import Paparoni from "../images/toppings/temp.png";
import Pizza from "../images/Pizza2.0.png";
const PizzaBuilder = props => {
  //{rx,ry,topping,sx}
  const [Toppings, setToppings] = React.useState([]);
  const canvasRef = React.useRef(null);
  var imageObj1 = new Image();
  var pizzaImg = new Image();
  imageObj1.src = Paparoni;
  pizzaImg.src = Pizza;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const loc = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    console.log(Toppings, canvas.getBoundingClientRect());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(pizzaImg, 0, 0, canvas.width, canvas.height);
    Toppings.forEach(location =>
      ctx.drawImage(
        imageObj1,
        location.part,
        0,
        50,
        50,
        location.x - loc.left,
        location.y - loc.top,
        50,
        50
      )
    );
  });

  return (
    <>
      <h2>Pizza Builder</h2>
      <div className="d-flex align-content-center justify-content-center">
        <div className="d-flex align-content-center justify-content-center flex-column">
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
          <Button> peperoni </Button>
        </div>
        <canvas
          style={{ backgroundImage: "url(../images/Pizza2.0.png)" }}
          ref={canvasRef}
          width={500}
          height={500}
          onClick={e => {
            const newLocation = {
              x: e.clientX - 25,
              y: e.clientY - 25,
              part: Math.floor(Math.random() * Math.floor(5)) * 50
            };
            setToppings([...Toppings, newLocation]);
          }}
        />
      </div>
    </>
  );
};

export default PizzaBuilder;
