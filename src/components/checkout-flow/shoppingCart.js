import Item from "./item";
import classes from "./shoppingCart.module.css";
// import { useContext } from "react";
// import TotalPriceContext from "../../stores/totalPriceContext";

function ShoppingCart(props) {
  function findSubTotal() {
    return props.lists
      .map((item) => item.price)
      .reduce((prev, curr) => Number(prev) + Number(curr), 0);
  }
  let subTotal = findSubTotal();
  props.updateTotal(subTotal);

  // let totalPrice = props.totalPrice;
  // if (totalPrice === 0) {
  //   totalPrice = subTotal;
  // }

  return (
    <div>
      <ul className={classes.list}>
        {props.lists.map((item, index) => {
          return (
            <Item
              key={index}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          );
        })}
      </ul>
      <div>Have a vocuher</div>
      <div className={classes["main-total"]}>
        <div className={classes.subTotal}>
          <span>Subtotal</span>
          <span>{"$" + subTotal}</span>
        </div>
        <div className={classes.subTotal}>
          <span>Shipping</span>
          <span>
            <b>Free</b>
          </span>
        </div>
      </div>
      <div className={classes.subTotal}>
        <span>Total</span>
        <span>{"$" + subTotal}</span>
      </div>
    </div>
  );
}
export default ShoppingCart;
