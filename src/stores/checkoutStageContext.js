import { createContext, useState } from "react";

const CheckoutStageContext = createContext({
  checkoutStage: "customerInfo",
});

export function CheckoutStageContextProvider(props) {
  const [currCheckoutStage, setCheckoutStage] = useState("customerInfo");

  function updateCheckoutStageHandler(stage) {
    if (stage) {
      setCheckoutStage(stage);
    } else {
      setCheckoutStage((prevCheckoutStage) => {
        if (prevCheckoutStage === "customerInfo") return "shippingInfo";
        else if (prevCheckoutStage === "shippingInfo") return "paymentInfo";
        else return "CompleteOrder";
      });
    }
  }

  const context = {
    checkoutStage: currCheckoutStage,
    updateCheckoutStage: updateCheckoutStageHandler,
  };

  return (
    <CheckoutStageContext.Provider value={context}>
      {props.children}
    </CheckoutStageContext.Provider>
  );
}

export default CheckoutStageContext;
