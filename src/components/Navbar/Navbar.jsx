import React from 'react';
import { NavLink } from "react-router-dom";


const Navbar = ({ lang, setLangs }) => {
   return (
      <>
         {/* <!-- Navbar --> */}
         <nav className="navbar navbar-expand-lg navbar-light bg-light">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">
               {/* <!-- Toggle button --> */}
               <button
                  className="navbar-toggler"
                  type="button"
                  data-mdb-toggle="collapse"
                  data-mdb-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <i className="fas fa-bars"></i>
               </button>

               {/* <!-- Collapsible wrapper --> */}
               <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  {/* <!-- Navbar brand --> */}
                  <a className="navbar-brand mt-2 mt-lg-0" href="#">
                     <img
                        src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
                        height="15"
                        alt="MDB Logo"
                        loading="lazy"
                     />
                  </a>
                  {/* <!-- Left links --> */}
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                     <li className="nav-item">
                        <NavLink to="/" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                           {lang.Dashboard}
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/team" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                           {lang.Team}
                        </NavLink>
                     </li>
                     <li className="nav-item">
                        <NavLink to="/projects" className={({ isActive }) => isActive ? "fw-bold text-primary nav-link" : "nav-link"}>
                           {lang.Projects}
                        </NavLink>
                     </li>
                  </ul>
                  {/* <!-- Left links --> */}
               </div>
               {/* <!-- Collapsible wrapper --> */}

               {/* <!-- Right elements --> */}
               <div className="d-flex align-items-center">
                  {/* <!-- Icon --> */}

                  <select className="form-select m-2" onChange={(e) => setLangs(e.target.value)}>
                     <option>en</option>
                     <option>uz</option>
                     <option>ru</option>
                  </select>

                  {/* <!-- Notifications --> */}
                  <div className="dropdown">
                     <a
                        className="text-reset me-3 dropdown-toggle hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuLink"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >
                        <i className="fas fa-bell"></i>
                        <span className="badge rounded-pill badge-notification bg-danger">1</span>
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuLink"
                     >
                        <li>
                           <a className="dropdown-item" href="#">{lang.SomeNews}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{lang.AnotherNews}</a>
                        </li>

                     </ul>
                  </div>
                  {/* <!-- Avatar --> */}
                  <div className="dropdown">
                     <a
                        className="dropdown-toggle d-flex align-items-center hidden-arrow"
                        href="#"
                        id="navbarDropdownMenuAvatar"
                        role="button"
                        data-mdb-toggle="dropdown"
                        aria-expanded="false"
                     >
                        <img
                           src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
                           className="rounded-circle"
                           height="25"
                           alt="Black and White Portrait of a Man"
                           loading="lazy"
                        />
                     </a>
                     <ul
                        className="dropdown-menu dropdown-menu-end"
                        aria-labelledby="navbarDropdownMenuAvatar"
                     >
                        <li>
                           <a className="dropdown-item" href="#">{lang.profile}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{lang.settings}</a>
                        </li>
                        <li>
                           <a className="dropdown-item" href="#">{lang.Logout}</a>
                        </li>
                     </ul>
                  </div>
               </div>
               {/* <!-- Right elements --> */}
            </div>
            {/* <!-- Container wrapper --> */}
         </nav>
         {/* <!-- Navbar -->   */}
      </>
   );
};

export default Navbar;