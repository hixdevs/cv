import React from "react"
import { Button } from "react-bootstrap"

const Submit = ({ onSubmit }) => {
  return (
    <>
      <Button onSubmit={onSubmit}>Submit</Button>
    </>
  )
}

export default Submit
