import classes from "./button.module.css";

function Button(props) {
  return (
    <div>
      <div className={classes.actions}>
        <button className={classes["prev-btn"]} onClick={props.prevBtnhandler}>
          {props.prevBtn}
        </button>
        <button className={classes["next-btn"]} onClick={props?.nextBtnHandler}>
          {props.nextBtn}
        </button>
      </div>
    </div>
  );
}
export default Button;
