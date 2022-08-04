import classes from "./item.module.css";

function Item(props) {
  return (
    <li className={classes.item}>
      <span className={classes.image}>
        <img src={props.image} alt={props.name} />
      </span>
      <div className={classes.content}>
        <span>{props.name}</span>
        <span className={classes.price}>{"$" + props.price}</span>
      </div>
    </li>
  );
}
export default Item;
