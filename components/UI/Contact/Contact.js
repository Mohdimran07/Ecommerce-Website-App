import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const { name, email, phone } = userData;
    const res = await fetch(
      "https://reactuserrecord-default-rtdb.firebaseio.com/userDataRecords.json",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name, email, phone,
        })
      }
    );
    const data = await res.json();
    console.log(data)

    if(res){
        alert("Data is stored")
    } else {
        alert("Fill the details")
    }

    // could add validation here...

    // const Details = {
    //   name: nameRef.current.value,
    //   email: emailRef.current.value,
    //   phoneNo: phoneNoRef.current.value,
    // };

    // props.submitHandler(Details);
  };

  return (
    <div className="signup-box">
      <h1>Sign Up</h1>
      <form method='POST'>
        <label>Name</label>
        <input
          type="text"
          name="name"
          placeholder=""
          value={userData.name}
          onChange={postUserData}
        />
        <label>EmailId</label>
        <input
          type="text"
          name="email"
          placeholder=""
          value={userData.email}
          onChange={postUserData}
        />
        <label>Phone no</label>
        <input
          type="text"
          name="phone"
          placeholder=""
          value={userData.phone}
          onChange={postUserData}
        />
        <input type="button" value="Submit" onClick={submitHandler} />
      </form>
    </div>
  );
};
export default Contact;
