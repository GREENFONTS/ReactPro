import React from 'react'

function ChangeImage() {
    let Dynamic = async function LoadData(url, location) {
        setInterval(() => {
            // let response = await fetch(url)
            // let data = await response.json();
            // document.getElementById({ location }).innerHTML = data
            console.log("hi")
        }, 8000); 
        
        document.onload(LoadData)
        
 
       
    
}
}
export default ChangeImage();