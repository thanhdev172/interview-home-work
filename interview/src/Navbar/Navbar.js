import React from "react";
import "./Navbar.css";

class Navbar extends React.Component {
  render() {
    return (
      <>
        <nav className="nav">
          <a href="#" className="wrap-logo">
            <img
              className="logo"
              src="https://yu.ctu.edu.vn/images/upload/article/2020/03/0305-logo-ctu.png"
            />
          </a>
          <a className="blog" href="#">
            Blog
          </a>
          <div className="user">
            <a href="#">
              <img
                className="user__avatar"
                src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
              />
            </a>
            <div className="user__name">Nguyen Cong Thanh</div>
          </div>
        </nav>
      </>
    );
  }
}

export default Navbar;
