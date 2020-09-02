import React from 'react';
import './Hero.css';

import Code from '../Code/Code';


const code_sample_1 = `
<code className="code-sample">
    {props.sample} 
</code>
`;

const code_sample_2 = `
#start {
    animation: slideStartSpanFromLeft 600ms ease-out 500ms forwards;
}`;

const code_sample_4 = `
app.get('/admin/login', (req, res) => {
    res.render('adminLogin');
});`

const Hero = () => {

    const carrousel_array = [
        ["writing", "writing"],
        ["teaching", "teaching"], 
        ["effects", "animations and effects"],
        ["minimalism", "a minimalist design approach"]
    ];

    return (
        <section className="hero">
            <Code id="jsx" sample={code_sample_1} />
            <Code id="css" sample={code_sample_2} />
            <Code id="node" sample={code_sample_4} />
            <header>
                <h1><span id="start">Front End</span><span id="end">Developer</span></h1>
                <div className="carrousel-container">
                    <p className="carrousel-sentence" id="passion">with a passion for 
                        {carrousel_array.map((array) => 
                            <span key={array[0]} id={array[0]} className="carrousel-word">{array[1]}</span>
                        )}
                    </p>
                    <p className="carrousel-sentence" id="dabbles">who also dabbles in
                        <span className="carrousel-word" id="back-end">back end development</span>
                    </p>
                </div>
            </header>
        </section>
    )
};

export default Hero;