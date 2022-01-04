export default () => ( 
    <div>
        <nav>
            <a href='/'>HOME</a>
            <a href='about'>ABOUT</a>
            <a href='projects'>PROJECTS</a>
            <style jsx>{`
                    a {
                        color: #333;
                        padding: 5px 10px;
                        text-decoration: none;
                    }
                `}</style>
        </nav> 
        <div>
            <h2>Contact me</h2>
            <ul>
                <li>Phone: 081 550 3996</li>
                <li>Email: rhake21867@gmail.com</li>
                <li>Address: Roodepoort, Gauteng</li>
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