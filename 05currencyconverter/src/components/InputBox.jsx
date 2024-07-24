import React from "react";

const InputBox = (
  label,
  amount,
  onAmountChange,
  currencyOptions = [],
  selectedCurrency = "usd",
  onCurrencyChange,
  className = "",
  amountDisabled = false,
  currencyDisabled = false
) => {
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
      <div className="w-1-2">
        <label className="text-black/40 mb-2 inline-block">{label}</label>
        <input
          type="number"
          placeholder="amount"
          value={amount}
          disabled={amountDisabled}
          onChange={(e) =>
            onAmountChange && onAmountChange(Number(e.target.value))
          }
          className="outline-none w-full bg-transparent"
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full">Currency Type</p>
        <select
          value={selectedCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
          disabled={currencyDisabled}
        >
          {currencyOptions.map((currency) => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default InputBox;
