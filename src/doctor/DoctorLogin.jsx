import React, { useState } from "react";
import Button from "@mui/material/Button";
import {TextField, Typography} from "@mui/material";
import Card from "@mui/material/Card";


import {useNavigate} from 'react-router-dom';

const DoctorLogin = ()=>{

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
                <Card variant={"outlined"} style={{width:400, height: 450, padding:20}}>

                <div style={{
                paddingTop:50,
                marginBottom:40,
                display:"flex",
                justifyContent:"center",
                
            }}> 
            
                <Typography variant={"h6"}>
                    <b>DOCTOR'S LOGIN</b>
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
                                    navigate("/doctor")
                                })
                                
                            }}
                        >
                            Login
                        </Button>
                </Card>
                
            </div>
            
        </div>
    )
};

export default DoctorLogin;


