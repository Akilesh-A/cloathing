import React from "react";
import '../Footer/Footer.css'
import logo from '../Footer/logo.png'

function Footer(){
    return(
        <div className="container-fluid">
            <div className="footer">
                <div className="footer_top">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="logo">
                                <a href=""><img src={logo} alt="" /></a>
                                <p>The customer is at the heart of our unique business model, which includes design.</p>

                            </div>

                        </div>
                      
                        <div className="col-md-6">
                            <div className="logo_list">
                                <div className="lists">
                                    <h5>Shopping</h5>
                                    <p><a href="">Contact</a></p>
                                    <p><a href="">Shop</a></p>
                                    <p><a href="">Support</a></p>


                                </div>
                                

                            </div>

                        </div>
                    </div>

                </div>

                <div className="footer_bottom">
                    <div className="company_name">
                        <p>© 2024. All rights reserved.Made with  <span className="heart">💘</span>by <a href=""> Akilesh.A</a></p>

                    
                    </div>
                    
                </div>


            </div>


        </div>
    )

}
export default Footer