import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
function Navbars() {
    return (
        <Navbar dark color='primary'>
            <img src="/assets/images/logo.png" className="nav_img" />
            <NavbarBrand className="head">
                <p>Get Info</p>
            </NavbarBrand>
        </Navbar>
        //  <div className='container-fluid'>
        //     <div className='box'>
        //         <img src="/assets/images/iron.jpg" className="body_img" />
        //         <img src="/assets/images/iron.jpg" className="body_img" />
        //     </div>
        //     <div className='body_para'>
        //         <h2>Iron Man</h2>
        //         <p>
        //             The text-align property is used to set the
        //              horizontal alignment of a text.
        //         </p>
        //     </div>
        // </div>
    );
}

export default Navbars;