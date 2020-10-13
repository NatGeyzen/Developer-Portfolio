import React from 'react';
import './StepByStep.css';

const StepByStep = props => {
    return (
        <article className={props.slideClass}>
            <div className="post-category">Step By Step</div>
            <h1 className="post-title">Setting up and connecting a MongoDB cluster</h1>
            <img src="/assets/mongodb-landing-page.png" alt="MongoDB website screenshot" className="post-img"></img>
            <div className="requirements">
                <p>This Step-By-Step assumes a MongoDB account has already been set up and you are currently logged into that account.</p>
                <div className="divider-line"></div>
            </div>

            <div className="flex-screenshots-steps">
                <div className="screenshots-wrapper">
                    <img src="/assets/mongodb-setting-up-1.png" alt="Screenshot of steps 1 and 2" className="post-img-small one"></img>
                    <img src="/assets/mongodb-setting-up-2.png" alt="Screenshot of steps 3 and 4" className="post-img-small two"></img>
                    <img src="/assets/mongodb-setting-up-3.png" alt="Screenshot of step 7" className="post-img-small three"></img>
                    <img src="/assets/mongodb-setting-up-4.png" alt="Screenshot of step 10" className="post-img-small four"></img>
                </div>
                <ol className="steps">
                    <li className="step one">In your organization's dashboard, select 'Projects' to the left.</li>
                    <li className="step two">Then click the 'New Project' button to the top right.</li>
                    <li className="step three">Give your project a name.</li>
                    <li className="step four">Then click the next button.</li>
                    <li className="step five">Add member and set permissions for each member in the following screen if needed. If not, permissions are automatically set to project owner for you.</li>
                    <li className="step six">Click the 'Create Project' button. </li>
                    <li className="step seven">Click the 'Build a Cluster' button.</li>
                    <li className="step eight">Select the type of cluster to create. Unless you are building a big applications that has many people working on it, the free tier will likely suffice. Especially if you are just learning MongoDB.</li>
                    <li className="step nine">The next screen will show some options for cloud providers, regions and other settings. It will automatically select the most popular options, but they can be changed if needed. For beginners, stick to the suggested options.</li>
                    <li className="step ten">Click the 'Create Cluster' button.</li>
                </ol>
            </div>
            <div className="part2">Part 2 coming soon</div>
            <footer className="article-footer">
                <div className="footer-divider">&copy;2020 Nat Geyzen</div>
            </footer>

        </article>
    )
};

export default StepByStep;