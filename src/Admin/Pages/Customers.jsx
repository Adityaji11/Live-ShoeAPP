import React, { useEffect } from "react";
import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../Slices/Custromers/customerSlice";
const columns = [
  {
    title: "S.No",
    dataIndex: "key",
  },
  {
    title: "Full Name",
    dataIndex: "name",
    sorter: (a, b) => a.name.length - b.name.length,
  },
  {
    title: "Email",
    dataIndex: "email",
  },
  {
    title: "Mobile Number",
    dataIndex: "mobile",
  },
];

const Customers = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
  const customerstate = useSelector((state) => state.users.customers);
  console.log(customerstate);
  const data1 = [];
  for (let i = 0; i < customerstate.length; i++) {
    if (customerstate[i].isAdmin !== true) {
      data1.push({
        key: i + 1,
        name: customerstate[i].name ,
        email: customerstate[i].email,
        mobile: customerstate[i].number,
      });
    }
  }

  return (
    <div>
      <h3 className="mb-4 title">Customers</h3>
      <div>
        <Table columns={columns} dataSource={data1} />
      </div>
    </div>
  );
};

export default Customers;