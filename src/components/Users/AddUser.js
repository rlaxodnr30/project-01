import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";

export default function AddUser(props) {
  const [enteredUserName, setEntereduserName] = useState("");
  const [enteredUserAge, setEntereduserAge] = useState();
  const addUserHandler = (e) => {
    e.preventDefault();
    if (
      enteredUserName.trim().length === 0 ||
      enteredUserAge.trim().length === 0
    ) {
      return;
    }
    if (+enteredUserAge < 1) {
      return;
    }
    props.onAddUser(enteredUserName, enteredUserAge);
    setEntereduserName("");
    setEntereduserAge("");
    console.log(enteredUserAge, enteredUserName);
  };
  const userNameHandle = (e) => {
    setEntereduserName(e.target.value);
  };
  const userAgeHandle = (e) => {
    setEntereduserAge(e.target.value);
  };
  return (
    <Card className={classes.input}>
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input
          value={enteredUserName}
          onChange={userNameHandle}
          id="username"
          type="text"
        />
        <label htmlFor="age">Age (Years)</label>
        <input
          value={enteredUserAge}
          onChange={userAgeHandle}
          id="age"
          type="number"
        />
        <Button type="submit">Add User</Button>
      </form>
    </Card>
  );
}
