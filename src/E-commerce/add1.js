

import App from "./signup";
import Login from "./login";
import Free from "./comercess.js"
import Cart from "./cart.js";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
// import Main from "./signout";
function Kouter(){
    return(
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<App/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path="/main" element={<Free/>}/>
                    <Route path="/cart" element={<Cart/>}/>
                </Routes>
            </Router>

        </div>
    )
}
export default Kouter;