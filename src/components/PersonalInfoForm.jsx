import { useState } from "react";
import "./PersonalInfoForm.css"



function Input({ className, name, type, value, onChange }) {
    return (
        <input
            id={name}
            className={className}
            type={type}
            name={name}
            value={value}
            onChange={onChange}
        />
    )
}

export default function PersonalInfoForm() {

    const [personalInfo, setPersonalInfo] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        linkedIn: ""
    });
    const fullName = personalInfo.firstName + " " + personalInfo.lastName;

    function handlePersonalInfo(e) {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div className="personal-info-div">

            <div class="print-group">
                <h1>{fullName}</h1>
                <p> Email: {personalInfo.email}</p>
                <p> Phone: {personalInfo.phone}</p>
                <p> LinkedIn: {personalInfo.linkedIn}</p>
            </div>

            <div className="input-group">
                <label htmlFor="firstName">First name:</label>
                <Input
                    className="input-field"
                    name="firstName"
                    type="text"
                    value={personalInfo.firstName}
                    onChange={handlePersonalInfo}
                />

                <label htmlFor="lastName">Last name:</label>
                <Input
                    className="input-field"
                    name="lastName"
                    type="text"
                    value={personalInfo.lastName}
                    onChange={handlePersonalInfo}
                />

                <label htmlFor="email">Email:</label>
                <Input
                    className="input-field"
                    name="email"
                    type="email"
                    value={personalInfo.email}
                    onChange={handlePersonalInfo}
                />

                <label htmlFor="phone">Phone:</label>
                <Input
                    className="input-field"
                    name="phone"
                    type="tel"
                    value={personalInfo.phone}
                    onChange={handlePersonalInfo}
                />

                <label htmlFor="linkedIn">LinkedIn:</label>
                <Input
                    className="input-field"
                    name="linkedIn"
                    type="text"
                    value={personalInfo.linkedIn}
                    onChange={handlePersonalInfo}
                />
            </div>

        </div>
    )
}


