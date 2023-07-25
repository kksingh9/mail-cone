import React from 'react'
import "./SidebarOptions.css";
//rfce
function SidebarOptions({Icon,title,number, isactive}) {
  return (
    <div className={`sidebaroptions ${isactive && 'sidebaroptions--active'}`}>
      <Icon  />
      <h2>{title}</h2>
      <p>{number}</p>
    </div>
  )
}

export default SidebarOptions;
