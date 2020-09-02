import React from 'react';
import './Skill.css';

const Skill = props => {

    return (
        <div className="skill-container" id={props.containerId}>
            <div className={`${props.category} skill`}>
                {props.tech}
            </div>
            <div className={props.level !== null ? 'level-container unlocked' : 'locked'}>
                {props.level}
            </div>
            
        </div>
    )
};

export default Skill;