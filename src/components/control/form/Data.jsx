import React from "react"
import { Form, Button } from "react-bootstrap"
// import ReactJson from "react-json-view"
//
// import data from "../../../data/dataop"

const FormData = ({ content, onSubmit, submitDisabled, onChangeContent }) => {
  return (
    <Form className="mt-3" onSubmit={onSubmit}>
      {/* <ReactJson src={JSON.parse(content)} onEdit={edit => {}}> */}
      <Form.Group className="mb-3" controlId="content">
        <Form.Label>Resume Data</Form.Label>
        <Form.Control
          as="textarea"
          rows={30}
          defaultValue={content}
          onChange={onChangeContent}
        />
      </Form.Group>
      {/* </ReactJson> */}
      <Button
        variant="primary"
        type="submit"
        className="mb-3"
        disabled={submitDisabled}
      >
        Update Resume
      </Button>
    </Form>
  )
}

export default FormData
