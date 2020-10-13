import React from 'react';
import { DesktopOutlined, CodeOutlined } from '@ant-design/icons'
import './Project.css';

const Project = props => {

    const { id, demoLink, title, codeLink } = props;
    
    console.log(demoLink);

    return (
        <div className={`project-container ${id}`}>
            <div className="hexagon">

                { demoLink ?
                    <a href={demoLink} className="demo-icon-link" target="_blank" rel="noopener noreferrer"><DesktopOutlined className="demo-icon" /></a>
                    : null
                }

                <h2 className="project-title">{title}</h2>

                { codeLink ?
                    <a href={codeLink} className="code-icon-link" target="_blank" rel="noopener noreferrer"><CodeOutlined className="code-icon" /></a>
                    : null
                }
                
            </div>
        </div>      
    )
};

export default Project;