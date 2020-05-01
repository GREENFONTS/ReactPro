import React from 'react';
import Icon5 from './Icons/icon5.png';
import Icon6 from './Icons/icon6.png';
import Icon4 from './Icons/icon4.png';
import Icon7 from './Icons/icon7.png';
import Twitter from './Icons/twitter.png';
import Facebook from './Icons/facebook.png';
import Instagram from './Icons/instagram.png';

const Contact = () => {
    
    
     
    return (
        <React.Fragment>
            <Form />
            < Contactways />
            <Footer />
        </React.Fragment>
    )
}

const Form = () => {
    let name = document.getElementById("Name1")
    let email = document.getElementById("Email")
    let tel = document.getElementById("tel")
    let message = document.getElementById("message")

    let MessageSend = {
        Name: name,
        Email: email,
        Tel: tel,
        Message: message
    }
   

    function handleChange() {
        MessageSend.Name = name.value
        MessageSend.Email = email.value
        MessageSend.Tel = tel.value
        MessageSend.Message = message.value
    }
    return (
        <React.Fragment>
            <div className="container-fluid m-0 p-0 mr-lg-auto ml-lg-auto" id="maincon">
                <div className="container-fluid mb-lg-5 mr-lg-auto ml-lg-auto" id="maincon">
                    <div className="p-3 mt-1 d-lg-inline-flex mr-lg-2 ml-lg-2 p-lg-1" id="contactimg">
                        <img src="http://pluspng.com/img-png/png-men-men-png-495.png"
                            className="img-rounded " id="img" />
                    </div>
               
                    <div role="form" id="money" className="d-lg-inline-block ml-lg-4 p-lg-3">
                    <div className="form-group d-block">
                        <label for="name">Name:</label>
                        <input type="text" placeholder="Enter name" id="Name1"   onChange = { handleChange  }
                            className="form-control" />
                    </div>
                    <div className="form-group d-block">
                        <label for="Email">Email:</label>
                        <input type="text" placeholder="Enter Email" id="Email"  onChange={handleChange}
                            className="form-control" />
                    </div>
                    <div className="form-group d-block">
                        <label for="Subject">Phone Number</label>
                        <input type="tel" placeholder=" Subject..." id="tel"  onChange={handleChange}
                            className="form-control" />
                    </div>
                    <div className="form-group d-block">
                        <label for="Textarea">Message:</label>
                        <textarea placeholder=" Message..." id="message"  onChange={handleChange}
                            className="form-control" rows="4"></textarea>
                    </div>
                        <button type="submit" className="btn btn-default bg-info" id="whatsappbtn">
                        Sumbit
                   </button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const Contactways = () => {

    return (
        <React.Fragment>
            <div className="container" id="Contact">
                <div className="container mt-3 p-1 mt-lg-5 pt-lg-5 mr-auto ml-auto mb-lg-5" id="Contactways">
                    <h1 className="text-center p-2">CONTACT US</h1>
                    <p className="text-center p-2">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                   
                    <div className="jumbotron p-1 m-1 mb-2 d-lg-inline-block" id="ContactLines">
                        <div className="container">
                            <a href="#"><img className="img-rounded p-1 m-1" src={Icon4} alt="Error"/></a>
                            <p className="p-0 m-0">ADDRESS:</p>
                            <p className="p-0 m-0">198 West 21th Street, Suite</p> <p> 712 New York NY
                            10016</p>
                        </div>
                    </div>
                    
                    <div className="jumbotron p-1 m-1 mb-2 d-lg-inline-block" id="ContactLines">
                        <div className="container">
                            <a href="#"><img className="img-rounded p-1 m-1" src={Icon5} alt="Error"/></a>
                            <p className="p-0 m-0"><b>CONTACT NUMBER</b></p>
                            <br />
                            <p className="p-0 m-0"> +1235 2355 98</p>
                        </div>
                    </div>
                    
                    <div className="jumbotron p-1 m-1 mb-2 d-lg-inline-block" id="ContactLines">
                        <div className="container">
                            <a href="godwillonyewuchii@gmail.com"><img className="img-rounded p-1 m-1"
                                src={Icon6} alt="Error" /></a>
                            <p className="p-0 m-0"><b>EMAIL ADDRESS</b></p>
                            <br />
                            <p className="p-0 m-0">godwillonyewuchii@gmail.com</p>
                        </div>
                    </div>
                    
                    <div className="jumbotron p-1 m-1 mb-2 d-lg-inline-block" id="ContactLines">
                        <div className="container">
                            <a href="#"><img className="img-rounded p-1 m-1" src={Icon7} alt="Error" /></a>
                            <p className="p-0 m-0"><b>WEBSITE</b></p>
                            <br />
                            <p className="p-0 m-0">oursite.com</p>

                        </div>
                    </div>
                </div>
                <div className="container mr-auto ml-auto" id="part_3">
                    <div className="container p-2 m-0 p-lg-1 d-lg-inline-block mr-lg-4">
                        <h3 className="text-center pt-1 ml-lg-2">About</h3>
                        <p className="p-0 ml-lg-2">Far far away, behind the word mountains,<br/>
                            far from the countries Vokalia and
                        Consonantia, there lived the blind texts</p>
                    </div>
                    <div className="Container d-lg-inline-block p-lg-1 mr-lg-4">
                        <h3 className="text-center pt-1">Services</h3>
                        <p className="ml-2 mb-0">+ Web Design</p>
                        <p className="ml-2 mb-0">+ Web Development</p>
                        <p className="ml-2 mb-0">+ Business Strategy</p>
                        <p className="ml-2 mb-0">+ Data Analysis</p>
                        <p className="ml-2 mb-0">+ Graphic Design</p>
                    </div>
                    <div className="Container pt-3 d-lg-inline-block p-lg-1 m-lg-2 mb-lg-0 pt-lg-1 mr-lg-3">
                        <h3 className="text-center">Have a Question?</h3>
                        <p className="ml-2 mb-1 p-lg-1 m-lg-1">+203 Fake St.Mountain view,</p>

                        <p className="ml-2 mb-1 p-lg-1 m-lg-0"> San Francisco, California,USA. </p>
                        <p className="ml-2 mb-1 p-lg-1 m-lg-0">+ 2 392 3929 210</p>
                        <p className="ml-2 mb-1 p-lg-1 m-lg-0">+ info@yourdomain.com</p>

                    </div>
                </div>
                <div className="container mb-3 mt-lg-0" id="Icons">
                    <a href="https//www.twitter.com" target="blank">
                        <img className="img-rounded mr-4 mt-3 mr-lg-5" src={Twitter} alt="Error"/></a>
                    <a href="https//www.facebook.com" target="blank">
                        <img className="img-rounded mr-4 ~mt-3 mr-lg-5" src={Facebook} alt="Error"/></a>
                    <a href="https//www.instagram.com" target="blank">
                        <img className="img-rounded mr-4 mt-3 mr-lg-5" src={Instagram} alt="Error"/></a>
            </div>
        </div>
            
        </React.Fragment>
    )
}

 export const Footer = () => {

    return (
        <footer className="container-fluid bg-info mt-5 mb-0 p-1">
            <p className="text-center">Copyright @2019 All rights reserved|This template is made by Greenfonts</p>
        </footer>  
    )
}

export default Contact;
    