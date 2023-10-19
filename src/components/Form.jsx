import { useState } from "react";
import "./Form.css";

const Form = () => {
  // ! Hier kommen die States hin
  const [fristname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  return (
    <section>
      <form>
        <input
          type="text"
          placeholder="fristname"
          onChange={(e) => setFirstname(e.target.value)}
          value={fristname}
        />
        <br />
        <input
          type="text"
          placeholder="lastname"
          onChange={(e) => setLastname(e.target.value)}
          value={lastname}
        />
        <br />
        <input
          type="email"
          name="email"
          id="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </form>

      <p>Vorname ist: {fristname} </p>
      <p>Nachname ist: {lastname} </p>
      <p>Email: {email} </p>
    </section>
  );
};

export default Form;
