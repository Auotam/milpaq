import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Sidebar from '../../components/common/sidebar';
import SidebarCart from '../../components/common/sidebar-cart';
import useCartInfo from '../../hooks/use-cart-info';
import useGlobalContext from '../../hooks/use-context';
import HeaderTop from './headertop';
import NavMenu from './navmenu';
import useUserData from '@/utils/UseUserdata'; 
import Cookies from 'js-cookie'
import Router from 'next/router'


const HeaderOne = () => {

	const token = Cookies.get('token')

	useEffect(() => {
	  if (!token) {
		Router.push('/')
	  }
	}, [])
  
	const logout = () => {
	  Cookies.remove('token')
	  Router.push('/')
	}
  
	const userData = useUserData();
	console.log(userData)
    const [openCart,setOpenCart] = useState(false)
    const { quantity } = useCartInfo();
    //for mobile menu
    const { setShowSidebar } = useGlobalContext();



	
	window.addEventListener('scroll', function() {
		"use strict";
	
		/*----------------------------------------------------*/
		/* Navigtion Menu Scroll
		/*----------------------------------------------------*/
	
		var b = window.scrollY;
	
		if (b > 80) {
			var wsmainfull = document.querySelector('.wsmainfull');
			wsmainfull.classList.add('scroll');
		} else {
			var wsmainfull = document.querySelector('.wsmainfull');
			wsmainfull.classList.remove('scroll');
		}
	});
	
    // Sticky Menu Area start
	// useEffect(() => {
	// 	window.addEventListener('scroll', sticky);
	// 	return () => {
	// 	   window.removeEventListener('scroll', sticky);
	// 	};
    
	//  });
  
	 const sticky = (e) => {
		const header = document.querySelector('.header-main');
		const scrollTop = window.scrollY;
		scrollTop >= 40 ? header.classList.add('sticky') : header.classList.remove('sticky');
	 };
	 // Sticky Menu Area End
    return (
        <>
<header id="header" className="tra-menu navbar-light white-scroll">
				<div className="header-wrapper">


					
				    <div className="wsmobileheader clearfix">	  	
				    	<span className="smllogo"><img src="/assets/images/logo-white.png" alt="mobile-logo" /></span>
				    	<a id="wsnavtoggle" className="wsanimated-arrow"><span></span></a>	
				 	</div>


				 	
				  	<div className="wsmainfull menu clearfix">
	    				<div className="wsmainwp clearfix">


	    					
	    					<div className="desktoplogo">
	    						<a href="#hero-10" className="logo-black">
	    							<img className="light-theme-img" src="/assets/images/logo-white.png" alt="logo" />
	    							<img className="dark-theme-img" src="/assets/images/logo-white.png" alt="logo" />
	    						</a>
	    					</div>

	    					
	    					<div className="desktoplogo">
	    						<a href="#hero-10" className="logo-white"><img src="/assets/images/logo-white.png" alt="logo" /></a>
	    					</div>


	    					
	      					<nav className="wsmenu clearfix"><div className="overlapblackbg"></div>
	        					<ul className="wsmenu-list nav-theme">


								<li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow"></i></span><a href="/" className="h-link">Home <span className="wsarrow"></span></a>
	            						
										</li>

										<li className="nl-simple" aria-haspopup="true"><a href="#features-11" className="h-link">Features</a></li>


						          	<li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow"></i></span><a href="/about" className="h-link">About <span className="wsarrow"></span></a>
	            						
								    </li>


								    

								    


								    

						          	
							    	<li className="nl-simple" aria-haspopup="true"><a href="/help-center" className="h-link">Help Center</a></li>


									{userData ? (
										<>
											
											<li aria-haspopup="true"><span className="wsmenu-click"><i className="wsmenu-arrow"></i></span><a href="#" className="h-link">User <span className="wsarrow"></span></a>
											<ul className="sub-menu">
												<li aria-haspopup="true"><a href="#lnk-1"><span>Welcome, {userData.user.email}</span></a></li>
												<li aria-haspopup="true"><a href="#features-2"><span>{userData.name}</span></a></li>
												<button className='nl-simple reg-fst-link mobile-last-link' onClick={logout}>Logout </button>
											   </ul>
										</li>

					</>
                ): <>	<li className="nl-simple reg-fst-link mobile-last-link" aria-haspopup="true">
				<a href="/login" className="h-link">Sign in</a>
			</li>


			
			<li className="nl-simple" aria-haspopup="true">
				<a href="/signup" className="btn r-04 btn--theme hover--tra-white last-link">Sign up</a>
			</li> </> }
							    	
							    


	        					</ul>
	        				</nav>


	    				</div>
	    			</div>	


				</div>   
			</header>

            {/* sidebar start */}
                {/* <Sidebar /> */}
            {/* sidebar end */}

            {/* side cart */}
            {/* <SidebarCart openCart={openCart} setOpenCart={setOpenCart}/> */}
            {/* side cart */}
        </>
    );
};

export default HeaderOne;