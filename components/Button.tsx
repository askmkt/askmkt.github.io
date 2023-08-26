interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {}

const Button: React.ComponentType<ButtonProps> = (props) => {
  return (
    <button type="button" onClick={props.onClick} {...props}>
      {props.children}
    </button>
  );
};

export default Button;
