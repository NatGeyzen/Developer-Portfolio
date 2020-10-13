class SkillObject {
    constructor(name, category, level) {
        this.name = name;
        this.category = category;
        this.level = level;
    }
};

export const terminal_skills = [
    new SkillObject('Linux Command Line', 'terminal', '3'),
    new SkillObject('Power Shell', 'terminal', '2'),
    new SkillObject('Git', 'version-control', '3'),
    new SkillObject('GitHub', 'version-control', '3'),
];

export const main_skills = [
    new SkillObject('Html', 'languages', '6'),
    new SkillObject('Css', 'languages', '6'),
    new SkillObject('JS', 'languages', '5'),
    new SkillObject('React', 'libraries', '5'),
    new SkillObject('jQuery', 'libraries', '2'),
    new SkillObject('Node.js', 'run-time-env', '2'),
    new SkillObject('Firebase', 'databases', '2'),
    new SkillObject('Express', 'framework', '1'),
    new SkillObject('MongoDB', 'databases', '2'),
    new SkillObject('Mustache', 'view-engine', '2'),
    new SkillObject('React Native', 'locked', null)
];

export const other_skills = [
    new SkillObject('Chrome Dev Tools', 'other', '4'),
    new SkillObject('Testing', 'other', '2'),
    new SkillObject('Debugging', 'other', '3'),
    new SkillObject('UX', 'other', '2')
];

let totalLevel = 0;
const all_skills = [...terminal_skills, ...main_skills, ...other_skills];
all_skills.map(skill => skill.level !== null ? totalLevel += parseInt(skill.level) : null);

export const level = totalLevel; 