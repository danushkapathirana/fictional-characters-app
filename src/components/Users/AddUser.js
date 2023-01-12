    import React, { Fragment, useState, useRef } from "react";

import Button from "../UI/Button";
import Card from "../UI/Card";
import ErrorModal from "../UI/ErrorModal";
import classes from "./AddUser.module.css"

const AddUser = (props) => {
    const nameInputRef = useRef()
    const ageInputRef = useRef()
    const [error, setError] = useState()

    const addUserHandler = (event) => {
        event.preventDefault()

        const userEnteredName = nameInputRef.current.value
        const useEnteredAge = nameInputRef.current.value
        
        if(userEnteredName.trim().length === 0 || useEnteredAge.trim().length === 0) {
            setError({
                title: "Invalid Input",
                message: "Please enter a valid name and age (non-empty values)."
            })
            return
        }
        if(+useEnteredAge < 1) {
            setError({
                title: "Invalid Age",
                message: "Please enter a valid age (age > 0)."
            })
            return
        }

        props.onAddUser(userEnteredName, useEnteredAge)
        nameInputRef.current.value = ""
        ageInputRef.current.value = ""
    }

    const errorHandler = () => {
        setError(null)
    }

    return(
        <Fragment> {/**use Fragment instead of div, it does not render in the DOM, div does */}
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" ref={nameInputRef}/> {/**value; set current state snapshot to this input field */}
                    <label htmlFor="age">Age (Years)</label>
                    <input id="age" type="number" ref={ageInputRef}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </Fragment>
    )
}

export default AddUser
