import React from "react"

import {
  RiLayoutLeftLine,
  RiLayoutRightLine,
  RiLayoutTopLine,
  //   RiLayoutColumnLine
} from "react-icons/ri"

export const selectLayouts = [
  { value: "ColsOneToOne", label: "One To One" },
  { value: "ColsOneToTwo", label: "One To Two" },
  { value: "ColsTwoToOne", label: "Two To One" },
  { value: "LessDense", label: "Less Dense" },
]

export const radioLayoutOptions = [
  {
    name: "colsonetoone",
    value: "ColsOneToOne",
    label: <RiLayoutTopLine size={20} />,
  },
  {
    name: "colsonetotwo",
    value: "ColsOneToTwo",
    label: <RiLayoutLeftLine size={20} />,
  },
  {
    name: "coltwotoone",
    value: "ColsTwoToOne",
    label: <RiLayoutRightLine size={20} />,
  },
  {
    name: "lessdense",
    value: "LessDense",
    label: <RiLayoutLeftLine size={20} />,
  },
]
