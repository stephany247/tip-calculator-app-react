import React, { useState } from "react";
import logo from "./images/logo.svg";
import "./App.css";
import TipForm from "./components/TipForm";
import InputGroup from "./components/InputGroup";
import dollarIcon from "./images/icon-dollar.svg";
import peopleIcon from "./images/icon-person.svg";
import Output from "./components/Output";

function App() {
  const [bill, setBill] = useState("");
  const [tipPercentage, setTipPercentage] = useState(0);
  const [peopleValue, setPeopleValue] = useState("");
  const [customTip, setCustomTip] = useState("");
  const [billError, setBillError] = useState("");
  const [peopleError, setPeopleError] = useState("");

  const handleBillChange = (e) => {
    const value = parseFloat(e.target.value) || "";
    setBill(value);
    if (value <= 0) {
      setBillError("Can't be zero");
    } else {
      setBillError("");
    }
  };

  const handleTipSelect = (percentage) => {
    setTipPercentage(percentage / 100);
    setCustomTip("");
  };

  const handleCustomTipChange = (e) => {
    const customTipValue = parseFloat(e.target.value) || 0;
    setTipPercentage(customTipValue / 100);
    setCustomTip(e.target.value);
  };

  const handlePeopleChange = (e) => {
    const value = parseInt(e.target.value) || "";
    setPeopleValue(value);
    if (value <= 0) {
      setPeopleError("Can't be zero");
    } else {
      setPeopleError("");
    }
  };

  const resetValues = () => {
    setBill("");
    setTipPercentage(0);
    setPeopleValue("");
    setCustomTip("");
    setPeopleError("");
  };

  const isValid = bill > 0 && tipPercentage > 0 && peopleValue > 0;

  return (
    <div className="bg-lg-cyan font-space text-2xl text-grayish-cyan flex flex-col items-center justify-center h-screen m-auto">
      <header>
        <img src={logo} alt="Logo" />
      </header>
      <main className="bg-white p-8 rounded-3xl flex flex-col md:flex-row gap-8 my-8 sm:m-6 max-w-4xl">
        <form className="flex-1">
          <section>
            <InputGroup
              id="bill"
              label="Bill"
              placeholder="0"
              icon={dollarIcon}
              value={bill}
              onChange={handleBillChange}
              errorMessage={billError}
            />

            {/* Tip selection  */}
            <TipForm
              onTipSelect={handleTipSelect}
              customTip={customTip}
              handleCustomInputChange={handleCustomTipChange}
            />

            {/* People section */}
            <InputGroup
              id="people"
              label="Number of People"
              placeholder="0"
              icon={peopleIcon}
              value={peopleValue}
              onChange={handlePeopleChange}
              errorMessage={peopleError}
            />
          </section>
        </form>

        {/* Pass calculated values to the Output Display component */}
        <Output
          bill={bill}
          tipPercentage={tipPercentage}
          peopleValue={peopleValue}
          onReset={resetValues}
          isValid={isValid}
        />
      </main>
      <footer className="text-xs text-center">
        Challenge by{" "}
        <a
          className="text-dg-cyan"
          rel="noopener noreferrer"
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a className="text-dg-cyan" href="#">
          Onyinye Oguocha
        </a>
        .
      </footer>
    </div>
  );
}

export default App;
