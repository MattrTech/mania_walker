import React from 'react';
import HomeImage from '../../images/slide1.png';
import './HomeSection.css'

function HomeSection() {
    return (
        <div className="homeSection"> 
            {/* <HomeCard /> */}
            <div className="container1">
                <h1>Hello</h1>
                <p>Lorem ipsum dolor sit amet,<br/> consetetur.</p>
                <button>Know More  <i style={{marginLeft:"10px"}} class="fas fa-arrow-right"></i> </button>
            </div>
        </div>
    )
}

export default HomeSection
