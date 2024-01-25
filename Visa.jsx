import { useState } from 'react';
import './Visa.css'
function Visa() {

    const [profile,setProfile] = useState({
        name:'',
        age:'',
        mobileNo:'',
        emailId:""
    })
    

    const [isSubmitted,setIsSubmitted] = useState(false)
    
    
    const handleNameChange = (event)=>{
    setProfile({...profile,name:event.target.value})
    
    }
    const handleAgeChange = (event)=>{
    setProfile({...profile,age:event.target.value})                                     
    }
    const handleMobileNoChange = (e)=>{
        setProfile({...profile,mobileNo:e.target.value})
    }
    const handleEmailIdChange = e=>{
        setProfile({...profile,emailId:e.target.value})
    }
    


    const handleSubmit = (e)=>{
        e.preventDefault();
        alert("Form submitted")
        setIsSubmitted(true)
    }


    return (

        <> 
        <div className='visa-page'>
        
            <div >
                <h1 style={{ fontStyle: 'italic', fontSize: 'bold', textAlign: 'center',color:'blue'}}>Visa</h1>

                <div className='header-0'>
                    <div className='visa-col'> 
                    <li style={{ marginTop: 40, textAlign: 'left', marginLeft: 65 }}> Tourist visa</li>

                    <p style={{ textAlign: 'left', marginLeft: 65, width: 400 }}> A tourist visa is given to the visitor who need to fill Electronic Travel Authorization ( ETA) to the people who want to visit any country for tourism purposes. The tourist visa can be obtained prior to arrive from the airport  </p>
                </div>
                
                <div className='visa-col'> 
                <div style={{textAlign:"left",marginLeft:65}}>
                    <h2>Documents Required For Visa</h2>
                </div>
                            <div style={{textAlign:"left",marginLeft:65}}>
                                <li> Passport</li>
                                <li> Validity - Six month</li>
                                <li> A photocopy of duly filed visa application form</li>
                                <li> Two color photocopys</li>
                                <li> Covering letter from the application stating the purpose and duration and duration of the visit</li>
                                <li> Original confirmed return/onward air ticket</li>
                                <li> Proof of hotel reservation</li>
                                <li> Original and photocopy of Investment document</li>
                            </div>
                            </div>
                            </div>


            </div>
        
        

        { !isSubmitted && <div className="container  p-3 rounded">
    <h2 className="text-center" style={{fontStyle:'italic',color:'purple'}}>Visa Form</h2>
    <form style={{textAlign:'center'}} action="#" onSubmit={handleSubmit}>
        <div className="mb-3">
                <input className="input" value={profile.name} onChange={handleNameChange}    placeholder="Full Name"     required/>
            
            
        </div>
        <div className="mb-3">
                <input className="input" type="number" value={profile.age} onChange={handleAgeChange} placeholder="Age" required min="18" max="60" />
            
            
        </div>

        <div className="mb-3">
                <input className="input" type="tel" value={profile.mobileNo} onChange={handleMobileNoChange} placeholder="Mobile No" required pattern="[0-9][10}" maxLength={10}/>
            
            
        </div>

        <div className="mb-3">
                <input className="input" type="email" value={profile.emailId} onChange={handleEmailIdChange} placeholder="Email Id" required />
            
            
        </div>


        <input className="btn btn-outline-light ms-5" type="Submit"/>
        <button className="btn btn-outline-light ms-5 " type="reset" onClick={()=>setProfile({name:"",age:'',mobileNo:'',emailId:""})  }>Reset</button>
    </form>
</div> }

{ isSubmitted && <div className="border border-2 border-success rounded-3 p-3 m-2">                                                  
<h1 style={{color:'steelblue',fontStyle:'italic'}}>Application Successful !!</h1>
    <h2>Your Details</h2>
    <h4>Full Name: {profile.name}</h4>
    <h4>Age: {profile.age}</h4>
    <h5>Mobile No: {profile.mobileNo}</h5>
    <h5>Email Id: {profile.emailId}</h5>
    
    <button className="btn btn-success" onClick={()=>{
        setIsSubmitted(false) ; 
        setProfile({name:"",age:'',mobileNo:'',emailId:""})
    }}>Back to Form</button>
</div> }

</div>










        </>
    )
}

export default Visa;









