import { useState } from "react";

const Winogrona = () => {

  const [color, setColor] = useState("red");
  const [text, setText] = useState("czerwone");

  const handleClick = () => {
    if(text == "czerwone") {
      setColor("blue");
      setText("niebieskie");
    } else if (text == "zielone") {
      setColor("red");
      setText("czerwone");
    } else if (text == "splesniale") {
      setColor("green");
      setText("zielone");
    } else if (text == "niebieskie") {
      setColor("pink");
      setText("splesniale");
    }
  }

  return (
    <div>
      <p style={{color: color}}>
        <button className="btn btn-outline-success" onClick={handleClick}>Zmień kolor</button>
        Winogrona {text} 40% taniej 8.99zł za kilogram, a Banany Bio 25% taniej 4.99zł za kilogram!
      </p>
    </div>
  );
}

export default Winogrona