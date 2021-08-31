import React from 'react'

export default function ExternalLink(props){
  let { href } = props
  const s = 5
  const d = "M8 0 L0 0 L0 12 L12 12 L12 8 " +
            "M4 8 L16 0 M12 0 L16 0 L14 4"

  return (
    <div className="ExternalLink Button" title="google image search">
      <a href={href} target="_blank">
        <svg height="20" width="20">
          <path fill="none" d={d}/>
        </svg>
      </a>
    </div>
  )
}