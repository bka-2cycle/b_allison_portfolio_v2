import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faFilePdf} from '@fortawesome/free-solid-svg-icons'
import {faCodeBranch} from '@fortawesome/free-solid-svg-icons'
import { SocialIcon } from 'react-social-icons';
import { ExternalLink } from 'react-external-link';


export default function Footer() {
    return (
        <footer>
            <span className="sausage" style={{ color: '#D3D3D3' }}>Brian Allison: Portfolio</span>

<div className="footlinks">
            <ExternalLink className="sausage" href="https://drive.google.com/file/d/1YaEhkT8Cw-6CJ23tSZf75JCOQl1_Oewq/view?usp=sharing">
            <span className="hotsausage" style={{ color: '#D3D3D3' }}> Resume <FontAwesomeIcon icon={faFilePdf} size={'xs'} /></span>
    </ExternalLink>

    <ExternalLink className="sausage" href="https://linkedin.com/in/briankeithallison/">
            <span className="hotsausage" style={{ color: '#D3D3D3' }}> LinkedIn <SocialIcon style={{ height: 20, width: 20 }} bgColor="#D3D3D3" url="https://linkedin.com/in/briankeithallison/" /></span><br></br>
    </ExternalLink>

    <ExternalLink className="sausage" href="https://github.com/bka-2cycle">
            <span className="hotsausage" style={{ color: '#D3D3D3' }}> GitHub <SocialIcon style={{ height: 20, width: 20 }} bgColor="#D3D3D3" url="https://github.com/bka-2cycle" /></span><br></br>
    </ExternalLink>

    <ExternalLink className="sausage" href="https://stackoverflow.com/users/21193744/brian-allison">
            <span className="hotsausage" style={{ color: '#D3D3D3' }}> StackOverflow <SocialIcon style={{ height: 20, width: 20 }} bgColor="#D3D3D3" url="https://stackoverflow.com/users/21193744/brian-allison" /></span><br></br>
    </ExternalLink>

    </div>
            
        </footer>
    );
}