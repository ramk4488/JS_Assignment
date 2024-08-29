import React from "react";
import { useState } from "react";
const DynamicFormValueSettingInState = () => {

    const [formData, setFormData] = useState({
        fName: "",
        lName: "",
        gender: "Male",
        state: "",
        skills: "",
      });

      
    const handleEvent = (e) => {
        console.log(e.target.value);
        const { name, value } = e.target;
        // setFormData(formData[name] = e.target.value);
        setFormData((updatedFormData) => ({ ...updatedFormData, [name]: value }));
        console.log("Gullu");
        console.log(name);
        console.log(formData);
    }
    return(
        <div className="form-element" style={{padding:"20px"}}>
            <div style={{padding:"20px"}}>
                <label  style={{padding:"20px", }} htmlFor="firstName">First Name</label>
                <input onChange={handleEvent} type="text" name="fName" placeholder="Enter First Name" />
            </div>
            <div style={{padding:"20px"}}>
                <label  style={{padding:"20px", }} htmlFor="lastName">Last Name</label>
                <input onChange={handleEvent} type="text" name="lName" placeholder="Enter Last Name" />
            </div>
            <div style={{padding:"20px"}}>
                <label  style={{padding:"20px", }} htmlFor="gender">Gender</label>
                <input onChange={handleEvent} type="radio" name="gender" value="Male" /><span>Male</span>
                <input onChange={handleEvent} type="radio" name="gender" value="Female" /><span>Female</span>
            </div>
            <div style={{padding:"20px"}}>
                <label  style={{padding:"20px", }} htmlFor="state">State</label>
                <select onChange={handleEvent} name="state" id="state">
                    <option value= "Andhra Pradesh">Andhra Pradesh</option>
                    <option value= "Arunachal Pradesh">Arunachal Pradesh</option>
                    <option value= "Assam">Assam</option>
                    <option value= "Bihar">Bihar</option>
                    <option value= "Chhattisgarh">Chhattisgarh</option>
                    <option value= "Goa">Goa</option>
                    <option value= "Gujarat">Gujarat</option>
                    <option value= "Haryana">Haryana</option>
                    <option value= "Himachal Pradesh">Himachal Pradesh</option>
                    <option value= "Jharkhand">Jharkhand</option>
                    <option value= "Karnataka">Karnataka</option>
                    <option value= "Kerala">Kerala</option>
                    <option value= "Madhya Pradesh">Madhya Pradesh</option>
                    <option value= "Maharashtra">Maharashtra</option>
                    <option value= "Manipur">Manipur</option>
                    <option value= "Meghalaya">Meghalaya</option>
                    <option value= "Mizoram">Mizoram</option>
                    <option value= "Nagaland">Nagaland</option>
                    <option value= "Odisha">Odisha</option>
                    <option value= "Punjab">Punjab</option>
                    <option value= "Rajasthan">Rajasthan</option>
                    <option value= "Sikkim">Sikkim</option>
                    <option value= "Tamil Nadu">Tamil Nadu</option>
                    <option value= "Telangana">Telangana</option>
                    <option value= "Tripura">Tripura</option>
                    <option value= "Uttar Pradesh">Uttar Pradesh</option>
                    <option value= "West Bengal">West Bengal</option>
                </select>
            </div>
            <div style={{padding:"20px"}}>
                <label  style={{padding:"20px", }} htmlFor="skills">Skills</label>
                <input onChange={handleEvent} style={{margin:"20px"}} type="checkbox" name="skills" id="" value="PHP" /><span>PHP</span>
                <input onChange={handleEvent} style={{margin:"20px"}} type="checkbox" name="skills" id="" value="Python" /><span>Python</span>
                <input onChange={handleEvent} style={{margin:"20px"}} type="checkbox" name="skills" id="" value="java" /><span>Java</span>
            </div>
            <div style={{padding:"20px"}}>
                <button>Submit</button>
            </div>
        </div>
    )
}

export default DynamicFormValueSettingInState;