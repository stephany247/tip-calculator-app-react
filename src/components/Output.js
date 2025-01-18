import React from "react";

const Output = ({ bill, tipPercentage, peopleValue, onReset, isValid }) => {


  const tipAmount = isValid ? (bill * tipPercentage) / peopleValue : 0;
  const totalAmount = isValid ? (bill + bill * tipPercentage) / peopleValue : 0;

  function formatNumber(value) {
    if (value > 100000) {
      return value.toExponential(2); // Display two decimal places in exponential form
    }
    return value.toFixed(2); // Standard format with two decimal places
  }

  const renderOutputRow = (label, value) => (
    <div className="flex justify-between items-center">
      <div className="flex-grow">
        <p className="text-white text-sm">{label}</p>
        <p className="text-grayish-cyan text-xs">/ person</p>
      </div>
      <p className="text-strong-cyan text-3xl sm:text-4xl">${formatNumber(value)}</p>
    </div>
  );

  return (
    <section className="flex-1 bg-vd-cyan text-white p-6 pt-8 rounded-3xl flex flex-col gap-6">
      {renderOutputRow("Tip Amount", tipAmount)}
      {renderOutputRow("Total", totalAmount)}
      <button
        type="reset"
        className="bg-strong-cyan text-vd-cyan text-center text-xl rounded-md uppercase p-2 mt-auto disabled:opacity-35"
        onClick={onReset}
        disabled={!isValid}
      >
        Reset
      </button>
    </section>
  );
};

export default Output;
