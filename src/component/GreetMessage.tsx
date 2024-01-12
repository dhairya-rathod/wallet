const defaultProps = {
  name: "John Doe",
  age: 21,
};

type GreetMessageProps = {
  name: string;
  age: number;
} & typeof defaultProps;

const GreetMessage = (props: GreetMessageProps) => {
  return (
    <div>
      Hello, I am {props.name} and {props.age} years old.
    </div>
  );
};

GreetMessage.defaultProps = defaultProps;

export default GreetMessage;
