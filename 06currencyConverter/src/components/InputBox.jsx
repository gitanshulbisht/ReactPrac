import React, {useId} from 'react'


function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisable = false,
    currencyDisable=false,
    className = "",
}) {
   
const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}> {/* //In this div CSS is written inside which is JS with a backtick so that we can take className from the user*/}
            <div className="w-1/2"> 
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number" 
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e)=>onAmountChange && onAmountChange(Number(e.target.value))} 
                />{/*this is a checker not the & operator , if*/} 
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    onChange={(e)=> onCurrencyChange && onCurrencyChange(e.target.value)}
                    disable={currencyDisable}

                >
                   {
                   currencyOptions.map((currency)=>(
                        <option key={currency} value={currency}> {/*for performance while using loop in jsx use a KEY*/}
                            {currency}
                        </option>
                   ))} 
                        
                
                </select>
            </div>
        </div>
    );
    console.log(`currencyOptions: ${currencyOptions}`)
}

export default InputBox;
