import React from 'react';
import logo2 from './Icons/logo 2.png';
import logo1 from './Icons/logo 1.png';
import logo3 from './Icons/logo3.png';
import tech2 from './Images/20191127_103021.jpg';
import tech1 from './Images/20191127_102858.jpg';
import com1 from './Images/com.1.jpg';
import com2 from './Images/com.2.jpg';
import com3 from './Images/com.3.jpg';
import nature from './Images/nature.JPG';
import { Footer } from './Contact.js'


const Services = () => {

    return(
    <React.Fragment>
        <ServiceContent />
        <Projects />
        <Footer />
    </React.Fragment>
    )
}

const ServiceContent = () => {

    return (
        <React.Fragment>
            <div class="container-fluid m-2 p-1 ml-lg-5" id="Services">
                <h1 class="mt-3 text-center">SERVICES</h1>
                <p class=" p-1 text-center" id="Far">Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia</p>

                <div class="jumbotron d-md-inline-block mb-3 p-2 mr-2" id="works">
                    <div class="container">
                        <div>
                            <p><img src={logo1} class="img-rounded text-center" /></p>
                        </div>
                        <h5 class="text-center">WEB DESIGN</h5>
                    </div>
                </div>

                <div class="jumbotron d-md-inline-block mb-3 p-2 mr-2" id="works">
                    <div class="container">
                        <div>
                            <img src={logo2} class="img-rounded pt-0 " />
                        </div>
                        <h5 class="text-center pt-lg-3">PHOTOGRAPY</h5>
                    </div>
                </div>

                <div class="jumbotron d-md-inline-block mb-3 p-2 mr-2" id="works">
                    <div class="container">
                        <div>
                            <p><img src={logo3} class="img-rounded text-center" /></p>
                        </div>
                        <h5 class="text-center">WEB DEVELOPER</h5>
                    </div>
                </div>
            </div>

        </React.Fragment>

    )
}

const Projects = () => {

    return (
        <React.Fragment>
            <div class=" container mb-3 p-0 m-lg-0 mr-lg-auto ml-lg-auto" id="Projects">
                <h1 class="p-0 m-0 mt-5 pb-3 text-center">OUR PROJECTS</h1>
                <p class="p-0 m-0 pb-4 text-center">Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia</p>
                <div class=" container d-lg-inline-block ">
                    <img class="img-rounded mb-2 mr-2" src={com1} alt="Error" />

                    <img class="img-rounded mb-2 mr-2" src={nature} alt="Error"/>
                
                    <img class="img-rounded mb-2 mr-2" src={com3} alt="Error"/>
                
                    <img class="img-rounded mb-2 mr-2" src={com2} alt="Error"/>
                
                    <img class="img-rounded mb-2 mr-2" src={tech1} alt="Error"/>
                
                    <img class="img-rounded mb-2 mr-2" src={tech2} alt="Error"/>
                </div>
            </div>
        
        </React.Fragment>
    )
}

export default Services;