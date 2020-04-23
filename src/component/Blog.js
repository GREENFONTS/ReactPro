import React from 'react';

const Blog = () => {

    return (
        <React.Fragment>
            <BlogContent />
            <HirePlacement />
        </React.Fragment>                                  
    )
}
     
const BlogContent = () => {

    return (
        <React.Fragment>
            <div class="container" id="blog">
                <h1>OUR BLOG</h1>
                <p>Far far away, behind the word mountains,
                far from the countries Vokalia and Consonantia</p>
                <div class="jumbotron" id="blogpic">
                    <div class="container">
                        <img src="\src\component\com.1.jpg" class="img-rounded" alt="Error" />
                        <h5 ><b><strong>June 21, 2019 ADMIN - 3</strong></b></h5>
                        <h5><b>Why Lead Generation is key for  Business Growth.</b>
                         A smalll river named Duden flows by their place and
                                    supplies it with the necessary regalia.</h5>
                    </div>
                </div>
                <div class="jumbotron" id="blogpic">
                    <div class="container">
                        <img src=" /images/20191127_103021.jpg" class="img-rounded" alt="Error"/>
                        <h5><b><strong>June 21, 2019 ADMIN - 3</strong></b></h5>
                        <h5><b>Why Lead Generation is key for  Business Growth.</b>
                        A smalll river named Duden flows by their place and
                                    supplies it with the necessary regalia.</h5>            
                     </div>
                </div>
                <div class="jumbotron" id="blogpic">
                    <div class="container">
                        <img src="/images/20191127_103012.jpg" class="img-rounded" alt="Error"/>
                        <h5><b><strong>June 21, 2019 ADMIN - 3</strong></b></h5>
                        <h5><b>Why Lead Generation is key for Business Growth.</b>
                         A smalll river named Duden flows by their place and
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
            <div class="container" id="achieve">
                <div class="container" id="achievement">
                    <h4>100</h4>
                    <p>Awards Recieved</p>
                </div>
                <div class="container" id="achievement">
                    <h4>1,200</h4>
                    <p>Complete Projects</p>
                </div>
                <div class="container" id="achievement">
                    <h4>1,200</h4>
                    <p>Happy Customers</p>
                </div>
                <div class="container" id="achievement">
                    <h4>500</h4>
                    <p>Cups of Coffee</p>
                </div>
            </div>
            
            <div class="container" id="hire">
                <h3>I'm <b style={{ color: "orange"}}>Available</b> for Freelancing</h3>
                <p>A smalll river named Duden flows by their place and
                        supplies it with the necessary regalia.</p>
                <button class="btn btn-defualt" type="button">
                    HIRE ME
                </button>
            </div>
                                    
        </React.Fragment>
    )
}

export default Blog