import React from 'react'
import Footer from './Footer'
import img from './rahul.jpg'
function Contact() {
    return (

        <div className='container my-5'>

            <div className="row">

                <div className="col-sm-6" style={{ marginTop: '130px', fontFamily: "cursive" }}>
                    <h2 style={{ textAlign: 'center' }}>Lets talk about everything!</h2>
                    <img className="rounded-circle mx-auto d-block" style={{ textItem: 'center', height: "211px", width: "211px" }} src={img} />
                    <h4 style={{ textAlign: "center" }}>Fell Free to ask us anything!</h4>
                    <p>Have doubt or suggestion to make? Feel free to ask anything. If you have any suggestions, please let me know. Your suggestions are highly appreciated. I appreciate your time and try hard to reply to every single message posted here! Keep dropping your priceless opinions.</p>

                    <h3 style={{ textAlign: "center", fontFamily: "cursive" }}><i>Great Work</i></h3>
                </div>

                <div className="col-sm-6" style={{ marginTop: '130px', fontFamily: "cursive" }}>
                    <b>
                        <label for="fullName" className="form-label my-3">FULL NAME</label>
                        <input type="text" className="form-control" id="FullName" placeholder="" value="" required="" />
                        <div className="invalid-feedback">
                            Valid first name is required.
                        </div>

                        <label for="PHONE NUMBER" className="form-label my-3">Phone Number</label>
                        <input type="text" className="form-control" id="Phone Number" placeholder="" value="" required="" />
                        <div className="invalid-feedback">
                            Valid PHONE NUMBER is required.
                        </div>

                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label my-3">MEASSAGE</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button className="w-100 btn btn-primary btn-lg" type="submit">SEND MESSAGE</button>
                    </b>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Contact