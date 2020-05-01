import React from 'react'
import { Footer } from './Contact.js'

const Home = () => {
    
    // let counter = 0;
    // let MainText = "Greenfonts a <br/> Free-lance Developer, <br> U Think it, <br> We Develop it"
    // let holder = '';
    // function DisplayText() {
        
    //     if (holder != MainText) {
    //         holder += MainText[counter]
    //         document.getElementById("jumbo-text").innerHTML = holder
    //         counter++
    //         console.log(holder)
    //     }
    //     else {
    //         holder = ""
    //         counter = 0
    //     }
    // }

    // setInterval(() => {
    //     DisplayText()
    // }, 200);
    
    return (
        <React.Fragment>
            <div className="container " id="body">
                <img src="http://pluspng.com/img-png/png-men-men-png-495.png" alt="error"
                    className="img-rounded" id="img" />
                    <span>
                    <div className="container" id="label">
                        <div className="jumbotron " >
                            <div className="container-fluid">
                                <h1 className="display-2 text-center-lg" id="jumbo-text">Greenfonts a <br /> Free-lance Developer,
                                <br/> U Think it, <br/> We Develop it</h1>

                            </div>
                        </div>

                        <div className="container d-flex  ml-0 pt-lg-0 mt-lg-0">
                            <button className="btn btn-info inline-lg mr-3">Hire Me</button>
                            <button className="btn btn-info  text-light" >
                                <a href="./resume.html " class="text-light"> Resume</a> </button>
                        </div>
                        </div>
                </span>
            </div>
            <Footer />
        </React.Fragment>
        
    )
}

export default Home;