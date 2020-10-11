import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux'
import {withRouter} from "react-router";
import '../../App.css';
import Menu from "../menu";
import {getDriverVehicles, takenPlaces, leavePlace, addDriver} from "../../store/actions/request";
import {Button, Form, Table} from "react-bootstrap";

const onMount = (props) => () => {
    props.takenPlaces()
    props.getDriverVehicles()
};

function Profile(props) {
    const {driverVehicles, takenPLaces} = props.requestReducer;

    const [driverFrom, setDriverForm] = useState({
        username: '',
        name: '',
        phone:'',
        surname: ''
    });
    useEffect(onMount(props), []);
    const changeForm = e =>{
        setDriverForm({...driverFrom,
            [e.target.name]: e.target.value})
    };

    const sendForm = () => {
        props.addDriver(driverFrom.username, driverFrom.name, driverFrom.surname, driverFrom.phone)
        setDriverForm({
            username: '',
            name: '',
            phone:'',
            surname: ''
        })
    };
    return (
        <div>
            <Menu/>

            <div className="container container-row">
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                            <th>PlaceId</th>
                            <th>Status</th>
                            <th>Parking name</th>
                            <th>Parking address</th>
                            <th>Driver Id</th>
                            <th>Model</th>
                            <th>Nomer</th>
                            <th>Leave place</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            takenPLaces.map(item =>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.placeId}</td>
                                    <td>{String(item.status)}</td>
                                    <td>{item.parkingName}</td>
                                    <td>{item.parkingAddress}</td>
                                    <td>{item.driverId}</td>
                                    <td>{item.model}</td>
                                    <td>{item.nomer}</td>
                                    <td>
                                        <Button onClick={() => props.leavePlace(`${item.id}`,`${item.placeId}` )}> Leave</Button>
                                    </td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Surname</th>
                            <th>Phone</th>
                            <th>Model</th>
                            <th>Nomer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            driverVehicles.map(item =>(
                                <tr>
                                    <td>{String(item.id)}</td>
                                    <td>{item.name}</td>
                                    <td>{item.surname}</td>
                                    <td>{item.phone}</td>
                                    <td>{item.model}</td>
                                    <td>{item.nomer}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
                <br/>
                <br/>
                <br/>
                <br/>
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Username</Form.Label>
                            <Form.Control type="username" placeholder="username" name="username" value={driverFrom.username} onChange={changeForm} />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="name" name="name" value={driverFrom.name} onChange={changeForm} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="phone" placeholder="phone" name="phone" value={driverFrom.phone} onChange={changeForm} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Surname</Form.Label>
                            <Form.Control type="surname" placeholder="surname" name="surname" value={driverFrom.surname} onChange={changeForm} />
                        </Form.Group>
                        <Button variant="primary" onClick={sendForm}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    requestReducer:state.requestReducer
});

const mapDispatchToProps = {
    getDriverVehicles,
    takenPlaces,
    leavePlace,
    addDriver

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Profile))
