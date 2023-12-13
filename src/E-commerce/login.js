

import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function Login() {



    const input = {
        width: "100%",
        padding: "8px",
        marginBottom: "16px",
        boxSizing: "border-box"
    }


    const [email, setEmail] = useState("")
    const [pswd, setPswd] = useState("")

    const navigate = useNavigate()




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

    const submitData = (event) => {
        event.preventDefault()

        let obj = {
            email: email,
            password: pswd
        }
        signInWithEmailAndPassword(auth, obj.email, obj.password)

            .then(() => {
                alert("logged in Successfully")
                navigate("/main")
            })
            .catch((err) => {
                alert("Error", err)
            })
    }



    return (
        <div style={{ margin: 0, display: "flex", justifyContent: "center", alignItems: "center", height: "100vh", backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQzP6tk7GooFFOfOs2edg1l_RsVMJuxgvWmSQ&usqp=CAU")`, backgroundSize: "cover" }}> 
            <form onSubmit={submitData} style={{backgroundColor:"rgb(237, 97, 87)",padding:"30px",width:"400px",borderRadius:"30px",boxShadow:"4px 2px 5px 5px black"}}>

                <h1 className="text-center">Login</h1>

                <label style={{ display: "block", marginBottom: "8px" }}>Email</label>
                <input style={input} value={email} onChange={e => setEmail(e.target.value)} type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />

                <label style={{ display: "block", marginBottom: "8px" }}>Password</label>
                <input style={input} value={pswd} onChange={e => setPswd(e.target.value)} type="password" className="form-control" required id="exampleInputPassword1" /> <br />

                <button type="submit" className="btn btn-outline-success">Login</button><br />

                <a>If you dont have a account
                    <Link to="/">Register</Link>
                </a>

            </form>
        </div>
    )
}
export default Login;
