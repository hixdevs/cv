import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
// import data from "../../../data/dataop"

const FormData = ({ content, onSubmit }) => {
  return (
    <Form className="mt-3" onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Resume Data</Form.Label>
        <Form.Control as="textarea" rows={30} defaultValue={content} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}

export default FormData
