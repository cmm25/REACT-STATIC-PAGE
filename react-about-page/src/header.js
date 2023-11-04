import './nav.css';

function Header(){
    return(
        <div>
            <header>
                <nav className="nav">
                     <img src="logo192.png" alt="react logo" className="nav-icon"/>
                     <h3 className="title" > ReactFacts</h3>
                     <h4 className="project-name">React Course - Project 1</h4>
                </nav>
            </header>
        </div>
      
    )
}
export default  Header;