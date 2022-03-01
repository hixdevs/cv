import React from "react"
import { Button } from "react-bootstrap"
import styles from "../../styles/pdf/ControlPanel"
const ControlPanel = ({ blob }) => {
  console.log("blob:", blob)

  return (
    <>
      <div style={styles.container}>
        <p>I am so cool even when i dont know it</p>
        <a
          href="http://localhost:3000/0b12ee0f-37d3-49ca-9029-a113dd3a6f4f"
          download
        >
          download
        </a>
        <Button download="document.pdf">Oh hej</Button>
      </div>
    </>
  )
}

export default ControlPanel
