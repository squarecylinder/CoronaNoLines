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
    const [city, setCity] = useState();
    const [state, setState] = useState();
    const [zip, setZip] = useState();
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
            city: city,
            state: state,
            zip: zip,
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
    function disableClose() {
        if(document.getElementById("open").checked === true)
            document.getElementById("closed").setAttribute("disabled", "disabled")
        else {
            document.getElementById("closed").removeAttribute("disabled")
        }
    }
    function disableOpen() {
        if(document.getElementById("closed").checked === true)
            document.getElementById("open").setAttribute("disabled", "disabled")
        else {
            document.getElementById("open").removeAttribute("disabled")
        }
    }
    function handleCheck() {
        if(document.getElementById("driveThru").checked === true) {
            return true
        } return false
    }
    return (
        <div>
            <div className="mt-4 text-center">
                <h2>Signup!</h2>
            </div>
            <form onSubmit={handleSignUpSubmit} className="col md-5">
                {/* <div className="Form-group">
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
                </div> */}
                <div className="form-row">
                    <div className="form-group col-md-6">
                        <label for="inputEmail">Email</label>
                        <input type="email" className="form-control" id="inputEmail" placeholder="Email" onChange={e => setUsername(e.target.value)}/>
                    </div>
                    <div className="form-group col-md-6">
                        <label for="inputPassword4">Password</label>
                        <input type="password" className="form-control" id="InputPassword" placeholder="Password" onChange={e => setPassword(e.target.value)}/>
                    </div>
                    <div>
                    <label for="accountType">Choose an Account Type</label>
                    <select name="accountType" id="accountType" onChange={e => setAccountType(e.target.value)}>
                        <option value="true"></option>
                        <option value="true">Consumer</option>
                        <option value="false">Business</option>
                    </select>
                </div>
                </div>
                <div style={{ display: `${(accountType === "false") ? "block" : "none"}` }}>
                    {/* <div className="Form-group">
                        <label for="InputCompanyName">Company's Name</label>
                        <input type="input" className="form-control" id="InputCompanyName" onChange={e => setCompanyName(e.target.value)}></input>
                    </div>
                <div className="Form-group">
                    <label for="InputAddress">Address</label>
                    <input type="input" className="form-control" id="InputAddress" onChange={e => setAddress(e.target.value)}></input>
                </div> */}
                <div className="form-group">
                    <label for="InputCompanyName">Company Name</label>
                    <input type="text" className="form-control" id="InputCompanyName" placeholder="Company Name" onChange={e => setCompanyName(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label for="inputAddress">Address</label>
                    <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" onChange={e => setAddress(e.target.value)}/>
                </div>
                <div className="form-row">
                <div className="form-group col-md-6">
                    <label for="inputCity">City</label>
                    <input type="text" className="form-control" id="inputCity" onChange={e => setCity(e.target.value)}/>
                </div>
                <div className="form-group col-md-4">
                    <label for="inputState">State</label>
                    <select id="inputState" className="form-control" onChange={e => setState(e.target.value)}>
                        <option selected>Choose...</option>
                        <option value="AL">Alabama</option>
                        <option value="AK">Alaska</option>
                        <option value="AZ">Arizona</option>
                        <option value="AR">Arkansas</option>
                        <option value="CA">California</option>
                        <option value="CO">Colorado</option>
                        <option value="CT">Connecticut</option>
                        <option value="DE">Delaware</option>
                        <option value="DC">District Of Columbia</option>
                        <option value="FL">Florida</option>
                        <option value="GA">Georgia</option>
                        <option value="HI">Hawaii</option>
                        <option value="ID">Idaho</option>
                        <option value="IL">Illinois</option>
                        <option value="IN">Indiana</option>
                        <option value="IA">Iowa</option>
                        <option value="KS">Kansas</option>
                        <option value="KY">Kentucky</option>
                        <option value="LA">Louisiana</option>
                        <option value="ME">Maine</option>
                        <option value="MD">Maryland</option>
                        <option value="MA">Massachusetts</option>
                        <option value="MI">Michigan</option>
                        <option value="MN">Minnesota</option>
                        <option value="MS">Mississippi</option>
                        <option value="MO">Missouri</option>
                        <option value="MT">Montana</option>
                        <option value="NE">Nebraska</option>
                        <option value="NV">Nevada</option>
                        <option value="NH">New Hampshire</option>
                        <option value="NJ">New Jersey</option>
                        <option value="NM">New Mexico</option>
                        <option value="NY">New York</option>
                        <option value="NC">North Carolina</option>
                        <option value="ND">North Dakota</option>
                        <option value="OH">Ohio</option>
                        <option value="OK">Oklahoma</option>
                        <option value="OR">Oregon</option>
                        <option value="PA">Pennsylvania</option>
                        <option value="RI">Rhode Island</option>
                        <option value="SC">South Carolina</option>
                        <option value="SD">South Dakota</option>
                        <option value="TN">Tennessee</option>
                        <option value="TX">Texas</option>
                        <option value="UT">Utah</option>
                        <option value="VT">Vermont</option>
                        <option value="VA">Virginia</option>
                        <option value="WA">Washington</option>
                        <option value="WV">West Virginia</option>
                        <option value="WI">Wisconsin</option>
                        <option value="WY">Wyoming</option>
                    </select>
                </div>
                <div className="form-group col-md-2">
                    <label for="inputZip">Zip</label>
                    <input type="text" className="form-control" id="inputZip" onChange={e => setZip(e.target.value)}/>
                </div>
                </div>
                {/* <div className="Form-group">
                    <label for="InputMask">Masks</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputMasks" onChange={e => setMasks(e.target.value)}></input>
                </div>
                <div className="Form-group">
                    <label for="InputMask">Curbside</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputCurbside" onChange={e => setCurbside(e.target.value)}></input>
                </div> */}
                <p className="font-weight-bold">Check all that apply:</p>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="masks"/>
                    <label className="form-check-label" for="masks">Masks</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="curbside"/>
                    <label className="form-check-label" for="curbside">Curbside</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="open" onClick={disableClose}/>
                    <label className="form-check-label" for="open">Open</label>
                </div>
                <div className="form-check form-check-inline">
                    <input className="form-check-input" type="checkbox" id="closed" onClick={disableOpen}/>
                    <label className="form-check-label" for="closed">Closed</label>
                </div>
                <hr/>
                {/* <div className="Form-group">
                    <label for="InputMask">Are you Open?</label>
                    <input type="input" placeholder="Enter true or false" className="form-control" id="InputOpen" onChange={e => setOpen(e.target.value)}></input>
                </div> */}
                    <div>
                        <label for="businessType">Choose an Business Type</label>
                        <select name="businessType" id="businessType" onChange={e => setBusinessType(e.target.value)}>
                            <option value="retail">Retail</option>
                            <option value="restaurant">Restaurant</option>
                        </select>
                    </div>
                    <div className="form-group" style={{ display: `${(businessType === "restaurant") ? "block" : "none"}` }}>
                        {/* <div className="Form-group">
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
                </div> */}
                        <p className="font-weight-bold">Check all that apply:</p>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="dineIn"/>
                            <label className="form-check-label" for="dineIn">Dine-In</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="outsideDining"/>
                            <label className="form-check-label" for="outsideDining">Outside Dining</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="checkbox" id="driveThru" onChange={e => setDriveThru(e.target.value)}/>
                            <label className="form-check-label" for="driveThru">Drive Thru</label>
                        </div>
                        <div className="form-row">
                            <label for="InputTable">Tables</label>
                            <input type="number" placeholder="0" min="0" className="form-control" id="InputTable" onChange={e => setTable(e.target.value)}></input>
                        </div>
                    </div>
                </div>
                <br/>
                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    )
}
export default SignUpInput;