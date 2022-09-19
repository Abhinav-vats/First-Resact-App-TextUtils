import React from 'react'

function Alert(props) {

    const capitalize = (word)=>{
        const lower = word.toLowerCase()
        return lower.charAt(0).toUpperCase().concat(lower.slice(1))
    }
  return (
    props.alert &&  <div>
        <div className={`alert alert-${props.alert.alertType} alert-dismissible fade show`} role="alert">
  <strong>{capitalize(props.alert.alertType)} : </strong>{props.alert.message}
  {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
</div>
      
    </div>
  )
}

export default Alert
