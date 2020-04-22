import React from 'react';

function Resume() {
    
    return (
        <div>
            <Myself />
            <Skill />
            <Qualification />
        </div>   
                         
    )
}
                

function Myself(){
                    
    return (
                
        <div className="container" id="body" >
            <img src="http://pluspng.com/img-png/png-men-men-png-495.png" alt="error" class="img-rounded" />
            <span>
                <div class="jumbotron" id="label1">
                    <div class="container">
                        <h1>RESUME</h1>
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

function Skill() {
    
    return (
        
        <div class="container-fluid"  id="skills">
            <h1>My Skills</h1>
            <h6>Far far away, behind the word mountains,
            far from the countries Vokalia and Consonantia</h6>
            <div>

                <p>Photoshop 90%</p>
            </div>
            {/* <div class="progress progress-striped">
                <div class="progress-bar progress-bar-info" role="progressbar"
                    aria-valuenow="60" aria-valuemin="0" aria-valuemax="100" style="width: 90%;">
                </div>
            </div>

            <p>jQuery 85%</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 85%;">
                </div>
            </div>

            <p>HTML5 95%</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 95%;">
                </div>
            </div>

            <p>CSS3 90%</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 90%;">
                </div>
            </div>

            <p>WordPress 70%</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 70%;">
                </div>
            </div>

            <p>SEO 80%</p>
            <div class="progress">
                <div class="progress-bar" role="progressbar" aria-valuenow="60" aria-valuemin="0"
                    aria-valuemax="100" style="width: 80%;">
                </div> */}
            </div>
       
    )
}


function Qualification() {
    
    return (
        
        <div class="container-fluid" id="Resume">
            <h1>QUALIFICATIONS</h1>
            <h2>A small river named Duden flows by their place and
            supplies it with the necessary regalia. It is the paradisematic <br />country,
            in which roasted part of sentences flow into your mouth </h2>

            <span>
                <div class="jumbotron" id="award">
                    <div class="container">
                        <p>2014-2015</p>
                        <h3>Master Degree of Design</h3>
                        <h4>CAMBRIDGE UNIVERSITY</h4>
                        <h5>A smalll river named Duden flows by their place and supplies it with the necessary 
                        regalia.It is the paradisematic country, in which roasted part of sentences flow 
                        into your mouth.</h5>
                    </div>
                </div>
            </span>

            <span>
                <div class="jumbotron" id="award">
                    <div class="container" >
                        <p>2014-2015</p>
                        <h3>Art  Creative Design</h3>
                        <h4>CAMBRIDGE UNIVERSITY</h4>
                        <h5>A smalll river named Duden flows by their place and
                        supplies it with the necessary regalia. It is the paradisematic country, 
                        in which roasted part of sentences flow into your mouth</h5>
                    </div>
                </div>
            </span>
            <span>

                <div class="jumbotron" id="award">
                    <div class="container">
                        <p>2014-2015</p>
                        <h3>Bachelor Degree of CA</h3>
                        <h4>CAMBRIDGE UNIVERSITY</h4>
                        <h5>A smalll river named Duden flows by their place and supplies<br /> 
                        it with the necessary regalia. It is the paradisematic country, <br />
                        in which roasted part of sentences flow into your mouth</h5>
                    </div>
                </div>
            </span>

            <div class="btn btn-defualt" id="CVbutton" >
                <p ><b>DOWNLOAD CV</b></p>
            </div>
        </div>
    )
}

export default Resume;