import { useState } from "react";

function useForm(initValues) {
  const [values, setValues] = useState(initValues);

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setValues({ ...values, [name]: value });
  };
  const handleSubmit = (onSuccess) => {

    return (evt) => {
      evt.preventDefault();
      // Thực hiện validation
      // const isValid = validate()

      // nếu isValid là true gọi tới callback onSuccess
      onSuccess(values)
    };
  };
  return { values, handleChange , handleSubmit};
}

export default useForm;
