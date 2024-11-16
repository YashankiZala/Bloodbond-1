import React, { useState } from "react";
import axios from 'axios';
import "./form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState(""); // useState to store First Name
  const [mobile, setMobile] = useState(""); // useState to store Mobile Number
  const [age, setAge] = useState(""); // useState to store Age
  const [address, setAddress] = useState(""); // useState to store address address of the user
  const [bloodGroup, setBloodGroup] = useState(""); // useState to store Blood Group
  const [location, setLocation] = useState(""); // useState to store Location
  const navigate = useNavigate();

  const validateForm = async (e) => {
    e.preventDefault(); // Prevents the default form submission behavior

    if (name.length === 0) {
      alert("Invalid Form, Name can not be empty");
      return;
    }
    if (mobile.length === 0) {
      alert("Invalid Form, Mobile Number can not be empty");
      return;
    }
    if (age.length === 0) {
      alert("Invalid Form, Age can not be empty");
      return;
    }
    if (address.length === 0) {
      alert("Invalid Form, Address can not be empty");
      return;
    }
    if (bloodGroup === "") {
      alert("Invalid Form, Blood Group can not be empty");
      return;
    }
    if (location.length === 0) {
      alert("Invalid Form, Location can not be empty");
      return;
    }

    alert("Form is valid");

    try {
      const response = await axios.post('http://localhost:3000/api/form', { name, bloodGroup, location, address, mobile });
      alert(response.data.message);
      // Redirect to login page
      navigate('/');
    } catch (error) {
      console.error(error);
      alert('Signup failed!');
    }
  };

  return (
    <div>
      <div className="main_form font-medium lsFont">
        <form onSubmit={validateForm}> {/* Bind validateForm to onSubmit */}
          <input
            placeholder="Name"
            className="border-red-900"
            onChange={(e) => setName(e.target.value)}
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
            placeholder="Address"
            className="border-red-900"
            onChange={(e) => setAddress(e.target.value)}
          />
          {/* New Location Input Field */}
          <input
            placeholder="Location"
            className="border-red-900"
            onChange={(e) => setLocation(e.target.value)}
          />
          {/* Blood Group Dropdown */}
          <select
            className="border-red-900"
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">Blood Group</option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
          </select>
          <br />
          <button
            type="submit" // Change to type="submit" to trigger form submission
            className="bg-red-900"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
