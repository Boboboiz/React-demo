import React, { useState } from "react";
import axios from "axios";
import useRequest from "../demoCustomHooks/useRequest";

function DemoHooks() {
  // const [todos, setTodos] = useState([]);
  const [userId, setUserId] = useState("");

  // const fetchTodos = async () => {
  //   try {
  //     const { data } = await axios.get(
  //       "https://jsonplaceholder.typicode.com/todos",
  //       {
  //         params: {
  //           userId: userId || undefined,
  //         },
  //       }
  //     );
  //     // Call API thành công
  //     setTodos(data);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // useEffect(() => {
  //   fetchTodos();
  // }, [userId]);
 const {data : todo = []} = useRequest( async () => {
    const { data } = await axios.get(
            "https://jsonplaceholder.typicode.com/todos",
            {
              params: {
                userId: userId || undefined,
              },
            }
          );
          return data
  }, [userId])
  return (
    <div className="container">
      <h1>Todos</h1>

      <select value={userId} onChange={(evt) => setUserId(evt.target.value)}>
        <option value="">Select User</option>
        <option value="1">User 1</option>
        <option value="2">User 2</option>
        <option value="3">User 3</option>
        <option value="4">User 4</option>
      </select>

      {todo.map((todo) => {
        return <p key={todo.id}>- {todo.title}</p>;
      })}
    </div>
  );
}

export default DemoHooks;
