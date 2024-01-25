import { useState } from "react";
import './Pay.css'



const Payment = () => {
    const [action, setAction] = useState("Debit /Credit Card");


    const [profile, setProfile,] = useState({
        cardno: '',
        card: '',
        cvv: '',
        amount: ''
    })

    
    const [isPay, setIsPay] = useState(false)


    const [isPrinted, setIsPrinted] = useState(true)

    const handleCardNoChange = (e) => {
        setProfile({ ...profile, cardno: e.target.value })
    }
    const handleCvvChange = (e) => {
        setProfile({ ...profile, cvv: e.target.value })
    }
    const handleCardChange = (e) => {
        setProfile({ ...profile, card: e.target.value })
    }
    const handleAmountChange = (e) => {
        setProfile({ ...profile, amount: e.target.value })
    }



    const handlePay = (e) => {
        e.preventDefault();
        alert("payment Successful")
        setIsPay(true)
    }



    const handlePrint = (e) => {
        e.preventDefault();
        alert("Your Details print")
        setIsPrinted(true)
    }

    return (
    
        <div className="bg">
            <div className="container-1">
                <div className="header-1">
                    <div style={{ fontStyle: 'italic', color: 'black', }}> <h1> Payment Method</h1>
                    </div>
                    <div style={{color:'black'}} className="text-1"> {action} </div>
                </div>




                <div className="submit-container-1">
                    <div className={action === "Debit/Credit Card" ? "submit gray" : "submit"} onClick={() => { setAction('Net Banking') }} > Net Banking</div>
                    <div className={action === "Net Banking" ? "submit gray" : "submit"} onClick={() => { setAction('Debit/Credit Card') }}  >Debit/Credit Card </div>

                </div>   


                {!isPay && <div>
                    <form action="#" onSubmit={handlePay}>
                        <form action="#" onClick={handlePrint} />



                        <div className="inputs-1">


                            {action === "Net Banking" ? <div></div> :
                                <div className="input">
                                    <input type="tel" value={profile.cardno} onChange={handleCardNoChange} required placeholder="Card No"/>
                                </div>}



                            {action === "Net Banking" ? <div></div> :
                                <div className="input">
                                    <input type="card expiry" value={profile.card} onChange={handleCardChange} required placeholder=" Card Expiry" pattern="" />
                                </div>}


                            {action === "Net Banking" ? <div></div> :
                                <div className="input">
                                    <input type="number" value={profile.cvv} onChange={handleCvvChange} placeholder="CVV" required pattern="{3}" />
                                </div>}


                            {action === "Debit/Credit Card" ? <div></div> :
                                <div className="input-2 ">
                                    PhonePay: <input style={{ marginRight: '65px', marginLeft: '30px' }} type="radio" required name="A" />
                                    GooglePay:<input style={{ marginLeft: '30px'}} type="radio" required name="A" />
                                </div>}




                            <div className="input">
                                <input type="number" value={profile.amount} onChange={handleAmountChange} required placeholder="Amount" />
                            </div>



                            <div>
                                <input className="ms-5 " type="checkbox" required />
                                <label className="ms-3"> <h4>  I agree to term and condition </h4> </label>
                            </div>


                        </div>

                        <button className="btn btn-primary mt-3 ms-5"> Pay </button>
                        <button className="btn btn-primary ms-5 mt-3" type="reset" onClick={() => setProfile({ cardno: "", card: "", cvv: "", amount: "" })}>Reset</button>

                        <button className="btn btn-primary ms-5 mt-3" onClick={() => {
                            setIsPay(false);
                            setProfile({ cardno: "", card: "", cvv: "", amount: "" })
                        }}>Back to Home</button>
                    </form>
                </div>}

                {isPay && <div className="border border-2 border-blue rounded-3 p-3 mt-3  " style={{ background: 'lightgrey', textAlign: 'center', }}>
                    <h1>CONGRATULATION !! </h1>
                    <h3>Payment Successful ....</h3>


                    <button className="btn btn-success" onClick={() => {
                        setIsPay(false);
                        setProfile({ cardno: "", card: "", cvv: "", amount: "" })
                    }}>Back to Form</button>


                    <button className='btn btn-success m-2 p-2' onClick={() => {
                        setIsPrinted(true);

                    }}  >Print  </button>

                </div>}



            </div>
        </div>
    )
}
export default Payment;





