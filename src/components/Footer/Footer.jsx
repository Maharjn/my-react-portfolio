import React from 'react';
import "./Footer.scss";
import GitHubIcon from '@mui/icons-material/GitHub';



function Footer() {

    return (
        <div className="footer" id="footer">
        <ul>
            <li><a href="https://github.com/Maharjn" target="_blank" rel="noreferrer"><GitHubIcon className="icon"></GitHubIcon></a></li>
           
        </ul>
    </div>
        );
}

export default Footer;