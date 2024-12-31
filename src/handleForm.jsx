import { useState } from "react";

export default function HandleForm() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        getEmail: false,
    });

    function handleChange(e) {
        const { name, value, type, checked } = e.target;

        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [name]: type === "checkbox" ? checked : value, // Handle both checkbox and text inputs
            };
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault(); // Prevent page reload
        alert("Form submitted successfully!");
    }

    return (
        <>
            <h3>Learning to handle form in React</h3>
            <form onSubmit={handleFormSubmit}>
                <label>First Name</label>
                <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                />

                <label>Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                />

                <label>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />

                <label>
                    Subscribe to Emails
                    <input
                        type="checkbox"
                        name="getEmail"
                        checked={formData.getEmail}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Submit</button>
            </form>
        </>
    );
}
