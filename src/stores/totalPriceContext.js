import { createContext, useState } from "react";

const TotalPriceContext = createContext({
  totalPrice: 0,
});

export function TotalPriceContextProvider(props) {
  const [currTotalPrice, setTotalPrice] = useState(0);

  function updateTotalPriceHandler(price) {
    setTotalPrice((prevTotal) => prevTotal + price);
  }

  const context = {
    totalPrice: currTotalPrice,
    updateTotalPrice: updateTotalPriceHandler,
  };

  return (
    <TotalPriceContext.Provider value={context}>
      {props.children}
    </TotalPriceContext.Provider>
  );
}

export default TotalPriceContext;
