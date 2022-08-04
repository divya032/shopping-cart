import { useContext, useState } from "react";
import ShoppingCart from "./shoppingCart";
import CustomerInfo from "./customerInfo";
import ShippingInfo from "./shippingInfo";
import PaymentInfo from "./paymentInfo";
import classes from "./checkout.module.css";
import CheckoutStageContext from "../../stores/checkoutStageContext";
import { dummyData } from "../../utils/dummyData";
let customerData = {};
function sendDataToShipping(custData) {
  customerData = custData;
}

function CheckoutPage() {
  const checkoutStageContext = useContext(CheckoutStageContext);
  // const [currTotalPrice, setTotalprice] = useState(0);
  let totalPrice = 0;
  function handleTotalPriceUpdate(subTotal) {
    totalPrice = subTotal;
  }

  function getComponentForCurrState(currState) {
    if (currState === "customerInfo")
      return <CustomerInfo customerDataHandler={sendDataToShipping} />;
    else if (currState === "shippingInfo")
      return (
        <ShippingInfo
          customerData={customerData}
          updateTotal={handleTotalPriceUpdate}
          totalPrice={totalPrice}
        />
      );
    else return <PaymentInfo totalPrice={totalPrice} />;
  }

  return (
    <div className={classes["main-section"]}>
      <div className={classes.details}>
        <div className={classes.flow}>
          <div className={classes["flow-element"]}>01 Customer Info</div>
          <div className={classes["flow-element"]}>02 Shipping Info</div>
          <div className={classes["flow-element"]}>03 Payment Selection</div>
        </div>
        {getComponentForCurrState(checkoutStageContext.checkoutStage)}
      </div>
      <div className={classes.cart}>
        <div className={classes.heading}>Shopping cart</div>
        <ShoppingCart lists={dummyData} updateTotal={handleTotalPriceUpdate} />
      </div>
    </div>
  );
}

export default CheckoutPage;
