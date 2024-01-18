import DEPARTMENT from "../../types/department";
import { useState } from "react";
import { useEffect } from "react";
import fetchDeparments from "../../utils/fetchDeparments";
import Department from "../Department/Department";

const Departments = () => {
  const [depatments, setDepatments] = useState<DEPARTMENT[]>([]);

  useEffect(() => {
    fetchDeparments().then((data) => {
      setDepatments(data);
    });
  }, []);

  // console.log(depatments);

  return (
    <div style={{ minHeight: 600 }}>
      {depatments?.map((info) => (
        <Department info={info}></Department>
      ))}
    </div>
  );
};

export default Departments;
