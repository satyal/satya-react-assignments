import React, { useState } from "react";

function Controlled() {
  const [name, setName] = useState("");
  const [course, setCourse] = useState("");
  const [gender, setGender] = useState(false);
  const [location, setLocation] = useState(false);
  const [address, setAddress] = useState("");

  const nameChange = (e) => {
    setName(e.target.value);
  };

  const courseSelect = (e) => {
    setCourse(e.target.value);
  };

  const genderSelect = (e) => {
    if (e.target.checked === true) setGender(e.target.value);
  };

  const locationSelect = (e) => {
    setLocation(e.target.checked);
  };
  const addressSelect = (e) => {
    setAddress(e.target.value);
  };
  const register = (e) => {
    // e.preventdefault();
    const formData = {
      name: name,
      course: course,
      gender: gender,
      location: location,
      address: address,
    };
    console.log("submit handler ", formData);
  };
  return (
    <div>
      <div>
        <h3>Controlled Approach</h3>
      </div>
      &nbsp;
      <form>
        <div>
          Name : <input type="text" value={name} onChange={nameChange} />
        </div>
        &nbsp;
        <div>
          Select Course :&nbsp;
          <select value={course} onChange={courseSelect}>
            <option value="">--Select--</option>
            <option value="Java">Java</option>
            <option value="ReactJs">ReactJs</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        &nbsp;
        <div>
          Gender :&nbsp;
          <input
            type="radio"
            value={gender}
            name="gender"
            onChange={genderSelect}
          />{" "}
          Male
          <input
            type="radio"
            value={gender}
            name="gender"
            onChange={genderSelect}
          />{" "}
          Female
        </div>
        &nbsp;
        <div>
          Location :&nbsp;
          <input
            type="checkbox"
            value={location}
            name="location"
            onChange={locationSelect}
          />{" "}
          Hyderabad
          <input
            type="checkbox"
            value={location}
            name="location"
            onChange={locationSelect}
          />{" "}
          Gurgaon
        </div>
        &nbsp;
        <div>
          Address :&nbsp;
          <textarea
            name="address"
            value={address}
            onChange={addressSelect}
          ></textarea>
        </div>
        &nbsp;
        <div>
          <input type="button" value="Register" onClick={register}></input>
        </div>
      </form>
    </div>
  );
}
export default Controlled;
