import { useRef } from "react";
import classes from "./customerDetailForm.module.css";
import { useContext } from "react";
import CheckoutStageContext from "../../stores/checkoutStageContext";
import Button from "../ui/button";

function CustomerDetailForm({ customerDataHandler }) {
  const checkoutStageContext = useContext(CheckoutStageContext);

  function handleReturnShopButton() {
    return <alert>Return to Shopping Page</alert>;
  }

  function nextButtonHandler(event) {
    event.preventDefault();

    const enteredFirstName = firstNameInputRef.current.value;
    const enteredLastName = lastNameInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredCountry = countryInputRef.current.value;
    const enteredCity = cityInputRef.current.value;
    const enteredPostalCode = postalCodeInputRef.current.value;
    const enteredPhoneNumber = phoneNumberInputRef.current.value;

    const customerData = {
      name: `${enteredFirstName} ${enteredLastName}`,
      address: enteredAddress,
      city: enteredCity,
      country: enteredCountry,
      postalCode: enteredPostalCode,
      phoneNumber: enteredPhoneNumber,
    };
    customerDataHandler(customerData);
    checkoutStageContext.updateCheckoutStage();
  }

  const firstNameInputRef = useRef();
  const lastNameInputRef = useRef();
  const addressInputRef = useRef();
  const countryInputRef = useRef();
  const cityInputRef = useRef();
  const postalCodeInputRef = useRef();
  const phoneNumberInputRef = useRef();

  return (
    <form className={classes.form} onSubmit={nextButtonHandler}>
      <div className={classes.group}>
        <div className={classes.control}>
          <label htmlFor="firstName">First Name</label>
          <input
            type="text"
            required
            id="firstName"
            ref={firstNameInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="lastName">Last Name</label>
          <input
            type="text"
            required
            id="lastName"
            ref={lastNameInputRef}
          ></input>
        </div>
      </div>
      <div className={classes.control}>
        <label htmlFor="address">Address</label>
        <input type="text" required id="address" ref={addressInputRef}></input>
      </div>
      <div className={classes.group}>
        <div className={classes.control}>
          <label htmlFor="country">Country</label>
          <select name="country" id="country" ref={countryInputRef}>
            <option value="">Select your country</option>
            <option value="India">India</option>
            <option value="US">US</option>
          </select>
        </div>
        <div className={classes.control}>
          <label htmlFor="city">city</label>
          <input type="text" required id="city" ref={cityInputRef}></input>
        </div>
      </div>
      <div className={classes.group}>
        <div className={classes.control}>
          <label htmlFor="postalCode">Postal Code</label>
          <input
            type="text"
            required
            id="postalCode"
            ref={postalCodeInputRef}
          ></input>
        </div>
        <div className={classes.control}>
          <label htmlFor="phoneNumber">Phone Number</label>
          <input
            type="text"
            required
            id="phoneNumber"
            ref={phoneNumberInputRef}
          ></input>
        </div>
      </div>
      <Button
        prevBtn={"Return to shop"}
        nextBtn={"CONTINUE TO SHIPPING"}
        prevBtnhandler={handleReturnShopButton}
      />
    </form>
  );
}
export default CustomerDetailForm;
