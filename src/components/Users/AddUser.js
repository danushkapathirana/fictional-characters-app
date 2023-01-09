import React, { useState } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge, setEnteredAge] = useState('')

    const addUserHandler = (event) => {
        event.preventDefault()
        if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
            return
        }
        if(+enteredAge < 1) {
            return
        }
        setEnteredUsername('')
        setEnteredAge('')
    }

    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value)
    }

    const ageChangeHandler = (event) => {
        setEnteredAge(event.target.value)
    }

    return(
        <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username">Username</label>
                <input id="username" type="text" onChange={usernameChangeHandler} value={enteredUsername}/> {/**value; set current state snapshot to this input field */}
                <label htmlFor="age">Age (Years)</label>
                <input id="age" type="number" onChange={ageChangeHandler} value={enteredAge}/>
                <Button type="submit">Add User</Button>
            </form>
        </Card>
    )
}

export default AddUser
