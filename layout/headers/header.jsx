import Link from "next/link";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/common/sidebar";
import SidebarCart from "../../components/common/sidebar-cart";
import useCartInfo from "../../hooks/use-cart-info";
import useGlobalContext from "../../hooks/use-context";
import HeaderTop from "./headertop";
import NavMenu from "./navmenu";
import useUserData from "@/utils/UseUserdata";
import Cookies from "js-cookie";
import Router from "next/router";

const HeaderOne = () => {
  const token = Cookies.get("token");

  useEffect(() => {
    if (!token) {
      Router.push("/");
    }
  }, [token]);

  const logout = () => {
    Cookies.remove("token");
    Router.push("/");
  };

  const userData = useUserData();
  console.log(userData);
  const [openCart, setOpenCart] = useState(false);
  const { quantity } = useCartInfo();
  const { setShowSidebar } = useGlobalContext();

  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector(".header-main");
      if (window.scrollY >= 40) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        id="header"
        className="tra-menu navbar-dark light-hero-header white-scroll"
      >
        <div className="header-wrapper">
          <div className="wsmobileheader clearfix">
            <span className="smllogo">
              <img src="/assets/images/logo-white.png" alt="mobile-logo" />
            </span>
            <a id="wsnavtoggle" className="wsanimated-arrow">
              <span></span>
            </a>
          </div>

          <div className="wsmainfull menu clearfix">
            <div className="wsmainwp clearfix">
              <div className="desktoplogo">
                <Link href="/">
                  <a className="logo-black">
                    <img
                      className="light-theme-img"
                      src="/assets/images/logo-white.png"
                      alt="logo"
                    />
                    <img
                      className="dark-theme-img"
                      src="/assets/images/logo-white.png"
                      alt="logo"
                    />
                  </a>
                </Link>
              </div>

              <div className="desktoplogo">
                <Link href="/">
                  <a className="logo-white">
                    <img src="/assets/images/logo-white.png" alt="logo" />
                  </a>
                </Link>
              </div>

              <nav className="wsmenu clearfix">
                <div className="overlapblackbg"></div>
                <ul className="wsmenu-list nav-theme">
                  <li aria-haspopup="true">
                    <span className="wsmenu-click">
                      <i className="wsmenu-arrow"></i>
                    </span>
                    <Link href="/">
                      <a className="h-link">Home</a>
                    </Link>
                  </li>

                  <li className="nl-simple" aria-haspopup="true">
                    <Link href="/">
                      <a className="h-link">Features</a>
                    </Link>
                  </li>

                  <li aria-haspopup="true">
                    <span className="wsmenu-click">
                      <i className="wsmenu-arrow"></i>
                    </span>
                    <Link href="/">
                      <a className="h-link">About</a>
                    </Link>
                  </li>

                  <li className="nl-simple" aria-haspopup="true">
                    <Link href="/">
                      <a className="h-link">Help Center</a>
                    </Link>
                  </li>

                  {userData ? (
                    <>
                      <li aria-haspopup="true">
                        <span className="wsmenu-click">
                          <i className="wsmenu-arrow"></i>
                        </span>
                        <a href="#" className="h-link">
                          User <span className="wsarrow"></span>
                        </a>
                        <ul className="sub-menu">
                          <span className="text-left">
                            Welcome, {userData.user.name}
                          </span>

                          <li aria-haspopup="true">
                            <Link href="/mydashboard">
                              <a>My Dashboard</a>
                            </Link>
                          </li>
                          <li>
                            <button
                              className="nl-simple reg-fst-link mobile-last-link"
                              onClick={logout}
                            >
                              Logout
                            </button>
                          </li>
                        </ul>
                      </li>
                    </>
                  ) : (
                    <>
                      <li
                        className="nl-simple reg-fst-link mobile-last-link"
                        aria-haspopup="true"
                      >
                        <Link href="/login">
                          <a className="h-link">Sign in</a>
                        </Link>
                      </li>
                      <li className="nl-simple" aria-haspopup="true">
                        <Link href="/register">
                          <a className="btn r-04 btn--theme hover--tra-white">
                            Sign up
                          </a>
                        </Link>
                      </li>
                    </>
                  )}
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
