import { useState } from "react";

const TipForm = ({ onTipSelect, customTip, handleCustomInputChange }) => {
  const predefinedTips = [5, 10, 15, 25, 50];
  const [selectedTip, setSelectedTip] = useState(null);

  const handleButtonClick = (tip) => {
    onTipSelect(tip);
    setSelectedTip(tip);
  };


  return (
    <fieldset className="my-8 row flex flex-col gap-4">
      <label htmlFor="people" className="text-sm">
        Select Tip %
      </label>

      {/* Rendering the predefined tip buttons dynamically */}
      <div className=" text-xl grid grid-cols-2 gap-4 w-full sm:grid-cols-3 text-center">
        {predefinedTips.map((tip) => (
          <button
            key={tip}
            type="button"
            className={`bg-vd-cyan p-2 rounded-md hover:bg-active-cyan hover:text-vd-cyan ${selectedTip === tip ? 'bg-strong-cyan text-vd-cyan' : ' text-white'}`}
            onClick={() => handleButtonClick(tip)}
          >
            {tip}%
          </button>
        ))}
        <input
          type="number"
          className="text-right px-4 text-lg rounded-md bg-vlg-cyan text-vd-cyan ring-1 ring-lg-cyan focus:ring-2 focus:ring-strong-cyan focus:outline-none"
          placeholder="Custom"
          value={customTip}
          onChange={handleCustomInputChange}
        />
      </div>
    </fieldset>
  );
};
export default TipForm;
