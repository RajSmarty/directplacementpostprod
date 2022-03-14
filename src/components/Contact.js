import React from 'react'
import { useEffect, useState } from 'react'

const Contact = () => {

    const [userData, setUserData] = useState({ name: "", message: "" });
    // const [userMessage, setUserMessage] = useState("")

    const userContact = async () => {
        try {
            const res = await fetch("/getData", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },

            });

            const data = await res.json();
            setUserData({ ...userData, name: data.name, message: data.message });
            // setUserMessage(data.formdata.Array);

            console.log(data);

            if (!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }
        catch (err) {
            console.log(err)
        }
    }


    useEffect(() => {
        userContact();
    });

    const handleInputs = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setUserData({ ...userData, [name]: value })

    }



    // Send to Backend 
    const contactForm = async (e) => {
        e.preventDefault()

        const { name, message } = userData;

        const res = await fetch("/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, message
            })
        });

        const data = await res.json();
        if (!data) {
            console.log("Message not sent");
        }
        else {
            alert("Message Sent to backend")
        }
    }




    return (
        <div className='container mt-5'>

            <form method='POST'>
                <div className="mb-3 mt-5">
                    <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                    <input name="name" value={userData.name}
                        onChange={handleInputs} type="text" className="form-control" required />

                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">Message</label>
                    <textarea name="message" value={userData.message}
                        onChange={handleInputs} type="text" className="form-control" required />
                </div>

                <button onClick={contactForm} type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    )
}

export default Contact
