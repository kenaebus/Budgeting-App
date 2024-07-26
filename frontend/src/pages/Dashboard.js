import React from 'react';
import { Link } from 'react-router-dom';
import './Dashboard.css';


function Dashboard() {
    return (
    <>
        <div className="Dashboard">
             <div class = "header">
                <div class="logo">
                <span class="logo-icon">
                    <img alt="logo-img"></img> {/**IMPORTANT ADD IMG */}
                    </span>
                    <h1 class = "logo-title">
                        <span>Dashboard</span> {/**INSERT TITLE HERE */}
                    </h1>
                </div>
             </div>

             <div class="dashboard-header-actions">
                <button class="user-profile">
                    <span>John Doe</span>
                    <span>
                        <img alt="user-photo" /> {/**IMPORTANT ADD IMG */}
                    </span>
                </button>
            </div>

            <div class ="dashboard-body">
                <div class="dashboard-body-navigation">
                <nav class="navigation">
                    <Link to = "/Dashboard">Dashboard</Link>
                    <br/>
                    <Link to = "/Expenses">Expenses</Link>
                    <br/>
                    <Link to = "/Incomes">Incomes</Link>
                </nav>

                <footer class="footer">
                    <div>
                        Test
                    </div>
                </footer>
            </div>
            </div>
            <div class="dashboard-body-main-content">
                <section class="dashboard-section">
                <h2>Overview</h2>
                </section>
                <div class="tiles">
                    <article class="tile">
                        <div class="tile-header">
                            <h3>
                                <span>Net Worth</span>
                            </h3>
                        </div>
                    </article>
                    <article class="tile">
                        <div class="tile-header">
                            <h3>
                                <span>Budget</span>
                            </h3>
                        </div>
                    </article>
                    <article class="tile">
                        <div class="tile-header">
                            <h3>
                                <span>Spending</span>
                            </h3>
                        </div>
                    </article>
                </div>
            </div>

        </div>    
      
    </>
    );
};

export default Dashboard;