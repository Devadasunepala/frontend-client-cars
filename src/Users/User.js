
import React, { useState } from "react";
import './user.css';
import axios from 'axios';
import { Link } from "react-router-dom";

function RegistrationForm() {
    const [Name, setname] = useState('');
    const [carname, setcarname] = useState('');
    const [phonenumber, setphone] = useState('');
    const [address, setaddress] = useState('');
    const [carvarient, setvarient] = useState('');

    const handlesubmit = async (e) => {
        e.preventDefault();
       if(Name,carname,phonenumber,address,carname!=''){
        try {
            const response = await axios.post('https://localhost:4002/userenquirydata', {
                Name,
                carname,
                phonenumber,
                address,
                carvarient
            });
            console.log('ggg',response)
            if (response.status === 200) {
                alert(response.data);
            }
        } catch (error) {
            console.error('Error creating post:', error);
        }
       }
       else{
        alert(' Please Fill The details')
       }
    };

    return (
        <div className="form">
            <form onSubmit={handlesubmit}>
                <div className="form-body">
                    <u><h4 className="bg mt-2 mb-4">If you Want a Quote Fill The Details</h4></u>
                    <div className="username">
                    <input type="hidden" name="form-name" value="contact" />
                        <label className="form__label" htmlFor="firstName">Name</label>
                        <input className="form__input" name="name" type="text" id="firstName" value={Name} onChange={(e) => setname(e.target.value)} />
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="carName">Car Name</label>
                        <input className="form__input" name="carname" type="text" id="carName" value={carname} onChange={(e) => setcarname(e.target.value)} />
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="phone">Phone Number</label>
                        <input className="form__input" name="number" required type="tel" id="phone" value={phonenumber} onChange={(e) => setphone(e.target.value)} />
                    </div>
                    <div className="username">
                        <label className="form__label" htmlFor="address">Address</label>
                        <textarea className="form__input" name="address" id="address" value={address} onChange={(e) => setaddress(e.target.value)}></textarea>
                    </div>
                    <div className="username">
                        <label className="form__label">Car Variant</label>
                        <input className="m-2" type="radio" name="carVariant" id="lxi" value="LXI" checked={carvarient === "LXI"} onChange={(e) => setvarient(e.target.value)} />LXI
                        <input className="m-2" type="radio" name="carVariant" id="vxi" value="VXI" checked={carvarient === "VXI"} onChange={(e) => setvarient(e.target.value)} />VXI
                        <input className="m-2" type="radio" name="carVariant" id="zxi" value="ZXI" checked={carvarient === "ZXI"} onChange={(e) => setvarient(e.target.value)} />ZXI
                        <input className="m-2" type="radio" name="carVariant" id="zxiPlus" value="ZXI+" checked={carvarient === "ZXI+"} onChange={(e) => setvarient(e.target.value)} />ZXI+
                    </div>
                   
                    <div className="submit">
                        <button type="submit">Submit</button>
                    </div>
                </div>
            </form>
           <Link to='/'> <h4 className="mt-3">Back to page</h4></Link>
        </div>
    );
}

export default RegistrationForm;


