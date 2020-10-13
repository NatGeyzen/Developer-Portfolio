import React, { Fragment } from 'react';
import Code from './Code/Code';
import './CodeSnippets.css';

const code_sample_1 = `
<code className="code-sample">
    {props.sample} 
</code>
`;

const code_sample_2 = `
.nav-slider.closed {
    width: 0;
    transition: width 0.4s ease-out;
}`;

const code_sample_3 = `
const [ 
    activeSection, 
    setActiveSection 
] = useState('about');`;

const code_sample_4 = `
app.get('/admin/login', (req, res) => {
    res.render('adminLogin');
});`

const code_sample_5 = 
    window.innerWidth >= 768 && window.innerHeight <= 577 ? `
    @media (min-width: 768px) and (max-height: 577px) {
        .menu-icon      { font-size: 25px; }
    }` :
    window.innerWidth >= 1000 ? `
    @media (min-width: 1000px) {
        .menu-icon      { font-size: 50px; }
    }` :
    window.innerWidth >= 768 ? `
    @media (min-width: 768px) {
        .menu-icon      { font-size: 35px; }
    }` :
    window.innerWidth >= 400 ? `
    @media (min-width: 400px) {
        .menu-icon      { font-size: 27px; }
    }` 
    : `
    @media (max-width: 400px) {
        .menu-icon      { font-size: 22px; }
    }`;

const code_sample_6 = `
const clickLinkHandler = clickedNavLink => {
    props.click(clickedNavLink);
    toggleNav();
}
`;

const CodeSnippets = () => {

    const code_array = [
        ['jsx', code_sample_1], 
        ['transition', code_sample_2], 
        ['react-state', code_sample_3], 
        ['node', code_sample_4], 
        ['media-query', code_sample_5], 
        ['es6', code_sample_6]
    ]

    return (
        <Fragment>
            {code_array.map(array =>
                <Code key={array[0]} id={array[0]} sample={array[1]} />
            )}
        </Fragment>    
    )
};

export default CodeSnippets;