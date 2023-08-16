import React, { useState } from "react";
import Button from "@mui/material/Button";
import {TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";


import {useNavigate} from 'react-router-dom';

const PatientLogin = ()=>{

    const [email , setEmail] = useState("");
    const [password , setPassword] = useState("");
const navigate= useNavigate();
    return(
        <div >
    
            
            
            <div style={{
                display:"flex",
                justifyContent:"center",
                paddingTop:"75px"
            }}>            
                <Card variant={"outlined"} style={{width:400, padding:20}}>

                <div style={{
                paddingTop:100,
                marginBottom:20,
                display:"flex",
                justifyContent:"center",
                
            }}> 
            
                <Typography variant={"h6"}>
                    Welcome back to B-Health. Sign in below:
                </Typography>
            </div>
                        <TextField 

                            onChange={(e)=>{
                                setEmail(e.target.value);
                            }}
                            fullWidth={true} 
                            id={"email"}
                            label="Email" 
                            variant="outlined" 
                        />
                        <br /><br />
                        <TextField 
                            onChange={(e)=>{
                                setPassword(e.target.value);
                            }}
                            fullWidth={true} 
                            id={"outlined-password-input"} 
                            label="Password" 
                            variant="outlined"  
                            autoComplete="current-password"
                            type="password"
                        />
                        <br /><br />
                        <Button 
                            size={"large"} 
                            variant="contained"
                            onClick={()=>{
                                
                                fetch("http://localhost:3000/patient/login",{
                                    method:'POST',
                                    body:JSON.stringify({
                                        email,
                                        password
                                    }),
                                    headers:{
                                        "Content-type":"application/json"
                                    }
                                }).then((res)=>{
                                    return res.json()
                                }).then(data=>{
                                    localStorage.setItem("token",data.token)
                                    console.log(data)
                                    navigate("/patient")
                                })
                                
                            }}
                        >
                            Sign in
                        </Button>
                        
                        <Typography variant={"h6"}>
                 Don't have an account? <a style={{cursor:"pointer",
                  textDecoration: "underline"}} onClick={()=>{
                    navigate("/patient/signup")
                 }}>Sign up</a>
                </Typography>
                </Card>
                
            </div>
            
        </div>
    )
};

export default PatientLogin;


