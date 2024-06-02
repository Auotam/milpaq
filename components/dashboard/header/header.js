import React from 'react';
import useUserData from '@/utils/UseUserdata';

const Header = () => {
  const userData = useUserData();

  // Function to get initials from user's name
  const getInitials = (name) => {
    return name
      .split(' ')
      .map((part) => part.charAt(0))
      .join('')
      .toUpperCase();
  };

  if (!userData) {
    return null;
  }

  return (
    <header className="header">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-5 col-md-5 col-6">
            <div className="header-left d-flex align-items-center">
              <div className="menu-toggle-btn mr-15">
                {/* Display user initials instead of image */}
                
              </div>
              <div className="header-search d-none d-md-flex">
                <form action="#">
                  <input type="text" placeholder="Search..." />
                  <button>
                    <i className="lni lni-search-alt"></i>
                  </button>
                </form>
              </div>
            </div>
          </div>
          <div className="col-lg-7 col-md-7 col-6">
            <div className="header-right">
              {/* Notification and Message boxes */}
              {/* Profile box */}
              <div className="profile-box ml-15">
                <button className="dropdown-toggle bg-transparent border-0" type="button" id="profile" data-bs-toggle="dropdown" aria-expanded="false">
                  <div className="profile-info">
                    <div className="info">
                      <div className="image">
                        {/* Display user initials instead of image */}
                        <div className="profile-image">{getInitials(userData.user.name)}</div>
                      </div>
                      <div>
                        <h6 className="fw-500">{userData.user.name}</h6>
                        <p>{userData.user.role}</p>
                      </div>
                    </div>
                  </div>
                </button>
                <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="profile">
                  <li>
                    <div className="author-info flex items-center !p-1">
                      <div className="content">
                        <h4 className="text-sm">{userData.user.name}</h4>
                        <a className="text-black/40 dark:text-white/40 hover:text-black dark:hover:text-white text-xs" href="#">{userData.user.email}</a>
                      </div>
                    </div>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-user"></i> View Profile
                    </a>
                  </li>
                  <li>
                    <a href="#0">
                      <i className="lni lni-alarm"></i> Notifications
                    </a>
                  </li>
                  <li>
                    <a href="#0"> <i className="lni lni-inbox"></i> Messages </a>
                  </li>
                  <li>
                    <a href="#0"> <i className="lni lni-cog"></i> Settings </a>
                  </li>
                  <li className="divider"></li>
                  <li>
                    <a href="#0"> <i className="lni lni-exit"></i> Sign Out </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
