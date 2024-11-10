import React from "react";
import { useState } from "react";
import "./form.css";

const Form = () => {
  const [firstName, setFirstName] = useState(""); // useState to store First Name
  const [mobile, setMobile] = useState(""); // useState to store Mobile Number
  const [age, setAge] = useState(""); // useState to store Age
  const [email, setEmail] = useState(""); // useState to store Email address of the user
  const [bloodGroup, setBloodGroup] = useState(""); // useState to store Password
  return (
    <div>
      <div className="main_form font-medium lsFont">
        <form>
          <input
            placeholder="Name"
            className="border-red-900"
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            placeholder="Mobile Number"
            className="border-red-900"
            onChange={(e) => setMobile(e.target.value)}
          />
          <input
            placeholder="Age"
            onChange={(e) => setAge(e.target.value)}
            className="border-red-900"
          />
          <input
            placeholder="Email"
            className="border-red-900"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            placeholder="Blood Group"
            className="border-red-900"
            onChange={(e) => setBloodGroup(e.target.value)}
          />
          <br />
          <button type="submit" className="bg-red-900">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Form;
