import { useState } from "react";
import Button from "@/components/base/Button";

const Winogrona = (props) => {

  const [color, setColor] = useState("red");
  const [text, setText] = useState("czerwone");

  console.log(props)

  const handleClick = () => {
    if(color == "red") {
      setColor("blue");
      setText("Im Deutschen gibt es drei bestimmte Artikel: der für männliche Wörter (Maskulinum), die für weibliche Wörter (Femininum) und das für sächliche Wörter (Neutrum). Wer Deutsch als Muttersprache gelernt hat, weiß meist intuitiv, ob ein Wort der, die oder das als Artikel hat. Deutsch lernenden Ausländern hingegen bleibt nur noch das Auswendiglernen, da es kaum Regeln zur Bestimmung des Artikels gibt. Hier folgen ein paar Hilfestellungen:");
    } else if (color == "green") {
      setColor("red");
      setText("czerwone");
    } else if (color == "black") {
      setColor("green");
      setText("zielone");
    } else if (color == "blue") {
      setColor("black");
      setText("GNU");
    }
  }

  return (
    <div>
      <p style={{color: color}}>
        <Button onClick={handleClick}>Zmień kolor</Button>
        Winogrona {text} 40% taniej 8.99zł za kilogram, a Banany Bio 25% taniej 4.99zł za kilogram!
      </p>
    </div>
  );
}

export default Winogrona