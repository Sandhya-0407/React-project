import { BrowserRouter,Routes,Route} from 'react-router-dom'
import TourNavBar from './TourNavBar';
import Home from '../home/Home'
import Card from '../cards/Card'
import LoginSignUp from '../loginSignUp/LoginSignUp';
import Pay from '../pay/Pay'
import Visa from '../visa/Visa';
import ContactUs from '../contactUs/ContactUs'
import AboutUs from '../aboutUs/AboutUs'
import InternationalGallary from '../gallary/InternationalGallary';
import NationalGallary from '../gallary/NationalGallary';
import SpecialGallary from '../gallary/SpecialGallary';
import OffersGallary from '../gallary/OffersGallary';

const TourRouter = ()=>{
    return (
        <BrowserRouter>
        <Routes>
        
        <Route path='/' element={ <TourNavBar/> }>

        
            
        <Route path='international'element={ <InternationalGallary/>}/>
        <Route path='national'element={ <NationalGallary/>}/>
        <Route path='special' element={ <SpecialGallary/>}/>
        <Route path='offer' element={ <OffersGallary/>}/>

        <Route path='/home'element={ <Home/>}/>
        <Route path='/cards'element={ <Card/>}/>
        <Route path='/loginsignup' element={<LoginSignUp/>}/>
        <Route path='/pay' element={<Pay/>}/>
        <Route path='/visa' element={<Visa/>}/>
        <Route path='/contactus'element={<ContactUs/>}/>
        <Route path='/aboutus'element={<AboutUs/>}/>

            
            </Route>
        </Routes>
        </BrowserRouter>
    )
}
export default TourRouter;


