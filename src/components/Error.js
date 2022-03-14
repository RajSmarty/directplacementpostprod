import React from 'react'
import load from '../images/errorGif.gif'



export default function Error() {
    return (
        <>
            <div className="heightFull">
                <div className="d-flex justify-content-center align-items-center bg-pan-left">
                    <div className="container d-flex">
                        <h1 className="d-flex justify-content-center align-items-center styleErrorTop animate__animated animate__rubberBand">We are sorry, Page not found!</h1>
                        <div className="styleError error1">
                           404
                        </div>
                        <div className="styleError error2 animate__animated ">
                          Error 404
                        </div>
                        <div className="container searchingGif">
                            <img className="rounded mx-auto d-block img-overlay3 mt-5" src={load} alt="load" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
