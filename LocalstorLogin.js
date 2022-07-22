import Axios from 'axios'
import React, { useState } from 'react'
import { useNavigate  } from "react-router-dom";
import Style from "../Login.module.css"



export const Login = () => {

    const [username,setUsername]=useState(null)
    const [password,setPassword]=useState('')
    const [error,setError]=useState()
// const hendelClick=async()=>{


// }
const navigate = useNavigate();

const submith=async(e)=>{
    e.preventDefault()
try { await Axios ({
        method:"post",
        url:'http://localhost:8000/login',
        data:{
            username:username,
            password:password
        }
    }).then((response)=>{
        console.log(response.data ['token'])
        window.localStorage.setItem("token",response.data ['token'])
        window.location.href="/"
       
    })}
    catch(err){
        setError("Email or password do not match.!!")



    }
}
    return (<div>

        <link
            href='https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600'
            rel='stylesheet'
            type='text/css' />
            <link
                href="//netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css"
                rel="stylesheet" />

                <div className={Style.testbox}>
                    <h1>Login</h1>
                    {error && <center style={{'color':'red'}}>{error}</center>}

                    <form  onSubmit={submith} >

                    <hr/>
                    <div className={Style.accounttype}>
                        <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" /></div>
                        <hr />

                            <label id={Style.icon} for="name">
                                <i className="icon-user"></i>
                            </label>

                            <input type="text" value={username} onChange={(e)=>{setUsername(e.target.value)}} name="username" placeholder="Username" />
                                <label id={Style.icon} for="name">
                                    <i className="icon-shield"></i>
                                </label>
                                <input type="password" name="password" value={password} onChange={(e)=>{setPassword(e.target.value)}} placeholder="password" />
                                    <p style={{
      'width':'150px',
      'display': 'inline-block',
      'marginLeft': '18px',
      'fontSize':'14px'
      }}>If you have account then
                                        <a href="#"> Login</a>.</p>
                                    <button type="submit" >Login</button>

                                </form>
                            </div>
                        
                        </div>
                        )
}