import React from 'react'

export const Login = () => {
    const [formDetails, setFormDetails] = React.useState({
        name : "",
        email : "",
        password : "",
        username : "",
        mobile : "",
        description : ""

    })
    
    const[data, setData] = React.useState([])

    const handleChange = (e) =>{
        const {id,value} = e.target;
        setFormDetails({
            ...formDetails,
            [id] : value
        })
    }

    const loginSubmit = (e) =>{

        e.preventDefault();
       const formData = {
      name, email, password, username, mobile,description
    }

    setData([...data, formData]);
    console.log("data after submission", data);

    console.log(formData)
    const jsonData = JSON.stringify(formData)
    // the code for posting data goes here - POST method
    fetch("https://masai-api-mocker.herokuapp.com/auth/register",{
      method :"POST",
      body: jsonData,
      headers:{
        "Content-Type" : "application/json"
      }
    })
    }

    const {name, password, email, mobile,username, description} = formDetails

  return (
    <form onSubmit={loginSubmit}>
        <h1>Login Page</h1>
        <label >
            Name :
            <input id='name' type="text" placeholder='Enter Name' onChange={handleChange} value = {name} />
        </label>

    <br />
        <label >
            Email :
            <input  id = "email"type="text" placeholder='Enter Email' onChange={handleChange} value = {email} />
        </label>

        <br />
        <label >
            Password :
            <input id='password' type="password" placeholder='Enter Password' onChange={handleChange} value = {password}/>
        </label>

        <br />
        <label >
            Username :
            <input  id ="username" type="text" placeholder='Enter username'onChange={handleChange} value = {username} />
        </label>

        <br />
        <label >
            Mobile :
            <input id='mobile' type="text" placeholder='Enter Mobile No' onChange={handleChange} value = {mobile} />
        </label>

        <br />
        <label >
            Description :
            <input id='description' type="text" placeholder='Description' onChange={handleChange} value = {description} />
        </label>

        <br />
        <input type= "submit" value= "Submit" />

    </form>
  )
}
