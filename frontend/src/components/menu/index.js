
import React from 'react';
import {withRouter} from "react-router";
import { connect } from 'react-redux'
import '../../App.css';
import { Button} from 'react-bootstrap';
import {Link} from "react-router-dom";

function Menu(props) {

    const isLoggedIn = (
        <>
            <Link to={'/userInfo'}><Button variant="secondary">Users</Button></Link>
            <Link to={'/'}><Button variant="success">List of all Parking</Button></Link>
            <Link to={'/newVehicle'}><Button variant="warning">Add Vehicle</Button></Link>
            </>
    );

    return (
           <header className="header-menu">
                   {isLoggedIn}
           </header>
    );
}

export default connect(
)(withRouter(Menu))
