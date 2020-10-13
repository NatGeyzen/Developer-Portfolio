import React, { useState, Fragment } from 'react';
import './Blog.css';

import Posts from './Posts/Posts';

const Blog = () => {

    const [ isWarning, setIsWarning ] = useState(true);
    const [ blogPost, setBlogPost ] = useState();

    const renderPosts = post => {
        setIsWarning(false);
        setBlogPost(<Posts selectedPost={post} />)
    };

    return (
        <Fragment>
            { 
                isWarning ? 
                    <section className="page-section">
                        <div className="initial-page">
                            <h2 className="page-section-title">Blog</h2>
                            <div className="warning">
                                <div className="coming-soon">
                                    <p>Uh oh!</p>
                                    <p>This collection is currently under development.</p>
                                </div>
                                <div className="sneak-peek">
                                    <p>But here's a sneak peek:</p>
                                    <button className="open-post" onClick={() => renderPosts('lessonsLearned')} >The One Where I REALLY Learned The Meaning Of Clean, Reusable Code</button>
                                    {/* <button className="open-post"  onClick={() => renderPosts('stepByStep')}>Step By Step: Setting up and connecting a MongoDB cluster</button> */}
                                </div>
                            </div>
                        </div>
                    </section>
                : blogPost   
            }        
        </Fragment>
    )
};

export default Blog;