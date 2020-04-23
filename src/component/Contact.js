import React from 'react';

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
            <div class="container" id="maincon">
                <div>
                    <img src="http://pluspng.com/img-png/png-men-men-png-495.png" class="img-rounded" alt="Error" id="header_img" />
                </div>
               
                <div role="form" id="money">
                    <div class="form-group">
                        <label for="name">Name:</label>
                        <input type="text" placeholder="Enter name" id="Name1"   onchange = { handleChange  }
                            class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="Email">Email:</label>
                        <input type="text" placeholder="Enter Email" id="Email"  onchange={handleChange}
                            class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="Subject">Phone Number</label>
                        <input type="tel" placeholder=" Subject..." id="tel"  onchange={handleChange}
                            class="form-control" />
                    </div>
                    <div class="form-group">
                        <label for="Textarea">Message:</label>
                        <textarea placeholder=" Message..." id="message"  onchange={handleChange}
                            class="form-control" rows="4"></textarea>
                    </div>
                        <button type="submit" class="btn btn-default bg-info" id="whatsappbtn">
                        Sumbit
                   </button>
                </div>
            </div>
        </React.Fragment>
    )
}

const Contactways = () => {

    return (
        <React.Fragment>
            <div class="container" id="Contact">
                <div class="container" id="Contactways">
                    <h1>CONTACT US</h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                    <div class="jumbotron" id="ContactLines">
                        <div class="container">
                            <a href="#"><img class="img-rounded" src="/src/component/com.2.jpg" alt="Error"/></a>
                            <p>ADDRESS:<br/> 198 West 21th Street, Suite <br/> 712 New York NY
                            10016</p>
                        </div>
                    </div>
                    <div class="jumbotron" id="ContactLines">
                        <div class="container">
                            <a href="#"><img class="img-rounded" src="/src/component/icon5.png" alt="Error"/></a>
                            <p><b>CONTACT NUMBER</b><br /> +1235 2355 98</p>
                        </div>
                    </div>
                    <div class="jumbotron" id="ContactLines">
                        <div class="container">
                            <a href="godwillonyewuchii@gmail.com"><img class="img-rounded"
                                src="/src/component/icon6.png" alt="Error" /></a>
                            <p><b>EMAIL ADDRESS</b> <br /> godwillonyewuchii@gmail.com</p>
                        </div>
                    </div>
                    <div class="jumbotron" id="ContactLines">
                        <div class="container">
                            <a href="#"><img class="img-rounded" src="/src/component/icon7.png" alt="Error" /></a>
                            <p><b>WEBSITE</b> <br /> yoursite.com</p>
                        </div>
                    </div>
                </div>
                <div class="container" id="part_3">
                    <div class="container">
                        <h3>About</h3>
                        <p>Far far away, behind the word mountains,<br/>                                                            far from the countries Vokalia and
                        Consonantia, there lived the blind texts</p>
                    </div>
                    <div class="Container">
                        <h3>Services</h3>
                        <p>+ Web Design</p>
                        <p>+ Web Development</p>
                        <p>+ Business Strategy</p>
                        <p>+ Data Analysis</p>
                        <p>+ Graphic Design</p>
                    </div>
                    <div class="Container">
                        <h3>Have a Question?</h3>
                        <br />
                        <p>+203 Fake St.Mountain view,</p>
                        <p> San Francisco, California,USA. </p>
                        <p>+ 2 392 3929 210</p>
                        <p>+ info@yourdomain.com</p>
                    </div>
                </div>
                <div class="container" id="Icons">
                    <a href="https//www.twitter.com" target="blank">
                        <img class="img-rounded" src="/src/component/twitter.png" alt="Error"/></a>
                    <a href="https//www.facebook.com" target="blank">
                        <img class="img-rounded" src="/src/component/facebook.png" alt="Error"/></a>
                    <a href="https//www.instagram.com" target="blank">
                        <img class="img-rounded" src="/src/component/instagram.png" alt="Error"/></a>
            </div>
        </div>
            
        </React.Fragment>
    )
}

const Footer = () => {

    return (
        <footer class="container">
            <p>Copyright @2019 All rights reserved|This template is made by Greenfonts</p>
        </footer>  
    )
}

export default Contact;
    