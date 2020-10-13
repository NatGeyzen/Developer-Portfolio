import React from 'react';
import { LockFilled } from '@ant-design/icons';
import './Skill.css';

const Skill = props => {

    return (
        <div className="skill-container" id={props.containerId}>
            <div className={`${props.category} skill`}>
                {props.tech}
            </div>
            <div className={props.level !== null ? 'level-container' : 'level-container locked'}>
                {props.level !== null ? props.level : <LockFilled style={{fontSize: '90%'}}/>}
            </div>
            
        </div>
    )
};

export default Skill;