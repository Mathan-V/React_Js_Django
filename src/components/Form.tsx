import React, { useState } from 'react';

const Form: React.FC = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        mobile_number: '',
        address: ''
    });

    const v2 = "Mathan";

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        const response = await fetch('http://localhost:8000/api/userdata/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });
        console.log(response)
        if (response.ok) {
            window.alert('Data submitted successfully')
            window.location.reload()
            console.log('Data submitted successfully');
        } else {
            console.error('Error submitting data');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Name" onChange={handleChange} value={formData.name} />
                <br/>
                <input type="email" name="email" placeholder="Email" onChange={handleChange} value={formData.email} />
                <br/>
                <input type="text" name="mobile_number" placeholder="Mobile Number" onChange={handleChange} value={formData.mobile_number} />
                <br />
                <textarea name="address" placeholder="Address" onChange={handleChange} value={formData.address}></textarea>
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Form;

