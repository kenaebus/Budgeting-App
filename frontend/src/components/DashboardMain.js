import React from 'react'
import { Link } from 'react-router-dom';
import logo from '../images/lusore_img.png'
import expandButton from '../images/expandButton.png'

function DashboardMain() {
    return (
        <> 
            <div class="bg-grey-blue grid-container grid grid-cols-3">
                <div class="bg-dark-grey p-3 m-3 ml-10 rounded-2xl">
                    <img class="size-10 top-80" src={logo} alt="logo"/>
                    <hr class="h-1 mx-auto my-4 border-0 rounded-2xl md:my-9 bg-gold"></hr>
                    <div class="bg-grey-blue rounded-2xl m-5">
                        <img alt="Logo-Image"/>
                        <p class="text-gold">Jane Doe</p>
                        <hr class="h-1 mx-auto my-4 border-0 rounded md:my-2 bg-gold"></hr>
                    </div>

                    <div class="grid grid-cols-2">

                        <div>
                            <img alt="Dashboard-icon"/>
                            <img alt="Accounts-icon"/>
                            <img alt="Transactions-icon"/>
                            <img alt="Budget-icon"/>
                            <img alt="Goals-icon"/>
                            <img alt="Help-icon"/>

                        </div>

                        <div>
                            <div class="bg-grey-blue round-2xl m-5 w-32">
                                <p class="text-gold">Dashboard</p>

                            </div>

                            <div class="bg-grey-blue round-2xl m-5 w-32">
                                <p class="text-gold">Accounts</p>

                            </div>

                            <div class="bg-grey-blue round-2xl m-5 w-32">
                                <p class="text-gold">Transactions</p>

                            </div>

                            <div class="bg-grey-blue round-2xl m-5 w-32">
                                <p class="text-gold">Budget</p>

                            </div>

                            <div class="bg-grey-blue round-2xl m-5 w-32">
                                <p class="text-gold">Goals</p>

                            </div>

                            <div class="bg-grey-blue round-2xl m-5 w-32">
                                <p class="text-gold">Help</p>

                            </div>
                        </div>
                    </div>
                </div>

                <div class="bg-dark-grey p-3 m-3 mr-20 col-span-2 rounded-2xl">
                    <img class="size-7 top-80" src={expandButton} alt="Expand Button"/>
                    <hr class="h-1 mx-auto my-4 border-0 rounded md:my-11 bg-gold"></hr>
                    
                    <div class="grid grid-cols-2">
                        <div class="bg-grey-blue p-3 m-3 rounded-2xl">
                            <p class="text-gold">
                                <Link to = "/Incomes">Incomes</Link>
                            </p>
                        </div>
                        <div class="bg-grey-blue p-3 m-3 rounded-2xl">
                            <p class="text-gold">
                                <Link to = "/Expenses">Expenses</Link>
                            </p>
                        </div>
                    </div>
                    
                    <div class="grid grid-cols-4">
                        <div class="bg-grey-blue p-3 m-3 rounded-2xl">
                            <p class="text-gold">Networth</p>
                        </div>
                        
                        <div class="bg-grey-blue p-3 m-3 rounded-2xl">
                            <p class="text-gold">Investments</p>
                        </div>

                        <div class="bg-grey-blue p-3 m-3 rounded-2xl">
                            <p class="text-gold">Liabilities</p>
                        </div>

                        <div class="bg-grey-blue p-3 m-3 rounded-2xl">
                            <p class="text-gold">Goals</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    )
}

export default DashboardMain;