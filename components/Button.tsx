const Button = (props) => {
  return (
    <button
      style={{
        marginTop: props.noTop ? 0 : 50,
        marginRight: 10,
        backgroundColor: "#5D67E9",
        padding: 10,
        color: "white",
        borderRadius: 20,
        border: "none",
      }}
      onClick={props.onClick}
    >
      {props.name}
    </button>
  );
};

export default Button;
