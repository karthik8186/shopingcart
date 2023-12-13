import { useEffect, useState } from "react";
import { signOut, getAuth, onAuthStateChanged,} from "firebase/auth";
import { initializeApp } from "firebase/app";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Pages from "./pagenation";
// import "./commerce.css"


function Free() {
  const [sort, setSort] = useState("")
  const [count, setCount] = useState(0)
  
  const [page,setPage]=useState(1)
  const [record,useReord]=useState(8)
  const [data, setData] = useState([])
  const [value, setValue] = useState("")
  const [img, setImg] = useState("")
  const [name, setName] = useState("")
  const [content, setContent] = useState("")
  const [price, setPrice] = useState("")



  // page Function
  let lr=page*record
  let fr=lr-record

  let mydata=data.slice(fr,lr)
  const updatepage=(k)=>{
    setPage(k)
  }
  const next=()=>{
    setPage(page+1)
  }
  const prev=()=>{
    setPage(page-1)
  }



          // posting data to Cart 
  const senddata = (id) => {
    fetch("https://ecommerce-app-api-aqsm.onrender.com/e-commerce/" + id)
      .then((res) => {
        let x = res.json()
        console.log(x)
        return x
      })
      .then((resp) => {
        console.log(resp)
        fetch("https://ecommerce-app-api-aqsm.onrender.com/cart-data", {
          method: "POST",
          headers: { "Content-type": "application/json" },
          body: JSON.stringify(resp)
        })
          .then(() => {
            // alert("kkkkkkkk")
          })
      }).catch((err) => {
        alert(err)
      })
  }

  useEffect(() => {
    fetch(" https://ecommerce-app-api-aqsm.onrender.com/e-commerce")
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        setData(resp)
      })
  }, [])



        // search Function
  const search = async (kk) => {
    kk.preventDefault()
    return await axios.get(`https://ecommerce-app-api-aqsm.onrender.com/e-commerce?q=${value}`)
      .then((g) => {
        setData(g.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }


        //  sorting Function
  const sorting = async (s) => {
    let value = s.target.value
    setSort(value)
    return await axios.get(`https://ecommerce-app-api-aqsm.onrender.com/e-commerce?_sort=${value}&_order=asc`)
      .then((res) => {
        setData(res.data)
      })
      .catch(() => {
        console.log("err")
      })
  }

  const change = (s) => {
    setValue(s.target.value)
  }

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


    signOut(auth)
      .then(() => {
        alert("logged out Successfully")
        navigate("/login")
      })
      .catch((err) => {
        alert("Error", err)
      })
  }
  

  // Current email showing
  function Aath(){
    const[user,setUser]=useState()
    useEffect(()=>{
      let l=onAuthStateChanged(auth,user=>setUser(user))
      return l
    },[] )
    return user
  }
  let current=Aath()


      //  cart Counting
  useEffect(() => {
    fetch("https://ecommerce-app-api-aqsm.onrender.com/cart-data")
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        setCount(resp)
      })
  })

  return (
    <div style={{backgroundColor:"white"}}>
      <nav className="navbar bg-dark  border-bottom border-body" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand"><img src="https://dogzkart.com/cdn/shop/files/logo.jpg?v=1652186935" alt="kk" style={{width:"130px",height:"50px"}}/></a>
          <a className="navbar-brand"><i className="fa-solid fa-house fa-beat fa-xl" style={{ color: "#26c0b5" }}/></a>
          <a className="navbar-brand">
            <Link to={"/cart"}>

              <i className="fa-solid fa-cart-shopping fa-shake fa-xl" style={{ color: "#26c0b5" }} />
              <span className="position-absolute top-10 start-40 translate-middle badge rounded-circle bg-danger">
                {count.length}
              </span>
            </Link>
          </a>

          <form className="d-flex" role="search" onSubmit={search}>
            <input className="form-control me-2" type="search" placeholder="Search" value={value} onChange={change} aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
          <button className="btn btn-outline-success" onClick={submitData} type="text">Log-Out</button>
          <p style={{color:"white",border:"1px solid white",borderRadius:"15px",padding:"3px"}}><i class="fa fa-user-circle-o" aria-hidden="true"></i> {current?.email}</p>
        </div>
      </nav>

      <h1 style={{ textAlign: "center"}}><b style={{color:"rgb(78, 66, 22)"}}>DOG's & CAT's FOR SALES</b></h1>

      <div className="d-flex w-100" style={{gap:"5%"}}>

        <div className="p-2" style={{ width: "400px" }}>

          <div className="card" style={{ width: "250px",backgroundColor:"rgb(241, 240, 240)" }}>
            <select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
            </select>

            <select className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>Open this select menu</option>
            </select>
          </div>
          <br /><br />

          <div className="p-2 card" style={{ width: "250px",backgroundColor:"rgb(241, 240, 240)" }}>
            <select value={sort} onChange={sorting} className="form-select form-select-lg mb-3" aria-label="Default select example">
              <option selected>-Default-</option>
              <option selected>name</option>
              <option selected>price</option>
              <option selected>Content</option>
            </select>
          </div>

        </div>




        <div className="row my-2">
          {mydata.map((item) => (

            <div className=" col-sm-3 mb-3 border-radius-xxl" >
              <div className="">

                <div className="card-body" style={{textAlign:"center"}}>
                  <img src={item.img} value={img} onChange={e => setImg(e.target.value)} className="mb-2" alt="kk" height="200px" width="100%"/><br/>
                  <h6 className="card-title" value={name} onChange={e => setName(e.target.value)}><b>Name: </b>{item.name}</h6><br/>
                  {/* <p className="card-text" value={content} onChange={e => setContent(e.target.value)}><b>Content: </b>{item.content}</p> */}
                  <h5 value={price} onChange={e => setPrice(e.target.value)}><b>Price: </b>{item.price}</h5>
                  <a href="#" className="btn btn-info" onClick={() => { senddata(item.id)}}>BUY NOW</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* main div */}




      <p style={{marginLeft:"45%"}}><Pages total={data.length} records={record} update={updatepage} prev={prev} next={next}/></p>

      <div className="card-group" style={{backgroundColor: "rgb(241, 240, 240)"}}>

        <div className="card" style={{backgroundColor:"rgb(241, 240, 240)"}}>
          <div className="card-body">
            <h2 className="card-title">PAGES</h2>
            <p className="card-text">About us</p>
            <p className="card-text">Our Experince</p>
            <p className="card-text">Dog's & Cat's</p>
            <p className="card-text">Shop</p>
          </div>
        </div>
        <div className="card" style={{backgroundColor:"rgb(241, 240, 240)"}}>
          <div className="card-body">
            <h2 className="card-title">Legal And Help</h2><br/>
            <p className="card-text">FAQs</p>
            <p className="card-text">Terms of Use</p>
            <p className="card-text">Privacy Policy</p>
          </div>
        </div>
        <div className="card" style={{backgroundColor:"rgb(241, 240, 240)"}}>
          <div className="card-body">
            <h2 className="card-title">Contact us</h2><br/>
            <p className="card-text"><i class="fa-solid fa-location-dot" style={{ color: "#439924" }} /> Address</p>
            <p className="card-text"><i class="fa-solid fa-phone" style={{ color: "#439924" }} /> Phone Number</p>
            <p className="card-text"><i class="fa-solid fa-envelope" style={{ color: "#439924" }} /> Mail Id</p>
          </div>
        </div>
        <div className="card"style={{backgroundColor:"rgb(241, 240, 240)"}}>
          <div className="card-body">
            <h2 className="card-title">Social Link</h2><br />
            <div style={{ display: "flex", gap: "10px" }}>
              <i className="fa-brands fa-facebook fa-2xl" style={{ color: "#1e64dc" }}></i>
              <i className="fa-brands fa-square-instagram fa-2xl" style={{ color: "#fb4b92" }}></i>
              <i className="fa-brands fa-square-twitter fa-2xl" style={{ color: "#1b69ee" }}></i>
              <i className="fa-brands fa-youtube fa-2xl" style={{ color: "#ea3110" }}></i>
            </div>
          </div>
        </div>
      </div>



    </div>
  )
}
export default Free;