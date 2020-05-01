import React from 'react';
import com1 from './Images/com.1.jpg';
import tech2 from './Images/20191127_103021.jpg';
import tech3 from './Images/20191127_103012.jpg';
import Download from './Images/download.jpg';
import { Footer } from './Contact.js'

const Blog = () => {

    return (
        <React.Fragment>
            <BlogContent />
            <HirePlacement />
            <Footer />
        </React.Fragment>                                  
    )
}
     
const BlogContent = () => {

    return (
        <React.Fragment>
            <div class="container mb-lg-4" id="blog">
                <h1 className="mt-3 justify-content-center text-center">OUR BLOG</h1>
                <p class="text-center">Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia</p>

                <div class="jumbotron m-0 pb-2 mb-3 d-md-inline-block mr-lg-2 p-lg-0" id="blogpic">
                    <div class="container-fluid">
                        <img src={com1} class="img-rounded m-2 mb-3 mb-lg-0" alt="Error" />
                        <h5 class="mt-2 mb-lg-2"><b><strong>June 21, 2019 ADMIN - 3</strong></b></h5>
                        <h5>Why Lead Generation is key for  Business Growth.</h5>
                        <h5> A smalll river named Duden flows by their place and
                                    supplies it with the necessary regalia.</h5>
                    </div>
                </div>
                <div class="jumbotron m-0 pb-2 mb-3 d-md-inline-block mr-lg-2 p-lg-0" id="blogpic">
                    <div class="container-fluid">
                        <img src={tech2} class="img-rounded m-2 mb-3 mb-lg-0" alt="Error" />
                        <h5 class="mt-2 mb-lg-2"><b><strong>June 21, 2019 ADMIN - 3</strong></b></h5>
                        <h5>Why Lead Generation is key for  Business Growth.</h5>
                        <h5> A smalll river named Duden flows by their place and
                                    supplies it with the necessary regalia.</h5>
                    </div>
                </div>
                <div class="jumbotron m-0 pb-2 mb-3 d-md-inline-block mr-lg-2 p-lg-0" id="blogpic">
                    <div class="container-fluid">
                        <img src={tech3} class="img-rounded m-2 mb-3 mb-lg-0" alt="Error" />
                        <h5 class="mt-2 mb-lg-2"><b><strong>June 21, 2019 ADMIN - 3</strong></b></h5>
                        <h5>Why Lead Generation is key for  Business Growth.</h5>
                        <h5> A smalll river named Duden flows by their place and
                                    supplies it with the necessary regalia.</h5>
                    </div>
                </div>
                
            </div>
        </React.Fragment>
    )
}

const HirePlacement = () => {

    return (
        <React.Fragment>
            <div class="container" style={{
                backgroundImage: `url(${Download})`}} id="achieve" >
                <div class="container d-md-inline-block" id="achievement">
                    <h4 class="text-light text-center pt-lg-4">100</h4>
                    <p class="text-light text-center pb-lg-3">Awards <br />Recieved</p>
                </div>
                <div class="container d-md-inline-block" id="achievement">
                    <h4 class="text-light text-center pt-lg-4">1,200</h4>
                    <p class="text-light text-center pb-lg-3">Complete Projects</p>
                </div>
                <div class="container d-md-inline-block" id="achievement">
                    <h4 class="text-light text-center pt-lg-4">1,200</h4>
                    <p class="text-light text-center pb-lg-3">Happy Customers</p>
                </div>
                <div class="container d-md-inline-block" id="achievement">
                    <h4 class="text-light text-center pt-lg-4">500</h4>
                    <p class="text-light text-center pb-lg-3">Cups of <br />Coffee</p>
                </div>
            </div>
            
            <div class="container p-2 mt-lg-4 mb-lg-1 pb-lg-4" id="hire">
                <h3 class="p-1 pb-lg-3 text-center">I'm <b style={{ color: "orange"}}>Available</b> for Freelancing</h3>
                <p className="text-center">A smalll river named Duden flows by their place and<br/>
                        supplies it with the necessary regalia.</p>
                <button class="btn btn-defualt d-flex text-center mr-auto ml-auto" >
                    HIRE ME
                </button>
            </div>
                                    
        </React.Fragment>
    )
}

export default Blog