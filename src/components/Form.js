import React from "react";
import { useState } from "react";
import axios from 'axios';
import "./form.css";
import { useNavigate } from "react-router-dom";

const Form = () => {
  const [name, setName] = useState(""); // useState to store First Name
  const [mobile, setMobile] = useState(""); // useState to store Mobile Number
  const [age, setAge] = useState(""); // useState to store Age
  const [email, setEmail] = useState(""); // useState to store Email address of the user
  const [bloodGroup, setBloodGroup] = useState(""); // useState to store Password
  const navigate = useNavigate();

  const validateForm = async (e) => {
    if (name.length == 0) {
      alert("Invalid Form, Name can not be empty");
      return;
    }
    if (mobile.length == 0) {
      alert("Invalid Form, Mobile Number can not be empty");
      return;
    }
    if (age.length == 0) {
      alert("Invalid Form, Age can not be empty");
      return;
    }
    if (email.length == 0) {
      alert("Invalid Form, Email Address can not be empty");
      return;
    }
    if (bloodGroup == ""){
        alert("Invalid Form, Blood Group can not be empty");
        return;
    } 
    alert("Form is valid");
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/form', { name, mobile, age, email, bloodGroup });
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
        <form>
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
            placeholder="Email"
            className="border-red-900"
            onChange={(e) => setEmail(e.target.value)}
          />
          <select
            placeholder="Blood Group"
            className="border-red-900"
            onChange={(e) => setBloodGroup(e.target.value)}
          >
            <option value="">
              Blood Group
            </option>
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
            type="button"
            className="bg-red-900"
            onClick={() => {
              validateForm();
            }}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
