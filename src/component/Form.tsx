const Form = () => {
  const handleClick = (event: React.FormEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    console.log(event);
  };

  const handleChange = (event: React.FormEvent<HTMLInputElement>) => {
    console.log(event.currentTarget.value);
    console.log(event.currentTarget.name);
  };

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault();
    const target = event.target as typeof event.target & {
      name: { value: string };
      email: { value: string };
      password: { value: string };
    };
    console.log("Form data :: ", {
      name: target.name.value,
      email: target.email.value,
      password: target.password.value,
    });
  };

  return (
    <>
      <div>
        <input
          type="text"
          // onChange={(event) => {
          //   console.log(event.target.value);
          // }}
          onChange={handleChange}
        />
        <button
          type="button"
          // If performance is not an issue (and it usually isn't!), inlining handlers is easiest as you can just use type inference and contextual typing
          // onClick={(event) => {
          //   console.log(event);
          // }}
          onClick={handleClick}
        >
          Click me
        </button>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name"></label>
        <input type="text" name="name" id="name" />
        <label htmlFor="email"></label>
        <input type="text" name="email" id="email" />
        <label htmlFor="password"></label>
        <input type="text" name="password" id="password" />
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Form;
