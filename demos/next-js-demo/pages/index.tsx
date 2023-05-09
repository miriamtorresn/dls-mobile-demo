import { Button } from "ui";

import styles from "../styles/index.module.css";

export default function Web() {
  return (
    <div className={styles.container}>
      <h1>Web</h1>
      <Button onPress={() => console.log("Pressed!")} text="Boop" role="secondary" />
    </div>
  );
}
