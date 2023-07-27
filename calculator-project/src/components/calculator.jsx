import { useState } from "react";
import OutputScreen from "./outputScreen";
import Button from "./button";
import "../css/Calculator.css";
import "../css/outputScreenRow.css";
import "../css/button.css";

function Calculator() {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  // Method to handle all click events from our buttons
  function handleClick(event) {
    const value = event.target.textContent; // Use textContent to get the button label

    switch (value) {
      case "=": {
        if (question !== "") {
          try {
            const ans = eval(question);
            if (ans === undefined) {
              setAnswer("Math Error");
            } else {
              setAnswer(ans);
              setQuestion("");
            }
          } catch (err) {
            setAnswer("Math Error");
          }
        }
        break;
      }

      case "Clear": {
        setQuestion("");
        setAnswer("");
        break;
      }

      case "Delete": {
        const str = question.slice(0, -1); // Use slice to remove the last character
        setQuestion(str);
        break;
      }

      default: {
        setQuestion(question + value);
        break;
      }
    }
  }

  return (
    <div className="frame">
      <div>
        <OutputScreen question={question} answer={answer} />
        <div className="button-row">
          <Button label={"Clear"} handleClick={handleClick} />
          <Button label={"Delete"} handleClick={handleClick} />
          <Button label={"."} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"7"} handleClick={handleClick} />
          <Button label={"8"} handleClick={handleClick} />
          <Button label={"9"} handleClick={handleClick} />
          <Button label={"*"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"4"} handleClick={handleClick} />
          <Button label={"5"} handleClick={handleClick} />
          <Button label={"6"} handleClick={handleClick} />
          <Button label={"-"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"1"} handleClick={handleClick} />
          <Button label={"2"} handleClick={handleClick} />
          <Button label={"3"} handleClick={handleClick} />
          <Button label={"+"} handleClick={handleClick} />
        </div>
        <div className="button-row">
          <Button label={"0"} handleClick={handleClick} />
          <Button label={"="} handleClick={handleClick} />
          <Button label={"/"} handleClick={handleClick} />
        </div>
      </div>
    </div>
  );
}

export default Calculator;
