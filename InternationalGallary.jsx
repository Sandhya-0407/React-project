
import internationaltour from "../data/international/internationalData"
import { useState } from "react"


const InternationalGallary = () => {

    const [selectedTour, setSelectedTour] = useState(null)


    const toggleDetails = (tour) => {
        setSelectedTour((prevTour) => (prevTour === tour ? null : tour))
    }

    return (


        <div className="container " style={{ width: '920px' }}>
            <h2 className="fw-bold mt-2">International Tour:</h2>
            {internationaltour.map((intour, i) => (<div key={i} className=" my-3 rounded-1 " style={{ border: '1px solid black' }}>
                <div className="d-flex">
                    <div >
                        <div ><img style={{ height: '225px', width: '320px'}} className="img-thumbnail " src={intour.image} alt="" /></div>

                    </div>

                    <div style={{backgroundColor:"lightgray",width:'600px'}} className="mx-4 my-4 ">
                        <h3 className="fw-bold">{intour.model}</h3>
                        <h3 style={{fontStyle:'italic'}}>{intour.place} </h3>
                        <h4>Price: &#8377; {intour.price}</h4>
                        

                        <button className="btn btn-success mt-2 " onClick={() => toggleDetails(intour)} >{selectedTour === intour ? "Hide Details" : "View Details"}</button>


                    </div>
                </div>
                {selectedTour === intour && (
                    <div className="tour-details" >
                        <h4 className="fw-bold m-1">  Details:</h4>

                        <table className="table table-success">
                            <tbody>

                            <tr>
                                    <th>Stay</th>
                                    <td>{selectedTour.specification.stay}</td>
                                </tr>
                                <tr>
                                    <th>Duration</th>
                                    <td>{selectedTour.specification.duration}</td>
                                </tr>
                            
                                <tr>
                                    <th>Destination</th>
                                    <td>{selectedTour.specification.destination}</td>
                                </tr>
                                
                                <tr>
                                    <th>High lights</th>
                                    <td>{selectedTour.specification.high_light}</td>
                                </tr>
                            </tbody>
                        </table>
                        <button className="btn btn-success mt-2 " >Book Now</button>
                    </div>)}
            </div>

            ))}



        </div>



    )
}


export default InternationalGallary;