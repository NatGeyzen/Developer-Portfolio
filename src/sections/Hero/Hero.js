import React from 'react';
import './Hero.css';
import CodeSnippets from '../../components/CodeSnippets/CodeSnippets';
const Hero = () => {

    const carrousel_array = [
        ["writing", "writing"],
        ["teaching", "teaching"], 
        ["effects", "animations and effects"],
        ["minimalism", "a minimalist design approach"]
    ];

    return (
        <section className="hero">
            <CodeSnippets />
            <header>
                <h1 className="job-title"><span id="start">Front End</span><span id="end">Developer</span></h1>
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