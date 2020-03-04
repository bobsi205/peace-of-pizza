import React from "react";
import { Button } from "react-bootstrap";
import Paparoni from "../images/toppings/paparoni.png";

const PizzaBuilder = props => {
  const [locations, setLocations] = React.useState([]);
  const canvasRef = React.useRef(null);
  const peperoniRef = React.useRef(null);
  var imageObj1 = new Image();
  imageObj1.src = Paparoni;

  React.useEffect(() => {
    const canvas = canvasRef.current;
    const loc = canvas.getBoundingClientRect();
    const ctx = canvas.getContext("2d");
    console.log(locations, canvas.getBoundingClientRect());
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    locations.forEach(location =>
      ctx.drawImage(imageObj1, location.x - loc.left, location.y - loc.top)
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
          ref={canvasRef}
          width={500}
          height={500}
          onClick={e => {
            const newLocation = { x: e.clientX, y: e.clientY };
            setLocations([...locations, newLocation]);
          }}
        />
      </div>
    </>
  );
};

export default PizzaBuilder;
