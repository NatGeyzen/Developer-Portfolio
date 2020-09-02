import React from 'react';
import './Skills.css';
import Skill from '../../components/Skill/Skill';

const Skills = () => {

    const terminal_skills = [
        [ 'linux-terminal-container', 'terminal', 'Linux command line', '3' ],
        [ 'powershell-container', 'terminal', 'Power Shell', '2' ],
        [ 'git-container', 'version-control', 'Git', '3' ],
        [ 'github-container', 'version-control', 'GitHub', '3' ]
    ];

    const other_skills = [
        [ 'chrome-dev-tools-container', 'other', 'Chrome Dev Tools', '4' ],
        [ 'testing-container', 'other', 'Testing', '2' ],
        [ 'debugging-container', 'other', 'Debugging', '3' ],
        [ 'ux-container', 'other', 'UX', '2' ]
    ]

    return (
        <section id="skills" className="skills" >
            <h2 className="section-title">Arsenal</h2>
            <div id="html_to_css" className="connector-line"></div>
            <div id="css_to_js" className="connector-line"></div>
            <div id="js_to_html" className="connector-line"></div>
            <div id="js_to_react" className="connector-line"></div>
            <div id="js_to_jquery" className="connector-line"></div>
            <div id="js_to_firebase" className="connector-line"></div>
            <div id="js_to_node" className="connector-line"></div>
            <div id="node_to_mongo" className="connector-line"></div>
            <div id="node_to_mustache" className="connector-line"></div>
            <div id="mustache_to_express" className="connector-line"></div>
            <div id="express_to_mongo" className="connector-line"></div>
            <div id="node_to_express" className="connector-line"></div>
            <div id="mustache_to_mongo" className="connector-line"></div>
            <div id="react_to_firebase" className="connector-line"></div>
            <div id="linux_to_git" className="connector-line"></div>
            <div id="git_to_powershell" className="connector-line"></div>
            <div id="powershell_to_github" className="connector-line"></div>
            <div id="github_to_linux" className="connector-line"></div>
            <div id="git_to_github" className="connector-line"></div>
            

            <Skill containerId="html-container" category="languages" tech="Html" level="6" />
            <Skill containerId="css-container" category="languages" tech="Css" level="6" />
            <Skill containerId="js-container" category="languages" tech="JS" level="5" />
            <Skill containerId="react-container" category="libraries" tech="React" level="5" />
            <Skill containerId="jquery-container" category="libraries" tech="jQuery" level="2" />
            <Skill containerId="node-container" category="run-time-env" tech="Node.js" level="2" />
            <Skill containerId="firebase-container" category="database" tech="Firebase" level="2" />
            {/* <Skill containerId="redux-container" category="libraries" tech="Redux" level="3" /> */}
            {/* <Skill containerId="rtl-container" category="testing" tech="React-testing-library" level="1" /> */}
            <Skill containerId="express-container" category="framework" tech="Express" level="1" />
            <Skill containerId="mongodb-container" category="database" tech="MongoDB" level="2" />
            <Skill containerId="mustache-container" category="view-engine" tech="mustache" level="2" />


            
            
            <section className="terminal-skills">
                {terminal_skills.map(array => 
                    <Skill key={array[0]} containerId={array[0]} category={array[1]} tech={array[2]} level={array[3]} />
                )}
            </section>
            <section className="other-skills">
                {other_skills.map(array => 
                    <Skill key={array[0]} containerId={array[0]} category={array[1]} tech={array[2]} level={array[3]} />
                )}
            </section>

            <div className="level-bar-container">
                <div className="progress-bar">
                    <div className="progress"></div>
                </div>  
                <div className="level">58</div>  
                <span className="boost">+6490 EXP to next boost</span>
            </div>

            <footer className="legend">
                <div className="flex-column-cell">
                    <div className="flex-row">
                        <div id="terminal-symbol" className="legend-circle"></div>
                        <div className="legend-label">Terminal</div>
                    </div>
                    <div className="flex-row">
                        <div id="version-control-symbol" className="legend-circle"></div>
                        <div className="legend-label">Version Control</div>
                    </div>
                </div>
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
                <div className="flex-column-cell">
                    <div className="flex-row">
                        <div id="other-symbol" className="legend-circle"></div>
                        <div className="legend-label">Other Skills</div>
                    </div>
                    <div className="flex-row">
                        <div id="conjunction-symbol" className="legend-line"></div>
                        <div className="legend-label">Used In Conjunction</div>
                    </div>
                </div>              
            </footer>
            
        </section>
    )
};

export default Skills;