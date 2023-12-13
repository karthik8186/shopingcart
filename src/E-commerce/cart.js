import { useState, useEffect } from "react"
import { Link, } from "react-router-dom"


function Cart() {

  const [data, setData] = useState([])
  const [total,setTotal]=useState(0)

  useEffect(() => {
    fetch("https://ecommerce-app-api-aqsm.onrender.com/cart-data")
      .then((res) => {
        return res.json()
      })
      .then((resp) => {
        setData(resp)

        const total=resp.reduce((acc,item)=>acc+parseFloat(item.price),0)
        setTotal(total)

      })
  }, [])

  const deletcart = (id) => {
    fetch("https://ecommerce-app-api-aqsm.onrender.com/cart-data/" + id, {
      method: "DELETE"
    })
      .then(() => {
        alert("deleted")
        window.location.reload()
      })
      .catch(() => {
        alert("error")
      })
  }

  return (
    <div>

      <nav className="navbar bg-light border-bottom border-body" data-bs-theme="dark">
          <Link to={"/main"}><button className="btn bg-success">BACK</button></Link>
      </nav>


      <table className="table">
        <thead>
          <tr>
            <th scope="col">S.no</th>
            <th scope="col">img</th>
            <th scope="col">name</th>
            <th scope="col">content</th>
            <th scope="col">price</th>
          </tr>
        </thead>
        <tbody class="table-group-divider">

          {data.map((item) => (
            <tr>  
              <th scope="row">{item.id}</th>
              <td><img src={item.img} alt="k" height="60px" width="50%"/></td>
              <td>{item.name}</td>
              <td>{item.content}</td>
              <td>{item.price}</td>
              <button className="btn bg-danger" onClick={()=>{deletcart(item.id)}}>Remove</button>
            </tr>
          ))}
        </tbody>
      </table>

      <p className="h4" style={{ marginLeft:"67%",width:"300px",padding:"5px"}}> Total Cart Price:<i class="fa-solid fa-indian-rupee-sign" style={{color: "#000000;"}}></i>{total}</p>
    </div>
    
  )
}
export default Cart;


