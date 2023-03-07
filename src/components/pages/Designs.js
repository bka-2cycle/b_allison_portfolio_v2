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
import desa from '../../assets/slide-a.png';
import desaaa from '../../assets/slide-aaa.png';
import desbb from '../../assets/slide-bb.png';
import descc from '../../assets/slide-cc.png';
import desdd from '../../assets/slide-dd.png';
import dese from '../../assets/slide-ee.png';
import desff from '../../assets/slide-ff.png';
import desg from '../../assets/slide-g.png';
import desy from '../../assets/slide-y.png';
import desq from '../../assets/slide-q.png';
import desi from '../../assets/slide-i.png';
import desj from '../../assets/slide-j.png';
import desk from '../../assets/slide-k.png';
import desl from '../../assets/slide-l.png';
import desm from '../../assets/slide-m.png';
import desmm from '../../assets/slide-mm.png';
import desn from '../../assets/slide-n.png';
import deso from '../../assets/slide-o.png';
import desp from '../../assets/slide-p.png';
import desr from '../../assets/slide-r.png';
import dess from '../../assets/slide-s.png';

export default function Projects() {
  
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel indicators={false} activeIndex={index} onSelect={handleSelect}>


<Carousel.Item>
        <img
          className="d-block blank w-100"
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
          src={desmm}
          alt="Fifth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block blank w-100"
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
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Trade Show Display</span>
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
          className="d-block blank w-100"
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
          src={desy}
          alt="Tenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>



<Carousel.Item>
        <img
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
          <span className="biscuit">Publications</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>
      
      
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desa}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Page Layout & Design</span>
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
          className="d-block blank w-100"
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
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Advertising - Print</span>
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
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Display Banner Ads</span>
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
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Logo Design</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={desq}
          alt="Fourteenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Illustration - Pencil</span>
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


      {/* <Carousel.Item>
        <img
          className="d-block w-100"
          src={desr}
          alt="Fourteenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item> */}


      <Carousel.Item>
        <img
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Design - Apparel</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={deso}
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
          src={desp}
          alt="Fourteenth slide"
        />
        <Carousel.Caption>
          <h3></h3>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block blank w-100"
          src={desblnk}
          alt="Transition slide"
        />
        <Carousel.Caption>
        <span className="biscuit">Photography</span>
          <p></p>
        </Carousel.Caption>
      </Carousel.Item>


      <Carousel.Item>
        <img
          className="d-block w-100"
          src={dess}
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