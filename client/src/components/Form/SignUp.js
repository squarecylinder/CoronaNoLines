import React, { useState } from 'react';
import API from '../../utils/API'

function SignUpInput() {
    const [email, setEmail] = useState();
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [accountType, setAccountType] = useState();
    const [companyName, setCompanyName] = useState();
    const [businessType, setBusinessType] = useState();
    const [address, setAddress] = useState();
    const [dineIn, setDineIn] = useState();
    const [table, setTable] = useState();
    const [outsideDining, setOutsideDining] = useState();
    const [takeOut, setTakeOut] = useState();
    const [driveThru, setDriveThru] = useState();
    const [masks, setMasks] = useState();
    const [open, setOpen] = useState();
    const [curbside, setCurbside] = useState();

    function handleSignUpSubmit(event) {
        event.preventDefault();
        console.log(username)
        API.PostSignUp({
            username: username, 
            password: password, 
            email: email, 
            consumer: accountType, 
            companyName: companyName, 
            businessType: businessType,
            address: address, 
            dineIn: dineIn, 
            tables: table, 
            outsideDining: outsideDining, 
            takeOut: takeOut,
            driveThru: driveThru,
            curbside: curbside,
            open: open, 
            masks: masks}).then(
                alert(`Welcome ${username}`)
            ).then(window.location = ("/home"))
    }

    return (
        <div>
            <div className="mt-4 text-center">
                <h2>Signup!</h2>
            </div>
            <form onSubmit={handleSignUpSubmit} className="col md-5">
                <div className="Form-group">
                    <label for="InputEmail">Email Address</label>
                    <input type="email" className="form-control" id="InputEmail" aria-describedby="emailHelp" onChange={e => setEmail(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputUsername">Username</label>
                    <input type="input" className="form-control" id="InputUsername" onChange={e => setUsername(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputPassword">Password</label>
                    <input type="password" className="form-control" id="InputPassword" onChange={e => setPassword(e.target.value)}></input>
                </div>
                <div>
                    <label for="accountType">Choose an Account Type</label>
                    <select name="accountType" id="accountType" onChange={e => setAccountType(e.target.value)}>
                        <option value="true"></option>
                        <option value="true">Consumer</option>
                        <option value="false">Business</option>
                    </select>
                </div>
                <div style={{ display: `${(accountType === "false") ? "block" : "none"}` }}>
                    <div className="Form-group">
                        <label for="InputCompanyName">Company's Name</label>
                        <input type="input" className="form-control" id="InputCompanyName" onChange={e => setCompanyName(e.target.value)}></input>
                    </div>
                <div className="Form-group">
                    <label for="InputAddress">Address</label>
                    <input type="input" className="form-control" id="InputAddress" onChange={e => setAddress(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputMask">Masks</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputMasks" onChange={e => setMasks(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputMask">Curbside</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputCurbside" onChange={e => setCurbside(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputMask">Are you Open?</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputOpen" onChange={e => setOpen(e.target.value)}></input>
                </div>
                    <div>
                        <label for="businessType">Choose an Business Type</label>
                        <select name="businessType" id="businessType" onChange={e => setBusinessType(e.target.value)}>
                            <option value="retail">Retail</option>
                            <option value="resturant">Resturant</option>
                        </select>
                    </div>
                    <div style={{ display: `${(businessType === "resturant") ? "block" : "none"}` }}>
                        <div className="Form-group">
                            <label for="InputDineIn">Dine In</label>
                            <input type="input" placeholder="Enter true or false" className="form-control" id="InputDineIn" onChange={e => setDineIn(e.target.value)}></input>
                        </div>
                        <div className="Form-group">
                            <label for="InputTable">Tables</label>
                            <input type="number" placeholder="0" min="0" className="form-control" id="InputTable" onChange={e => setTable(e.target.value)}></input>
                        </div>
                <div className="Form-group">
                    <label for="InputOutsideDining">Outside Dining</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputOutsideDining" onChange={e => setOutsideDining(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputDriveThru">Drive-Thru</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputDriveThru" onChange={e => setDriveThru(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputDriveThru">Take-Out</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputDriveThru" onChange={e => setTakeOut(e.target.value)}></input>
                </div>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}
export default SignUpInput;