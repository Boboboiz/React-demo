import React from "react";
import useCounter from "./useCounter";
import useForm from "./useForm";

function CustomHooks() {
  //   const [count, setCount] = useState(0);
  //   const increase = () => {
  //     setCount(count + 1);
  //   };
  //   const decrease = () => {
  //     setCount(count - 1);
  //   };
  const { count, increase, decrease } = useCounter();
  const { values, handleChange, handleSubmit } = useForm({ userName: "", email: "" });
 const onSuccess = (values) => {
    console.log(values);
 }
  return (
    <div className="container-fluid">
      <h1>Custom Hooks</h1>
      <p>Count : {count}</p>
      <button onClick={increase} className="btn btn-success me-2">
        increase
      </button>
      <button onClick={decrease} className="btn btn-danger">
        decrease
      </button>

      <br />
      <br />
      <p>
        {values.userName} - {values.email}
      </p>
      <form onSubmit={handleSubmit(onSuccess)}>
        <input
          name="userName"
          value={values.userName}
          onChange={handleChange}
        />
        <input name="email" value={values.email} onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default CustomHooks;
