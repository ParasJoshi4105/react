import React from 'react'

function Alert(props) {
    return (

        props.alertMessage && <div className={`alert alert-${props.alertMessage.type} alert-dismissible fade show`} role="alert">
            <strong>{props.alertMessage.type === "success"?"Success" : ""}</strong> : {props.alertMessage.message}
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>

    )
}

export default Alert