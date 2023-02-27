import React from 'react';
import { ExternalLink } from 'react-external-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'


import proja from '../../assets/proj-01.png';
import projb from '../../assets/proj-02.png';
import projc from '../../assets/proj-03.png';
import projd from '../../assets/proj-04.png';
import proje from '../../assets/proj-05.png';
import projf from '../../assets/proj-06.png';

export default function Blog() {
  return (

  <div className="proj-flex"> 

  <div className="mug">
      <p className="protle">FACE THE DAY</p>
      
      <img className="beer" src={proja} />
    <div className="nuts">
      <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/face-the-day">
      <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
    </ExternalLink>
    <ExternalLink className="pretzels" href="https://bka-2cycle.github.io/face-the-day/">
      <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> Deployed Site</span>
    </ExternalLink>
    </div>
  </div>

  <div className="mug">
      <p className="protle">FANTASY LEAGUE</p>
      
      <img className="beer" src={projb} />
    <div className="nuts">
    <ExternalLink className="pretzels" href="https://github.com/wvoigt722/uclaFantasyLeague/">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
    </ExternalLink>
    <ExternalLink className="pretzels" href="https://evening-tundra-41770.herokuapp.com/">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> Deployed Site</span>
    </ExternalLink>
    </div>
  </div>

  <div className="mug">
      <p className="protle">DEVELOPER BLOG</p>
      
      <img className="beer" src={projc} />
    <div className="nuts">
    <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/tech-blog">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
    </ExternalLink>
    <ExternalLink className="pretzels" href="https://speakingincode.herokuapp.com/">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> Deployed Site</span>
    </ExternalLink>
    </div>
  </div>

  <div className="mug">
      <p className="protle">CODE SNIPPETS</p>
      
      <img className="beer" src={projd} />
    <div className="nuts">
    <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/CSS-cheatsheet">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
    </ExternalLink>
    <ExternalLink className="pretzels" href="https://bka-2cycle.github.io/CSS-cheatsheet/">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> Deployed Site</span>
    </ExternalLink>
    </div>
  </div>

  <div className="mug">
      <p className="protle">BAND TRIBUTE</p>
      
      <img className="beer" src={proje} />
    <div className="nuts">
    <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/band-tribute-page">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
    </ExternalLink>
    <ExternalLink className="pretzels" href="https://bka-2cycle.github.io/band-tribute-page/">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> Deployed Site</span>
    </ExternalLink>
    </div>
  </div>

  <div className="mug">
      <p className="protle">SOCIAL NET. API</p>
      
      <img className="beer" src={projf} />
    <div className="nuts">
    <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/Social-Network-api">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> GitHub Repo</span><br></br>
    </ExternalLink>
    <ExternalLink className="pretzels" href="https://github.com/bka-2cycle/Social-Network-api/blob/main/README.md">
    <span className="pretzels"><FontAwesomeIcon icon={faAnglesRight} size={'xs'} /> ReadMe.md</span>
    </ExternalLink>
    </div>
  </div>


  </div>    
  );
}
