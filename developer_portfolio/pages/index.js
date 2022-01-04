function Welcome(props) {
    return (
        <div>
            <nav>
                <a href='about'>ABOUT</a>
                <a href='projects'>PROJECTS</a>
                <a href='contact'>CONTACT</a>
                <style jsx>{`
                    a {
                        color: white;
                        padding: 5px 10px;
                        text-decoration: none;
                    }
                `}</style>
            </nav> 
            <div>
                <h1>Welcome to my protfolio</h1>
                <h2>Hi I am Renaldo Hake</h2>
                <h3>Full Stack Web Developer</h3>
                <p>
                    I specialize in the MERN stack and as you will be able to see in 
                    the projects page I have a list of all projects that I have completed
                    useing the MERN stack. In the about page you will find a more detailed 
                    description of what I can do and what skills I have aquired.
                </p>
                <style jsx>{`
                    div {
                        margin-top: 40vh;
                    }
                `}</style>
                <style global jsx>{`
                body {
                    text-align: center;
                    background-image: url('/background.jpeg');
                    background-repeat: none;
                    background-size: cover;
                    color: white;
                    line-height: 1.5em;
                }
                
                p {
                    width: 30%;
                    margin: auto;
                }
            `}</style>
            </div>
        </div>
    )
    }
    export default Welcome;