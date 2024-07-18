/* eslint-disable react/prop-types */

import styles from './textInput.module.scss'

export const TextInput = ({placeHolder, maxLength}) => {
  return (
    <main>
      <section className={styles.container}>
        <form>
          <h1>React--X </h1>

          <div>
            <textarea placeholder={placeHolder} maxLength={maxLength} />
          </div>
          <span> 0 / 125</span>
        </form>

      </section>

        <section className={styles.coments}>
          <img src="" alt="" />

          <p>
            comentario
          </p>
        </section>
    </main>
  )
}
