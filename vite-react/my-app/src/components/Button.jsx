import propTypes from "prop-types";

function Button({
  classes = "bg-gray-600",
  text = "Click",
  event = () => {
    console.log("Hola");
  },
}) {
  return (
    <button
      onClick={() => {
        event();
      }}
      className={classes}
    >
      {text}
    </button>
  );
}

Button.propTypes = {
  classes: propTypes.string,
  text: propTypes.string,
  event: propTypes.func,
};


export default Button;
