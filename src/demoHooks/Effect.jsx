import React, { useState, useEffect } from "react";
// useEffect nhận vào 2 tham số
// tham số 1:  effect callback là 1 callback function
// tham số 2: dependency list là 1 array
/**
 * == các giai đoạn ==
 * MOUNTING: khởi tạo component 
 *  + render
 *  + effect callback
 *
 * UPDATING: props hoặc state thay đổi
 *  + render
 *  + cleaup effect (nếu có) nếu dependencies(giá trị tham số thứ 2) của useEffect bị thay đổi
 *  + effect callback nếu dependencies của useEffect bị thay đỏi
 * 
 * UNMOUNTING: hủy bỏ component
 *  + cleanup effect (nếu có)
 */
function Effect() {
  const [count, setCount] = useState(0);
  const [mess, setMess] = useState("Hello Huy đẹp trai");
  // ====== CASE 1: useEffect ko có tham số thứ 2
  // Luôn luôn chạy callback effect sau mỗi lần render (tương tự componentDidMount + componentDidUpdate)
  // - ít được sử dụng vì không biết được state hoặc props nào thay đổi để thực hiện các hành động khác nhau
  useEffect(() => {
    console.log("CASE 1: effect run");
  });

  // ===== CASE 2:  useEffect có tham số thứ 2 là 1 array rỗng
  // chỉ chạy effect callback 1 lần duy nhất sau lần render đầu tiên (tương tự componentDidMount)
  // dùng để call API - tương tác với DOM
  useEffect(() => {
    console.log("CASE 2 : effect run");
  }, []);

  // ====== CASE 3: useEffect có tham số thứ 2 là 1 array rỗng và bên trong các effect callback có return về một function (cleanup effect)
  // cleanup effect sẽ được chạy trước khi component bị hủy bỏ (tương tự componentWillUnmount)
  // dùng để bỏ đi những hành động không cần thiết khi hết 1 lifecycle của component
  useEffect(() => {
    console.log("CASE 3 : effect run");
    const handleScroll = () => {
      console.log("scrolling");
    };
    document.addEventListener("scroll", handleScroll);
    return () => {
      console.log("CASE 3: cleanup effect run");
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ====== CASE 4:useEffect có tham số thứ 2 là 1 array có giá trị
  // effect callback chạy sau lần render đầu tiên, ở những lần render tiếp theo effect callback chỉ chạy khi giá trị bên trong array bị thay đổi
  // thường dùng để kiểm tra 1 hoặc nhiều giá trị state hoặc props nào đó bị thay đổi sẽ thực hiện 1 hành động nào đó
  useEffect(() => {
    console.log("CASE 4 : effect run");
  }, [mess]); // tận dụng để viết logic điều kiện khi giá trị trong mảng là giá trị cần chạy logic


  // ======CASE 5:useEffect có tham số thứ 2 là 1 array có giá trị và bên trong effect callback return về 1 function
  // sau lần render đầu:  chỉ có effect callback được chạy
  // từ lần render thứ 2 trở đi nếu giá trị trong array bị thay đổi: chạy cleanup effect sau đó mới chạy effect callback
  // cleanup effect sẽ được chạy trước khi component bị hủy bỏ
  useEffect(() => {
    console.log("CASE 5 : effect run");
    const timer = setTimeout(()=> {
      console.log("CASE 5:  effect run", count);
    },2000)
    return () => {
      console.log("CASE 5: cleanup effect run")
      clearTimeout(timer)
    }
  }, [count]);




  console.log("Render run");
  return (
    <div style={{ height: "2000px" }}>
      <p>Count: {count} </p>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increase
      </button>

      <div>
        <p>Message: {mess}</p>
        <button
          onClick={() => {
            setMess("Hello cybersoft");
          }}
        >
          Set Message
        </button>
      </div>
    </div>
  );
}

export default Effect;
