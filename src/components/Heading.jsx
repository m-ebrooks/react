// rfc tab
import React from 'react'

export default function Heading(props) {
    // by default takes props
  return (
    // can only have one html route, only one parent but multiple children
    <h1>
        {props.content}
    </h1>
  )
}
