import React from 'react';
import { Link } from 'react-router-dom';
import DashboardMain from '../components/DashboardMain';


function Dashboard() {
    return (
    <>
        <DashboardMain/>
        <div className="Dashboard">
             <div className= "header">
                <div className="logo">
                <span className="logo-icon">
                    <img alt="logo-img"></img> {/**IMPORTANT ADD IMG */}
                    </span>
                    <h1 className = "logo-title">
                        <span>Dashboard</span> {/**INSERT TITLE HERE */}
                    </h1>
                </div>
             </div>

             <div className="dashboard-header-actions">
                <button className="user-profile">
                    <span>John Doe</span>
                    <span>
                        <img alt="user-photo" /> {/**IMPORTANT ADD IMG */}
                    </span>
                </button>
            </div>

            <div className ="dashboard-body">
                <div className="dashboard-body-navigation">
                <nav className="navigation">
                    <Link to = "/Dashboard">Dashboard</Link>
                    <br/>
                </nav>

                <div className="dashboard-body-main-content">
                <section className="dashboard-section">
                <h2>Overview</h2>
                </section>
                <div className="tiles">
                    <article className="tile">
                        <div className="tile-header">
                            <h3>
                                <span>Net Worth</span>
                            </h3>
                        </div>
                    </article>
                    <article className="tile">
                        <div className="tile-header">
                            <h3>
                                <span>Budget</span>
                            </h3>
                        </div>
                    </article>
                    <article className="tile">
                        <div className="tile-header">
                            <h3>
                                <span>Spending</span>
                            </h3>
                        </div>
                    </article>
                </div>
            </div>

                <footer className="footer">
                    <div>
                        Footer
                    </div>
                </footer>
            </div>
            </div>

        </div>    
      
    </>
    );
};


export default Dashboard;