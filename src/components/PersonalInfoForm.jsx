import { useState } from "react";



function Input({ className, name, type, value, onChange }) {
    return (
        <input
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
        socialNet: ""
    });
    const fullName = personalInfo.firstName + " " + personalInfo.lastName;

    function handlePersonalInfo(e) {
        setPersonalInfo({
            ...personalInfo,
            [e.target.name]: e.target.value
        })
    }


    return (
        <div>

            <h1>{fullName}</h1>

            <Input
                className="inputPersonalInfo"
                name="firstName"
                type="text"
                value={personalInfo.firstName}
                onChange={handlePersonalInfo}
            />

            <Input
                className="inputPersonalInfo"
                name="lastName"
                type="text"
                value={personalInfo.lastName}
                onChange={handlePersonalInfo}
            />

            <p>{personalInfo.email}</p>

            <Input
                className="inputPersonalInfo"
                name="email"
                type="email"
                value={personalInfo.email}
                onChange={handlePersonalInfo}
            />

            <p>{personalInfo.phone}</p>


            <Input
                className="inputPersonalInfo"
                name="phone"
                type="tel"
                value={personalInfo.phone}
                onChange={handlePersonalInfo}
            />

            <p>{personalInfo.socialNet}</p>

            <Input
                className="inputPersonalInfo"
                name="socialNet"
                type="text"
                value={personalInfo.socialNet}
                onChange={handlePersonalInfo}
            />
        </div>
    )
}