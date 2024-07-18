/* eslint-disable react/prop-types */
import { useState, useRef } from "react";
import styles from "./textInput.module.scss";

export const TextInput = ({ placeHolder, maxLength }) => {
  const [caracter, setCaracter] = useState("");
  const [input, setInput] = useState("");
  let InputValue = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const coment = InputValue.current.value;

    setInput(coment);
  };

  return (
    <main>
      <section className={styles.container}>
        <form onSubmit={handleSubmit}>
          <h1>React--X </h1>

          <div>
            <textarea
              placeholder={placeHolder}
              maxLength={maxLength}
              ref={InputValue}
              value={caracter}
              onChange={(e) => setCaracter(e.target.value)}
            />
          </div>
          <span>
            {" "}
            {caracter.length}/ {maxLength}
          </span>
          <div>
            <button>Twwitar</button>
          </div>
        </form>
      </section>

      <section className={styles.coments}>
        <img src="" alt="" />

        <p>{input}</p>
      </section>
    </main>
  );
};
