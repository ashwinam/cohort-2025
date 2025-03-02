import { useState } from "react";
import AdopterData from "../components/AdopterData";

const PetAdoptionForm = () => {
  const [petData, setPetData] = useState([]);
  const [formView, setFormView] = useState(true);

  function saveBtnHandler() {
    setPetData([
      ...petData,
      {
        petName: document.getElementById("petName").value,
        petType: document.getElementById("petType").value,
        breed: document.getElementById("breed").value,
        personName: document.getElementById("personName").value,
        email: document.getElementById("email").value,
        phone: document.getElementById("phone").value,
      },
    ]);

    setFormView(false);
  }

  return (
    <div>
      {formView ? (
        <div
          style={{
            backgroundColor: "#E0CF5F",
            padding: 20,
            textAlign: "left",
            width: 700,
            marginTop: 20,
          }}
        >
          <label htmlFor="petName">Pet Name</label>
          <input id="petName" name="petName" type="text" />
          <label htmlFor="petType">Pet Type</label>
          <select name="petType" id="petType">
            <option></option>
            <option value="dog">Dog</option>
            <option value="cat">Cat</option>
          </select>
          <label htmlFor="breed">Breed</label>
          <input type="text" id="breed" name="breed" />
          <label htmlFor="personName">Your Name</label>
          <input type="text" id="personName" name="personName" />
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" />
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" />
          <button
            type="submit"
            onClick={saveBtnHandler}
            style={{ cursor: "pointer" }}
          >
            Submit
          </button>
        </div>
      ) : (
        <AdopterData data={petData} func={setFormView} />
      )}
    </div>
  );
};

export default PetAdoptionForm;
