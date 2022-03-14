import React from 'react'
import load from '../images/gifSignup.gif'

export default function Spinner() {
    return (
        <div>
            <img className="rounded mx-auto d-block img-overlay" src={load} alt="load" />
        </div>
    )
}
