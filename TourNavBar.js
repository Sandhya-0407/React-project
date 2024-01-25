import {Link,Outlet} from 'react-router-dom'


const TourNavBar =()=>{
    
return (
<div>
    <nav className='navbar navbar-expand-md 'style={{backgroundColor:'purple'}} data-bs-theme="dark" >
        <ul className='navbar-nav'style={{fontWeight:'bold',padding:'2px',marginLeft:'30px'}}>
            
            <li className='nav-item' style={{fontStyle:'italic',marginRight:30}}>
                <Link style={{color:'burlywood'}} className='nav-link active' to="/home">make your trip </Link>
                </li>




            <li className='nav-item' style={{marginRight:30}}>
                <Link className='nav-link ' to="/home">Home</Link>
                </li>

                <li className='nav-item' style={{marginRight:30}}>
                <Link className='nav-link ' to="/cards">Card</Link>
                </li>

                <li className='nav-item' style={{marginRight:30}}>
                <Link className='nav-link ' to="/pay">Pay</Link>
                </li>
                
            

            <li className='nav-item' style={{marginRight:30}}>
                <Link to="international"> International</Link>
            </li>

            <li className='nav-item' style={{marginRight:30}}>
                <Link to="national"> National</Link>
            </li>

            <li className='nav-item'style={{marginRight:30}}>
                <Link to="special"> Special</Link>
            </li>

            <li className='nav-item'style={{marginRight:40}}>
                <Link to="offer"> Offer</Link>
            </li>


            <li className='nav-item'style={{marginRight:30}} >
                <Link className='nav-link ' to="/visa">Visa</Link>
                </li>


                <li className='nav-item' style={{marginRight:30}}>
                <Link className='nav-link ' to="/contactus">Contact Us</Link>
                </li>

                <li className='nav-item' style={{marginRight:30}}>
                <Link className='nav-link ' to="/aboutus">About Us</Link>
                </li>



            <li className='nav-item'style={{marginRight:30}}>
                <Link className='nav-link ' to="/loginsignup">Login/SignUp</Link>
                </li>



        

        </ul>
        
    </nav>
    <Outlet/>
</div>


)


}
export default TourNavBar;