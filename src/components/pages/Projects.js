// import React from 'react';
import React, { useState } from 'react';
// import Carousel from 'nuka-carousel';
import Carousel from 'react-bootstrap/Carousel';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// import { ExternalLink } from 'react-external-link';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'


import proja from '../../assets/slide-one.png';
import projb from '../../assets/slide-two.png';
import projc from '../../assets/slide-three.png';
import projd from '../../assets/slide-four.png';
import proje from '../../assets/proj-05.png';
import projf from '../../assets/proj-06.png';

export default function Projects() {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={proja}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>MERN Stack CMS</h3>
          <p>Designed to assist job seekers in their quest for employment in an often decentralized endeavor. 
            Users can save information about jobs they have applied for, including company name, 
            job title and description, lead source, pertinent notes, follow-up correspondence, and the 
            ability to upload documents such as resumes and cover letters. It also allows users to track 
            the time passed throughout the application process.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={projb}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Front End Application</h3>
          <p>This just-for-fun app helps you face your day by suggesting movies, song play lists, 
            and books based on your mood. In lieu of the way your feeling, it'll provide you with a 
            funny joke, a notable quote, and what happened this day in history. The site was created 
            using HTML, Javascript, JQuery, Bootstrap JS, Day JS, custom CSS and queries six API's both local and remote.</p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={projc}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>CMS-style Blog Site</h3>
          <p>
          A CMS-style blog site where developers can create an account, publish their blog posts and comment on 
          other developers’ posts as well. The app follows the MVC paradigm in its architectural structure, 
          using Handlebars.js as the templating language, Sequelize as the ORM, and the express-session npm package for authentication.
          </p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={projd}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3>Social Network API Routes</h3>
          <p>
          A functioning API for a Social Network platform that can be route tested via Insomnia, Postman or similar API development software. 
          Built using Express.js for routing, a MongoDB database, and the Mongoose ODM.
          </p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}


















//   return (
//     <Carousel className="mustard ketchup">
//     <img src={proja} />
//     <img src={projb} />
//     <img src={projc} />
//     <img src={projd} />
//     <img src={proje} />
//     <img src={projf} />
//   </Carousel>
//   );
// }










// export default function Blog() {
//   return (

//   <div className="proj-flex"> 

//   <div className="mug">
//       <p className="protle">FACE THE DAY</p>
      
//       <img className="beer" src={proja} />
//     <div className="nuts">
//       <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/face-the-day">
//       <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
//     </ExternalLink>
//     <ExternalLink className="pretzels" href="https://bka-2cycle.github.io/face-the-day/">
//       <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> Deployed Site</span>
//     </ExternalLink>
//     </div>
//   </div>

  


//   </div>    
//   );
// }
