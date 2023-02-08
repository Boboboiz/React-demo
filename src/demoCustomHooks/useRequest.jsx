import { useState, useEffect } from "react";

// request: callback function để thực hiện thao tác gọi API
function useRequest(request, dependencies= []) {
  // Giá trị state lưu kết quả trả về từ API
  const [data, setData] = useState();

  const fetchData = async () => {
    try {
      const response = await request();
      // Call API thành công
      setData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [...dependencies]);

  return { data };
}

export default useRequest;
