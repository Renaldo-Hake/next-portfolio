export default () => ( 
    <div>
        <nav>
            <a href='/'>HOME</a>
            <a href='about'>ABOUT</a>
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
            <h1>PROJECTS</h1>
            <div>
                <a href='https://minesweeperclone.herokuapp.com/'>
                    <img src="/pr-6.png" alt="project 6"/>
                    <a href="https://github.com/Renaldo-Hake/Minesweeper-Clone">view source code</a>
                </a>
                <a href="https://renaldo-hake.github.io/Renaldo_Hake_Resume/">
                    <img src="/pr-7.png" alt="project 7"/>
                    <a href="https://github.com/Renaldo-Hake/Renaldo_Hake_Resume">view source code</a>
                </a>
                <style jsx>{`
                    img {
                        border-radius: 10px;
                        width: 100%;
                        height: 100%;
                    }
                    div {
                        display: grid;
                        grid-template-columns: 1fr 1fr 1fr;
                        gap: 1em;
                        margin: 2em
                    }
                    a {
                        text-decoration: none;
                        padding: 5px;
                    }
                `}</style>
                <style global jsx>{`
                body {
                    text-align: center;
                }
                
            `}</style>
            </div>
        </div>
    </div>
)