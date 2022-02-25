import React from "react"
import { Document, Page } from "@react-pdf/renderer"

import styles from "../../styles/pdf/Basic"
import MainBox from "./MainBox"
import SideBar from "./SideBar"
import { useEffect } from "react"

const PdfBasic = ({ data }) => {
  console.log("data:", data)

  // const fetchTasks = async () => {
  //   const res = await fetch("../../../public/data.json")
  //   console.log("res:", res)
  //   const data = await res.json()
  //   console.log("data:", data)

  //   // return data
  // }

  // useEffect(() => {
  //   fetchTasks()
  // }, [])

  return (
    <Document>
      <Page size="A4" style={styles.page}>
        <MainBox />
        <SideBar />
      </Page>
    </Document>
  )
}

export default PdfBasic
