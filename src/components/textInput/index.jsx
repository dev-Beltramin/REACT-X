/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./textInput.module.scss";

export const TextInput = ({ placeHolder, maxLength }) => {
  const [caracter, setCaracter] = useState("");

  return (
    <main>
      <section className={styles.container}>
        <form>
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
        </form>
      </section>

      <section className={styles.coments}>
        <img src="" alt="" />

        <p>comentario</p>
      </section>
    </main>
  );
};
