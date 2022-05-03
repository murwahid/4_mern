import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [nameError, setNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [username, setUsername] = useState("");
//HOOKS: EMAIL
    const [email, setEmail] = useState("");
    const [emailError,setEmailError] = useState("");
//HOOKS: PASSWORD
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [passwordErrorMatch, setpasswordErrorMatch] = useState(""); 
    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { username, email, password };
        console.log("Welcome", newUser);
        };
        // FUNCTIONS
    const handleFirstName = (e) => {
        setFirstName(e.target.value)
        //conditional logic for validation
        // e.target.value.length < 2) ? setNameError(" field must be at least 2 characters"): '';
        if(e.target.value.length <2) {
            setNameError("field must be at least 2 characters");
        } else {
            setNameError("")
        }
    }
    //LAST NAME VALIDATION
    const handleLastName = (e) => {
        setLastName(e.target.value)
        //conditional logic for validation
        // e.target.value.length < 2) ? setNameError(" field must be at least 2 characters"): '';
        if(e.target.value.length <2) {
            setLastNameError("field must be at least 2 characters-duh!");
        }
    }
    //VALIDATION: EMAIL ERROR 
    const handleEmailErrors = (e) => {
        //set the value 
        setEmail(e.target.value); 
        //validation
        if(e.target.value.length < 5) {
            setEmailError("email needs 5 characters or more!")
        }else {
            setEmailError("")
        }
    }
    //VALIDATION: PASSWORD LENGTH
    const handlePassword = (e) => {
        //set the value
        setPassword(e.target.value);
        //validation
        if(e.target.value.length <= 8){
            setPasswordError("Password must be 8 characters.")
        }
    }
    //VALIDATION: PASSWORDS MATCH
    const handlePasswordMatch = (e) => {
        setConfirmPassword(e.target.value); 
        //validation
        confirmPassword == password ? setpasswordErrorMatch(""):setpasswordErrorMatch("Passwords do not match! Try Again.")
        
    }
    return(
        <form onSubmit={ createUser }>
            <div> 
                <label> First Name: </label>
                <input type="text" onChange = {(e)=> setFirstName(e.target.value)}/>
                {
                    firstName.length < 2 && firstName.length > 0 ? <p>Must be blah blah</p>: null
                }
            </div>
            <div>
                <label> Last Name: </label>
                <input type="text" onChange = { (e)=> setLastName(e.target.value) }/>
                {
                    lastName.length <3 && lastName.length >0 ? <p>Must be more than two characters</p>: null
                }
            </div> 
            <div>
                <label>Email Address: </label> 
                <input type="text" onChange={ handleEmailErrors } />
                {
                    emailError ? <p>{emailError}</p> : ''
                }
            </div>
            <div>
                <label>Password: </label>
                <input type="text" onChange={ handlePassword } />
                {
                    passwordError ? <p>{passwordError}</p>: ''
                }
            </div>
            <div>
                <label>Confirm Password</label>
                <input type="text" onChange={ handlePasswordMatch } />
                {
                    passwordErrorMatch ? <p>{passwordErrorMatch}</p>: ''
                }
            </div>
            <input type="submit" value="Create User" />

            <div> 
                <h2>Your Form Data</h2>
                <h4>First Name:{firstName}</h4>
                <h4>Last Name: {lastName}</h4>
                <h4>Email Address: {email}</h4>
                <h4>Password: {password}</h4>
            </div>
        </form>
    );
};
    
export default UserForm;
