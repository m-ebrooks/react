// rfc tab
import React from 'react'

export default function Paragraph(props) {
    // export default function Paragraph({content}) can remove the props
    // by default takes props
    
  return (
    // can only have one html route, only one parent but multiple children
    <p>
      
        {props.content}
        {props.children}

    </p>
  )
}