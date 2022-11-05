import React, { useEffect, useState } from 'react';
import "./NavBar.css";

function NavBar() {
    
    const [show , handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return  () => {
            window.removeEventListener("scroll" , () => {
                console.log(Error)
            });
        };
        }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
        <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1198px-Netflix_2015_logo.svg.png?20190206123158"
        alt="Error"
        />
        <img
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png?20201013161117"
        alt="Error"
        />

    </div>
  );
};

export default NavBar;