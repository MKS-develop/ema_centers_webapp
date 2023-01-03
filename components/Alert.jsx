import React from 'react'

const Alert = ({type = "", message = "", customClick = ()=>{}}) => {
  return (
    <div className={`alert 
    ${type === "ERROR" ? "alert-danger" : "alert-success"}
    alert-dismissible fade show mb-0 mt-2`}>
        <button onClick={customClick} className="close">
            <span>X</span>
        </button>
        <i className="fa fa-exclamation-triangle mx-2"></i>
        <strong>{type === "ERROR" ? "Cuidado!" : "Exitos"}</strong> {message}
    </div>
  )
}

export default Alert