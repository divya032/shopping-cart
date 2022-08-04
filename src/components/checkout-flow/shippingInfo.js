import classes from "./shippingInfo.module.css";
import { useRef, useContext } from "react";
import Button from "../ui/button";
// import TotalPriceContext from "../../stores/totalPriceContext";
import CheckoutStageContext from "../../stores/checkoutStageContext";

function ShippingInfo({ customerData, totalPrice }) {
  const stdDeliveryInputRef = useRef();
  const fastDeliveryInputRef = useRef();

  // const totalPriceContext = useContext(TotalPriceContext);
  // totalPriceContext.updateTotalPrice(totalPrice);

  const checkoutStageContext = useContext(CheckoutStageContext);

  function handlePrevButton() {
    checkoutStageContext.updateCheckoutStage("customerInfo");
  }
  function handleNextBtn() {
    checkoutStageContext.updateCheckoutStage();
  }

  return (
    <div>
      <h3> Shipping Information</h3>
      <div className={classes["main-content"]}>
        <div className={classes.content}>
          <div>{customerData.name}</div>
          <div>{customerData.address}</div>
          <div>{customerData.city}</div>
          <div>{customerData.country}</div>
          <div>{customerData.postalCode}</div>
          <div>
            <span>Tel: </span>
            <span>{customerData.phoneNumber}</span>
          </div>
        </div>
        <div className={classes.map}>Map location</div>
      </div>
      <h3> Shipping Method</h3>
      <div className={classes["main-content"]}>
        <div className={classes["sub-content"]}>
          <div className={classes.input}>
            <div>
              <input
                type="radio"
                required
                id="standardDelivery"
                ref={stdDeliveryInputRef}
                checked
                value="0.00"
              ></input>
              <label htmlFor="standardDelivery">Standard Delivery</label>
            </div>
            <span>Free</span>
          </div>
          <span className={classes.span}>
            Estimated 14-20 Day Shipping (Duties and tax may be due upon
            delivery)
          </span>
        </div>

        <div className={classes["sub-content"]}>
          <div className={classes.input}>
            <div>
              <input
                type="radio"
                required
                id="fastDelivery"
                ref={fastDeliveryInputRef}
                value="8.00"
              ></input>
              <label htmlFor="fastDelivery">Fast Delivery</label>
            </div>
            <span>$8.00</span>
          </div>
          <span className={classes.span}>
            Estimated 2-5 Day Shipping (Duties and tax may be due upon delivery)
          </span>
        </div>
      </div>
      <Button
        prevBtn={"Back to Customer Info"}
        nextBtn={"CONTINUE TO PAYMENT"}
        prevBtnhandler={handlePrevButton}
        nextBtnHandler={handleNextBtn}
      />
    </div>
  );
}

export default ShippingInfo;
