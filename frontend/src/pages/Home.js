import { Link } from 'react-router-dom';
//Styles
import '../Home.css';

function Home() {
    return (
        <>
        <div className="Home">
          <header className="App-header">
            
            <img src={require("./images/logo.png")} className="AppLogo" alt="logo"/>
            <div className="vollkorn">Control your <span id='gold'>Growth</span></div>
            <div className="raleway">Your <span id="gold">Life</span></div>
            <Link to = "/Expenses" />
    
          </header>
        </div>
        </>
      );
};

export default Home;