import React from 'react';

const Services = () => {

    return(
    <React.Fragment>
        <ServiceContent />
        <Projects />
    </React.Fragment>
    )
}

const ServiceContent = () => {

    return (
        <React.Fragment>
            <div class="container" id="Services">
                <h1>SERVICES</h1>
                <p>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia</p>
            </div>
            <div class="jumbotron" id="works">
                <div class="container">
                    <div>
                        <p><img src="/component/logo 2.png" class="img-rounded" alt="Error"/></p>
                    </div>

                    <h5>WEB DESIGN</h5>

                </div>
            </div>
            <div class="jumbotron" id="works">
                <div class="container">
                    <div>
                        <p><img src="/component/logo 1.png" class="img-rounded" alt="Error"/></p>
                    </div>

                    <h5>PHOTOGRAPY</h5>

                </div>
            </div>

            <div class="jumbotron" id="works">
                <div class="container">
                    <div>
                        <p><img src="/component/logo 3.png" class="img-rounded" alt="Error"/></p>
                    </div>

                    <h5>WEB DEVELOPER</h5>

                </div>
            </div>

        </React.Fragment>

    )
}

const Projects = () => {

    return (
        <React.Fragment>
            <div class="container" id="Projects">
                <h1>OUR PROJECTS</h1>
                <p>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia</p>
                <div className="container">
                    <img class="img-rounded" src="/component/com.1.jpg" alt="Error"/>
                </div>
                <div className="container">
                    <img class="img-rounded" src="/component/nature.JPG" alt="Error"/>
                </div>
                <div className="container">
                    <img class="img-rounded" src="/component/com.3.jpg" alt="Error"/>
                </div>
                <div className="container">
                    <img class="img-rounded" src="/component/com.2.jpg" alt="Error"/>
                </div>
                <div className="container">
                    <img class="img-rounded" src="/component/20191127_102858.jpg" alt="Error"/>
                </div>
                <div className="container">
                    <img class="img-rounded" src="/component/20191127_103021.jpg" alt="Error"/>
                </div>
                
            
                </div>

           


        </React.Fragment>
    )
}

export default Services;