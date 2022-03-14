import React from 'react'
import loadingSpinner from "../images/loadingSpinner.gif"


export default function LoadingSpinner() {
    return (
        <div className="text-center">
            <img src={loadingSpinner} alt="Spinner Loading" />
        </div>
    )
}
