import React from 'react';
import './SkillsLegend.css';

const SkillsLegend = () => {
    return (
        <div className="skills-legend">
            <div className="skills-flex-column-cell">
                <div className="flex-row">
                    <div id="terminal-symbol" className="legend-circle"></div>
                    <div className="legend-label">Terminal</div>
                </div>
                <div className="flex-row">
                    <div id="version-control-symbol" className="legend-circle"></div>
                    <div className="legend-label">Version Control System</div>
                </div>
            </div>

            <div className="skills-flex-column-cell">
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

            <div className="skills-flex-column-cell">
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

            <div className="skills-flex-column-cell">
                <div className="flex-row">
                    <div id="other-symbol" className="legend-circle"></div>
                    <div className="legend-label">Other Skills</div>
                </div>
            </div>
        </div>
    )
};

export default SkillsLegend;