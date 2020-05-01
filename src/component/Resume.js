import React from 'react';
import { Footer } from './Contact.js'
const Resume = () => {
    
    return (
        <React.Fragment>
            <Myself />
            <Skill />
            <Qualification />
            <Footer />
        </React.Fragment>   
                         
    )
}
                

const Myself = () =>{
                    
    return (
                
        <div className="container-fluid mb-5 pb-5" id="body" >
            <img src="http://pluspng.com/img-png/png-men-men-png-495.png" alt="error" className="img-rounded" />
            <span>
                <div className="jumbotron mr-1 mb-0 " id="label1">
                    <div className="container">
                        <h1 className="text-center">RESUME</h1>
                        <p> <b>Name:</b> Godwill Onyewuchi </p>
                        <p><b >Date of Birth:</b> January 01, 1987 </p>
                        <p><b >Address:</b> Futo Owerri, Imo Nigeria </p>
                        <p><b >Zip Code:</b> 1234 </p>
                        <p><b >Email:</b> godwillonyewuchii@gmail.com </p>
                        <p><b >Phone:</b> +234-813-203-0908 </p>
                    </div>
                </div>
            </span>
        </div>
    )
}

const Skill = () => {
    
    return (
        
        <div className="container p-3"  id="skills">
            <h1 className="text-center">My Skills</h1>
            <p className="text-center">Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia</p>
            <div>

                <p>Photoshop 90%</p>
            </div>
            <div className="progress  ">
                <div className="progress-bar " role="progressbar" aria-valuenow="60"
                    aria-valuemin="0" aria-valuemax="100" style={{ width: "90%" }}>
                </div>
            </div>

            <p>jQuery 85%</p>
            <div className="progress">
                <div className="progress-bar " role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "85%" }}>
                </div>
            </div>

            <p>HTML5 95%</p>
            <div className="progress">
                <div className="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: "95%" }}>
                </div>
            </div>

            <p>CSS3 90%</p>
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: '90%' }}>
                </div>
            </div>

            <p>WordPress 70%</p>
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: '70%' } }>
                </div>
            </div>

            <p>SEO 80%</p>
            <div className="progress">
                <div className="progress-bar progress-bar-success" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style={{ width: '80%' }}>
                </div>
            </div>
        </div>
       
    )
}


const Qualification = () => {
    
    return (
        
        <div className="container-fluid pt-5" id="Resume">
            <h1 className="text-center p-1">QUALIFICATIONS</h1>
            <h2 className="text-center p-1">A small river named Duden flows by their place and
            supplies it with the necessary regalia. <br/>It is the paradisematic country,
            in which roasted part of sentences flow into your mouth </h2>

            <span className="ml-lg-5  ">
                <div className=" jumbotron mr-3 mt-2 d-md-inline-block" id="award">
                    <div className="container-fluid">
                        <p className="pt-4 pb-1 m-1">2014-2015</p>
                        <h3 className="p-1 m-1">Master Degree of Design</h3>
                        <h4 className="p-1 m-1">CAMBRIDGE UNIVERSITY</h4>
                        <h5 className="p-2 m-1">A smalll river named Duden flows by their place and supplies it with the necessary 
                        regalia.It is the paradisematic country, in which roasted part of sentences flow 
                        into your mouth.</h5>
                    </div>
                </div>
            </span>

            <span>
                <div className="jumbotron mr-3 mt-2 d-md-inline-block" id="award">
                    <div className="container-fluid" >
                        <p className="pt-4 pb-1 m-1">2014-2015</p>
                        <h3 className="p-1 m-1">Art  Creative Design</h3>
                        <h4 className="p-1 m-1">CAMBRIDGE UNIVERSITY</h4>
                        <h5 className="p-2 m-1">A smalll river named Duden flows by their place and
                        supplies it with the necessary regalia. It is the paradisematic country, 
                        in which roasted part of sentences flow into your mouth</h5>
                    </div>
                </div>
            </span>
            <span>

                <div className="jumbotron mr-3 mt-2 d-md-inline-block" id="award">
                    <div className="container-fluid">
                        <p className="pt-4 pb-1 m-1">2014-2015</p>
                        <h3 className="p-1 m-1">Bachelor Degree of CA</h3>
                        <h4 className="p-1 m-1">CAMBRIDGE UNIVERSITY</h4>
                        <h5 className="p-2 m-1">A smalll river named Duden flows by their place and supplies<br /> 
                        it with the necessary regalia. It is the paradisematic country, <br />
                        in which roasted part of sentences flow into your mouth</h5>
                    </div>
                </div>
            </span>

            <div className="btn btn-info  d-flex  mb-3 mt-0 pb-0 mr-auto ml-auto" id="CVbutton" >
                <p className="text-dark"><b>DOWNLOAD CV</b></p>

            </div>
        </div>
    )
}

export default Resume;