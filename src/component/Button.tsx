interface ButtonProps {
  count: number;
  setCount: React.Dispatch<React.SetStateAction<number>>;
}
// const Button: React.FunctionComponent<ButtonProps> = ({ setCount, count }) => {
const Button = ({ setCount, count }: ButtonProps): React.JSX.Element => {
  return (
    <button onClick={() => setCount((count) => count + 1)}>
      count is {count}
    </button>
  );
};

export default Button;
