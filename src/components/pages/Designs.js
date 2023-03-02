// import React from 'react';
import React, { useState } from 'react';
// import Carousel from 'nuka-carousel';
import Carousel from 'react-bootstrap/Carousel';

import "bootstrap/dist/css/bootstrap.css";
import "react-bootstrap-carousel/dist/react-bootstrap-carousel.css";

// import { ExternalLink } from 'react-external-link';



// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import {faAnglesRight} from '@fortawesome/free-solid-svg-icons'


import desblnk from '../../assets/slide-blnk.png';
import desaa from '../../assets/slide-aa.png';
import desaaa from '../../assets/slide-aaa.png';
import desbb from '../../assets/slide-bb.png';
import descc from '../../assets/slide-cc.png';
import desdd from '../../assets/slide-dd.png';
import dese from '../../assets/slide-ee.png';
import desff from '../../assets/slide-ff.png';
import desg from '../../assets/slide-g.png';
import desh from '../../assets/slide-h.png';
import desi from '../../assets/slide-i.png';
import desj from '../../assets/slide-j.png';
import desk from '../../assets/slide-k.png';
import desl from '../../assets/slide-l.png';
import desm from '../../assets/slide-m.png';
import desn from '../../assets/slide-n.png';

export default function Projects() {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>

<Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
          <span className="biscuit">Magazine & Newspaper</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desaa}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desaaa}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Editorial Page Layout & Design</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desk}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Media Kit</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desl}
          alt="Fourth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Technical Illustration</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desm}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Package Design</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desbb}
          alt="Sixth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desdd}
          alt="Seventh slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={descc}
          alt="Eighth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Trade Show Booth - Table Display</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dese}
          alt="Ninth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Direct Mail - Print</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desff}
          alt="Tenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Advertisement - Print</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desg}
          alt="Elleventh slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desi}
          alt="Twelth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Web Banner</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desj}
          alt="Thirteenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Logo Design - Annual Issue</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desh}
          alt="Fourteenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Illustration - Colored/Pencil</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desn}
          alt="Fourteenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



    </Carousel>
  );
}