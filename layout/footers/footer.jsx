import Link from 'next/link';
import React from 'react';

const FooterOne = () => {
    return (
        <footer id="footer-3" className="pt-100 footer ft-3-ntr">
        <div className="container">


        
            <div className="row">


              
                <div className="col-xl-3">
                    <div className="footer-info">
                        <img className="footer-logo" src="/assets/images/logo-white.png" alt="footer-logo" />
                        <img className="footer-logo-dark" src="/assets/images/logo-white.png" alt="footer-logo" />
                    </div>	
                </div>	


                



               
                <div className="col-sm-4 col-lg-6 col-xl-6">
                    <div className="footer-links fl-3">
                                        
                       
                        <h6 className="s-17 w-700">Usefull Links</h6>

                   
                        <ul className="foo-links clearfix d-flex align-items-center justify-content-between">
                            <li className='mr-2'><p><a href="/">Features</a></p></li>										
                            <li className='mr-2'><p><a href="/">How it works</a></p></li>
                            <li className='mr-2'><p><a href="/">Sign In</a></p></li>
                            <li ><p><a href="#">Signup</a></p></li>
                        </ul>

                    </div>	
                </div>


              
                <div className="col-sm-10 col-md-8 col-lg-4 col-xl-3">
                    <div className="footer-form">

                       
                        <h6 className="s-17 w-700">Help Center</h6>

                        <span className='mr-2'>Email Us:</span> Info@milpaq.com

                     
                                       
                    </div>	
                </div>


            </div>


            <hr />	


         
            <div className="bottom-footer">
                <div className="row row-cols-1 row-cols-md-2 d-flex align-items-center">


                    
                    <div className="col">
                        <div className="footer-copyright">
                            <p className="p-sm">&copy; 2023 Milpaq. <span>All Rights Reserved</span></p>
                        </div>
                    </div>


                   
                    <div className="col">
                        <ul className="bottom-footer-socials ico-20 text-end">
                            <li><a href="#"><span className="flaticon-facebook"></span></a></li>
                            <li><a href="#"><span className="flaticon-twitter"></span></a></li>
                            <li><a href="#"><span className="flaticon-instagram"></span></a></li>
                            <li><a href="#"><span className="flaticon-youtube"></span></a></li>
                        </ul>
                    </div>


                </div>  
            </div>	


        </div>    
    </footer>   
    );
};

export default FooterOne;