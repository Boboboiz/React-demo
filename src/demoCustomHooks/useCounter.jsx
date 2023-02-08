import { useState } from "react";

// Một custom hook phải được bắt đầu bằng "use"
// Custom hook không return về UI như component mà return về các giá trị (number, string, boolean, array, object, function)
// Custom Hooks khác các function binh thường là nó có thể sử dụng được các hooks của react như useState, useEffect

function useCounter() {
  const [count, setCount] = useState(0);
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  return { count, increase, decrease };
}

export default useCounter;
