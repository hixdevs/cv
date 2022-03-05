import React, { useState } from "react"
import { Form } from "react-bootstrap"
// import data from "../../../data/dataop"

const FormData = ({ content }) => {
  return (
    <Form className="mt-3">
      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Resume Data</Form.Label>
        <Form.Control as="textarea" rows={30} value={content} />
      </Form.Group>
    </Form>
  )
}

export default FormData
