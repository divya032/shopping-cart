import Button from "../ui/button";
import CheckoutStageContext from "../../stores/checkoutStageContext";
import { useContext } from "react";
import classes from "./paymentInfo.module.css";

function PaymentInfo() {
  const checkoutStageContext = useContext(CheckoutStageContext);
  function handlePrevButton() {
    checkoutStageContext.updateCheckoutStage("shippingInfo");
  }
  function handleNextBtn() {
    checkoutStageContext.updateCheckoutStage();
  }

  return (
    <div>
      <h3> Payment Selection</h3>
      <div className={classes.main}>
        <div className={classes["pay-option"]}>
          <input
            type="radio"
            required
            id="creditCard"
            checked
            value="creditCard"
          ></input>
          <label htmlFor="creditCard">Credit Card</label>
        </div>
        <div className={classes["pay-option"]}>
          <input type="radio" required id="payPal" value="paypal"></input>
          <label htmlFor="PayPal">PayPal</label>
        </div>
      </div>

      <Button
        prevBtn={"Back to Shipping Info"}
        nextBtn={"Complete Order"}
        prevBtnhandler={handlePrevButton}
        nextBtnHandler={handleNextBtn}
      />
    </div>
  );
}
export default PaymentInfo;
