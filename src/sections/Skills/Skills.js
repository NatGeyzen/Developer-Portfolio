import React, { useState } from 'react';
import { DoubleLeftOutlined, DoubleRightOutlined } from '@ant-design/icons';
import './Skills.css';
import Skill from '../../components/Skill/Skill';
import SkillsLegend from './Legend/SkillsLegend';
import { terminal_skills, main_skills, other_skills, level } from './skillsVariables';

const Skills = () => {

    const [ terminalSkillsClass, setTerminalSkillsClass ] = useState('terminal-skills hidden');
    const [ mainSkillsClass, setMainSkillsClass ] = useState('main-skills visible');
    const [ otherSkillsClass, setOtherSkillsClass ] = useState('other-skills hidden');

    const skillsVisibleClasses = [ 'visible', 'inToLeft', 'inToRight' ];

    const slideLeft = () => {
        console.log('slideLeft function triggered');

        if (mainSkillsClass.includes('visible') || mainSkillsClass.includes('inToLeft') || mainSkillsClass.includes('inToRight')) {

            mainSkillsClass.includes('visible') 
                ? setMainSkillsClass(mainSkillsClass.replace('visible', 'outToRight')) 
                : mainSkillsClass.includes('inToLeft') 
                    ? setMainSkillsClass(mainSkillsClass.replace('inToLeft', 'outToRight')) 
                    : setMainSkillsClass(mainSkillsClass.replace('inToRight', 'outToRight'));

            terminalSkillsClass.includes('hidden') 
                ? setTerminalSkillsClass(terminalSkillsClass.replace('hidden', 'inToRight')) 
                : setTerminalSkillsClass(terminalSkillsClass.replace('outToLeft', 'inToRight'));

        } 
        else if (otherSkillsClass.includes('inToLeft')) {
            setOtherSkillsClass(otherSkillsClass.replace('inToLeft', 'outToRight'));
            setMainSkillsClass(mainSkillsClass.replace('outToLeft', 'inToRight'));
        }
    };

    const slideRight = () => {
        console.log('slideRight function triggered');

        if (mainSkillsClass.includes('visible') || mainSkillsClass.includes('inToLeft') || mainSkillsClass.includes('inToRight')) {
            
            mainSkillsClass.includes('visible') 
                ? setMainSkillsClass(mainSkillsClass.replace('visible', 'outToLeft')) 
                : mainSkillsClass.includes('inToLeft') 
                    ? setMainSkillsClass(mainSkillsClass.replace('inToLeft', 'outToLeft')) 
                    : setMainSkillsClass(mainSkillsClass.replace('inToRight', 'outToLeft'));
                
            otherSkillsClass.includes('hidden') 
                ? setOtherSkillsClass(otherSkillsClass.replace('hidden', 'inToLeft')) 
                : setOtherSkillsClass(otherSkillsClass.replace('outToRight', 'inToLeft'));
        }

        else if (terminalSkillsClass.includes('inToRight')) {
            setTerminalSkillsClass(terminalSkillsClass.replace('inToRight', 'outToLeft'));
            setMainSkillsClass(mainSkillsClass.replace('outToRight', 'inToLeft'));
        }
    };

    const leftArrow = skillsVisibleClasses.map(
        option => (mainSkillsClass.includes(option) || otherSkillsClass.includes(option)) && window.innerWidth < 768 ?
            <DoubleLeftOutlined 
                className="arrow left"
                style={{color: 'rgba(255, 255, 255, 0.75)', position: 'absolute', top: '60%', left: '5%', fontSize: '175%', outline: 'none'}} 
                onClick={slideLeft}
            /> : null
    );

    const rightArrow = skillsVisibleClasses.map(
        option => (mainSkillsClass.includes(option) || terminalSkillsClass.includes(option)) && window.innerWidth < 768 ?
            <DoubleRightOutlined 
                className="arrow right"
                style={{color: 'rgba(255, 255, 255, 0.75)', position: 'absolute', top: '60%', right: '5%', fontSize: '175%', outline: 'none'}} 
                onClick={slideRight}
            /> : null
    );


    return (
        <section id="skills" className="page-section" >
            <h2 className="page-section-title">Arsenal</h2>
        
            <div className="level-bar-container">
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>  
                <div className="level">{level}</div>  
                <span className="boost">
                    <span>+690 EXP</span> 
                    <span>to unlock next skill</span>
                </span>
            </div>
           
            
            <div className={terminalSkillsClass}>
                {terminal_skills.map(obj => 
                    <Skill 
                        key={obj.name}
                        containerId={`${obj.name.toLowerCase().replace('.', '').replace(' ', '-').replace(' ', '-')}-container`} 
                        category={obj.category} 
                        tech={obj.name}
                        level={obj.level} 
                    />
                )}

                { window.innerWidth < 768 ?
                    <div className="legend">
                        <div className="flex-column-cell one-column">
                            <div className="flex-row">
                                <div id="terminal-symbol" className="legend-circle"></div>
                                <div className="legend-label">Terminal</div>
                            </div>
                            <div className="flex-row">
                                <div id="version-control-symbol" className="legend-circle"></div>
                                <div className="legend-label">Version Control System</div>
                            </div>
                        </div>
                    </div> : null
                }

            </div>


            <div className={mainSkillsClass}>
                
                {main_skills.map(obj => 
                    <Skill 
                        key={obj.name}
                        containerId={`${obj.name.toLowerCase().replace('.', '').replace(' ', '-')}-container`} 
                        category={obj.category} 
                        tech={obj.name}
                        level={obj.level} 
                    />
                )}

                { window.innerWidth < 768 ?
                    <div className="legend">
                        <div className="flex-column-cell">
                            <div className="flex-row">
                                <div id="front-end-trifecta-symbol" className="legend-circle"></div>
                                <div className="legend-label">Front End Trifecta</div>
                            </div>
                            <div className="flex-row">
                                <div id="libraries-symbol" className="legend-circle"></div>
                                <div className="legend-label">Libraries</div>
                            </div>
                            <div className="flex-row">
                                <div id="databases-symbol" className="legend-circle"></div>
                                <div className="legend-label">Databases</div>
                            </div>
                        </div>
                        <div className="flex-column-cell">
                            <div className="flex-row">
                                <div id="run-time-env-symbol" className="legend-circle"></div>
                                <div className="legend-label">Run Time Environment</div>
                            </div>
                            <div className="flex-row">
                                <div id="framework-symbol" className="legend-circle"></div>
                                <div className="legend-label">Frameworks</div>
                            </div>
                            <div className="flex-row">
                                <div id="template-engine-symbol" className="legend-circle"></div>
                                <div className="legend-label">Template Engine</div>
                            </div>
                        </div>              
                    </div> : null 
                }
            
            </div>

            <div className={otherSkillsClass}>
                {other_skills.map(obj => 
                    <Skill 
                        key={obj.name}
                        containerId={`${obj.name.toLowerCase().replace('.', '').replace(' ', '-').replace(' ', '-')}-container`} 
                        category={obj.category} 
                        tech={obj.name}
                        level={obj.level} 
                    />
                )}
                
                { window.innerWidth < 768 ? 
                    <div className="legend">
                        <div className="flex-row">
                            <div id="other-symbol" className="legend-circle"></div>
                            <div className="legend-label">Other Skills</div>
                        </div>
                    </div> : null
                }


            </div>
            
            {leftArrow}
            {rightArrow}

            {window.innerWidth >= 768 ? <SkillsLegend /> : null}

          
        </section>
    )
};

export default Skills;