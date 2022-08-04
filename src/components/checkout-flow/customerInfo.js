import CustomerDetailForm from "./customerDetailForm";
import classes from "./customerInfo.module.css";

function CustomerInfo({ customerDataHandler }) {
  return (
    <div>
      <h3 className={classes.heading}> Customer Information</h3>
      <CustomerDetailForm customerDataHandler={customerDataHandler} />
    </div>
  );
}
export default CustomerInfo;
