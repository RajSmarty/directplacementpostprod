import React from 'react'
import load from '../images/gifLogin.gif'

export default function SpinnerLogin() {
    return (
        <div>
            <img className="rounded mx-auto d-block img-overlay2" src={load} alt="load" />
        </div>
    )
}
