import { useState } from 'react';
import './ContactUs.css'
function Contact() {

    const [profile,setProfile] = useState({
        name:'',
        emailId:"",
        message:""
    })
    

    const [isSubmitted,setIsSubmitted] = useState(false)
    
    
    const handleNameChange = (event)=>{
    setProfile({...profile,name:event.target.value})
    
    }
    
    const handleEmailIdChange = e=>{
        setProfile({...profile,emailId:e.target.value})
    }
    const handleMessageChange = e=>{
        setProfile({...profile,message:e.target.value})
    }


    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form submitted")
        setIsSubmitted(true)
    }


    return (

        <> 
        <div className='contact-page'>
        

        { !isSubmitted && <div className="container  p-3 rounded">
            <h1 style={{textAlign:'center'}}>Our Helpline Number</h1>
            <p style={{fontSize:'larger',textAlign:'center'}}>120 120 1200</p>
    <h2 className="text-center" style={{fontStyle:'italic',color:'purple'}}>Contact Us</h2>
    <form style={{textAlign:'center'}} action="#" onSubmit={handleSubmit}>


        <div className="mb-3">
                <input className="input" value={profile.name} onChange={handleNameChange}    placeholder=" Name"   required/>
        </div>


        <div className="mb-3">
                <input className="input" type="email" value={profile.emailId} onChange={handleEmailIdChange} placeholder="Email" required />
        </div>

        <div className="mb-3" >
                <input className="box"style={{width:480,height:200}} type="text" value={profile.message} onChange={handleMessageChange} placeholder="Message" required />
        </div>



        <input  className="btn btn-outline-light" type="Submit"/>
        <button style={{textAlign:'center'}} className="btn btn-outline-light ms-3" type="reset" onClick={()=>setProfile({name:"",emailId:"",message:""})  }>Reset</button>
    </form>
</div> }


</div>



        </>
    )
}

export default Contact;









