// Authentication 
// Sign Up  - Registartion
// Login
// Logout
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function App() {




    const input = {
        width: "100%",
        padding: "8px",
        marginBottom: "16px",
        boxSizing: "border-box"
    }



    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [pswd,setPswd]=useState("")
    const [cpswd,setCpswd]=useState("")
    const navigate=useNavigate()


    

    const firebaseConfig = {
        apiKey: "AIzaSyDZDYClrk3wX0zQARqtQy3r7DaFYuSjleo",
        authDomain: "karthik-30af1.firebaseapp.com",
        projectId: "karthik-30af1",
        storageBucket: "karthik-30af1.appspot.com",
        messagingSenderId: "390068929098",
        appId: "1:390068929098:web:b515e36120e6404d905cb3",
        measurementId: "G-X1CEJRWMMH"
      };

     initializeApp(firebaseConfig);
    const auth = getAuth() 
    
    const submitData=(event)=>{
        event.preventDefault()
        if(name.length <=5){
            alert("Minimu 6 charachter manadatoery..!")
        }
        if(pswd != cpswd){
            alert("Password does not match..!")
        }

        let obj={
            email:email,
            password:pswd
        }
        createUserWithEmailAndPassword(auth,obj.email,obj.password) 

        .then(()=>{
            alert("Registered Successfully")
            navigate("/login")
        })
        .catch((err)=>{
            alert("Error", err)
        })

 
    }

    return (
                <div style={{ margin: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh",  backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLJYJ7cQPX6jQ0rOMDM3RwdtQytfCARj7qBQ&usqp=CAU")`, backgroundSize: "cover"}}>
                    <form onSubmit={submitData} style={{backgroundColor:"rgb(134, 200, 255)",padding:"30px",width:"400px",borderRadius:"30px",boxShadow:"4px 2px 5px 5px black"}} >

                    <h1 className="text-center">Sign-Up</h1>
                        
                            <label style={{ display: "block", marginBottom: "8px" }}>Name</label>
                            <input style={input} value={name} type="text" onChange={e=>setName(e.target.value)} class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                        
                            <label style={{ display: "block", marginBottom: "8px" }}>Email</label>
                            <input style={input} value={email} onChange={e=>setEmail(e.target.value)} type="email" class="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                       
                       
                            <label style={{ display: "block", marginBottom: "8px" }}>Password</label>
                            <input style={input} value={pswd} onChange={e=>setPswd(e.target.value)} type="password" class="form-control" required id="exampleInputPassword1" />
                        
                        
                            <label style={{ display: "block", marginBottom: "8px" }}>Confirm Password</label>
                            <input style={input} value={cpswd} onChange={e=>setCpswd(e.target.value)}  type="password" class="form-control" required id="exampleInputPassword1" />
                    
                        <button type="submit" className="btn btn-outline-success ">Register</button><br/>

                        <a>If you have already account </a>
                            <Link to="/login">Login</Link>
                       
                    </form>
                </div> 
    )
}

export default App;