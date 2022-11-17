import { useRef } from "react";

function UnControlled() {
  const nameRef = useRef();
  const courseRef = useRef();
  const genderRef = useRef();
  const locationRef = useRef();
  const addressRef = useRef();

  const register = (e) => {
    // e.preventdefault();
    const formData = {
      name: nameRef.current.value,
      course: courseRef.current.value,
      gender: genderRef.current.value,
      location: locationRef.current.value,
      address: addressRef.current.value,
    };
    console.log("submit handler ", formData);
  };

  return (
    <div>
      <div>
        <h3>UnControlled Approach</h3>
      </div>
      &nbsp;
      <form>
        <div>
          Name : <input type="text" ref={nameRef} />
        </div>
        &nbsp;
        <div>
          Select Course :&nbsp;
          <select ref={courseRef}>
            <option value="">--Select--</option>
            <option value="Java">Java</option>
            <option value="ReactJs">ReactJs</option>
            <option value="Angular">Angular</option>
          </select>
        </div>
        &nbsp;
        <div>
          Gender :&nbsp;
          <input type="radio" ref={genderRef} name="gender" /> Male
          <input type="radio" ref={genderRef} name="gender" /> Female
        </div>
        &nbsp;
        <div>
          Location :&nbsp;
          <input type="checkbox" ref={locationRef} name="location" /> Hyderabad
          <input type="checkbox" ref={locationRef} name="location" /> Gurgaon
        </div>
        &nbsp;
        <div>
          Address :&nbsp;
          <textarea name="address" ref={addressRef}></textarea>
        </div>
        &nbsp;
        <div>
          <input type="button" value="Register" onClick={register}></input>
        </div>
      </form>
    </div>
  );
}
export default UnControlled;
