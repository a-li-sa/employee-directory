import React, {useState, useEffect} from 'react';
import { MDBDataTableV5 } from 'mdbreact';
import randomuser from "../api/randomuser";

export const EmployeeGrid = () => {
  const [rows, setRows] = useState([]);
  const getEmployees = async () => {
    const response = await randomuser.get("/?results=100&seed=employee&nat=us&inc=name,picture,gender,phone,email,dob,location");
    const newArr = [];
    response.data.results.forEach(({name, picture, gender, phone, email, dob, location}, index) => {
      newArr.push({
        id: index + 1,
        avatar:  <img src={picture.thumbnail} alt="avatar" />,
        first: name.first,
        last: name.last,
        gender,
        phone,
        email,
        dob: dob.date.replace(/T.*/, ''),
        street: `${location.street.number} ${location.street.name}`,
        city: location.city,
        state: location.state,
        postcode: location.postcode
      })
    });
    setRows(newArr)
  }

  useEffect(() => {
    getEmployees()
  }, [])

  const datatable = {
    columns: [
      { field: "id", label: "ID", width: 70 },
      { field: "avatar", label: "Avatar", width: 100 },
      { field: "first", label: "First Name", width: 130 },
      { field: "last", label: "Last Name", width: 130 },
      { field: "gender", label: "Gender", width: 110 },
      { field: "phone", label: "Phone", width: 140 },
      { field: "email", label: "Email", width: 250 },
      { field: "dob", label: "Date of Birth", width: 140 },
      { field: "street", label: "Street", width: 190 },
      { field: "city", label: "City", width: 130 },
      { field: "state", label: "State", width: 140 },
      { field: "postcode", label: "Postal Code", width: 140 },
    ],
    rows: rows,
  };

  return <MDBDataTableV5
    hover
    entriesOptions={[10, 20, 50, 100]}
    entries={10}
    pagesAmount={4}
    data={datatable}
    searchTop
    searchBottom={false}
  />
}
