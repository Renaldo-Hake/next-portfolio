export default () => ( 
    <div>
        <nav>
            <a href='/'>HOME</a>
            <a href='projects'>PROJECTS</a>
            <a href='contact'>CONTACT</a>
            <style jsx>{`
                    a {
                        color: #333;
                        padding: 5px 10px;
                        text-decoration: none;
                    }
                `}</style>
        </nav> 
        <div>
            <h3>About me</h3>
            <p>
                I am a full stack web developer with special skill in MERN. I am passionate
                about making full stack applications. I have completed a full stack web
                developer bootcamp with Hyperion development in Jan 2022. 
            </p>
            <br/>
            <h3>Skills</h3>
            <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>React</li>
                <li>JQUERY</li>
                <li>Express.js</li>
                <li>MongoDB</li>
                <li>Next.js</li>
            </ul>

            <style global jsx>{`
                body {
                    text-align: center;
                    line-height: 1.5em;
                }
                
                p {
                    width: 30%;
                    margin: auto;
                }

                li {
                    list-style: none;
                    padding-right: 38px;
                }
            `}</style>
        </div>
    </div>
)