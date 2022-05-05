import axios from 'axios';
import { useState } from 'react';
import styles from '../styles/create.module.css'

const Create = () => {
    const [data, setData] = useState({});
    console.log(data);

    const handleOnChange = (e) => {
        const field = e.target.name;
        const value = e.target.value;
        const newData = { ...data };
        newData[field] = value;
        setData(newData);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!data.color) data.color = "Blue"
        if (!data.type) data.type = "Develop"
        data.users = [
            {
                "uid": "1",
                "name": "shafin",
                "email": "shafin@gmail.com",
                "password": "shafinpassword"
            },
            {
                "uid": "2",
                "name": "shafin2",
                "email": "shafin2@gmail.com",
                "password": "shafin2password"
            }
        ];
        data.admin = {
            "name": "admin",
            "email": "admin@gmail.com",
            "password": "adminpassword",
            admin: true
        }
        data.created_at = new Date();
        data.updated_at = new Date();
        if (data.name && data.type) {
            axios.post('/api/create', data)
        } else {
            alert("Enter all the information please")
        }
        // console.log(data);
    }
    return (
        <div>
            <div className={styles.form_style_2}>
                <div className={styles.form_style_2_heading}>Provide your information</div>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">
                        <span>
                            Name
                            <span className="required">*</span>
                        </span>
                        <input type="text" onChange={handleOnChange} className={styles.input_field} name="name" />
                    </label>
                    <label htmlFor="color">
                        <span>
                            Color <span className="required">*</span>
                        </span>
                        <select onChange={handleOnChange} defaultValue="Blue" id='color' name="color" className="select_field">
                            <option value="Blue">Blue</option>
                            <option value="Green">Green</option>
                            <option value="Red">Red</option>
                        </select>
                    </label>
                    <label htmlFor="type">
                        <span>
                            Type</span>
                        <select onChange={handleOnChange} name="type" className="select_field">
                            <option value="Develop">Develop</option>
                            <option value="Management">Management</option>
                            <option value="Design">Design</option>
                        </select>
                    </label>
                    {/* <label htmlFor="admin">
                        <span>
                            Admin</span>
                        <input onChange={handleOnChange} type="checkbox" name="admin" />
                    </label> */}
                    <label htmlFor="notes">
                        <span>
                            Message <span className="required">*</span>
                        </span>
                        <textarea onChange={handleOnChange} name="notes" className="textarea_field"></textarea>
                    </label>
                    <label>
                        <span> </span>
                        <input type="submit" value="Submit" />
                    </label>
                </form>
            </div>
        </div>
    );
};

export default Create;