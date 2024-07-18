/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./textInput.module.scss";

export const TextInput = ({ placeHolder, maxLength }) => {
  const [caracter, setCaracter] = useState("");
  const [input, setInput] = useState([""]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setInput([...input, caracter]);
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
              value={caracter}
              onChange={(e) => setCaracter(e.target.value)}
            />
          </div>
          <span>
            {" "}
            {caracter.length}/ {maxLength}
          </span>
          <div className={styles.button}>
            <button>Twittar</button>
          </div>
        </form>
      </section>

      <section className={styles.coments}>
        <img src="" alt="" />

        {input.map((msg) => (
          <>
            <p>{msg}</p>
          </>
        ))}
      </section>
    </main>
  );
};
