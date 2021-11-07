
import  './Header.css'
const Headers = () =>{
    return (
        
            <div className="header">
               <ul className="title">
                   <li >
                        <a>Home</a>
                   </li>
                   <li>
                        <a>Store</a>
                   </li>
                   <li>
                        <a>About</a>
                   </li>
                   <a className="cart-holder">"cart"
                       <span className="cart-num">0</span>
                   </a>
               </ul>
               <h1>The Generics</h1>
            </div>
        
               
            
       

    )
}
     
export default Headers;