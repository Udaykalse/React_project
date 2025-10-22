import React, { useState } from 'react'

function form() {
    const [formData, setFormData] = useState({
        name: '', email: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value
        })

    };

    const handleSubmit = (e) => {
        e.preventDefault();
        alert('form Submiited');
        console.log(formData);
        setFormData({name:'',email:''})
    };
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Name:- </label>
                <input type="text" name="name" value={formData.name} onChange={handleChange} />
                <label >Email:-</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} />
                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default form
