import React, { Fragment } from "react";
import { Outlet, Link } from "react-router-dom";
import './navigation.component.scss'
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";

const Navigation = () => {
    return (
        <Fragment>
            <div className='navigation'>
                <Link to={'/'} className="nav-link" style={{paddingTop: '15px'}}>
                    <CrwnLogo className='logo'/>
                </Link>
                <div className="nav-links-container">
                    <Link to={'/'} className="nav-link">
                        HOME
                    </Link>
                    <Link to={'/shop'} className="nav-link" >
                        SHOP
                    </Link>
                    <Link to={'/signin'} className="nav-link" >
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet/>
        </Fragment>
    )
}

export default Navigation