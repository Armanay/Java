
import React, {useEffect, useState} from 'react';
import '../../App.css';
import {Form, Button, Table} from 'react-bootstrap';
import Menu from "../menu";
import {addVehicle, getVehicles, setVehicleToDriver} from "../../store/actions/request";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const onMount = (props) => () => {
    props.getVehicles()
};


function Vehicle(props) {
    const {vehicles} = props.requestReducer;
    useEffect(onMount(props), []);

    const [vehForm, setVehForm] = useState({
        model: '',
        nomer: ''
    });
    const [driverVehForm, setDriverVehForm] = useState({
        driverId: null,
        vehicleId: null
    });



    const changeForm = e =>{
        setVehForm({...vehForm,
            [e.target.name]: e.target.value})
    };
    const changeVehDriverForm = e =>{
        setDriverVehForm({...driverVehForm,
            [e.target.name]: e.target.value})
    };

    const sendForm = () => {
        props.addVehicle(vehForm.model, vehForm.nomer)
    };
    const sendVehicleToDRiver = () => {
        props.setVehicleToDriver(driverVehForm.driverId, driverVehForm.vehicleId)
    };

    return (
        <div>
            <Menu/>
            <div className="container container-row">
                <div>
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Model</Form.Label>
                            <Form.Control type="model" placeholder="model" name="model" value={vehForm.model} onChange={changeForm} />

                        </Form.Group>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Nomer</Form.Label>
                            <Form.Control type="nomer" placeholder="nomer" name="nomer" value={vehForm.nomer} onChange={changeForm} />
                        </Form.Group>
                        <Button variant="primary" onClick={sendForm}>
                            Submit
                        </Button>
                    </Form>
                </div>
                <br/>
                <br/>
                <div>
                    <Table striped bordered hover variant="dark">
                        <thead>
                        <tr>
                            <th>#</th>
                            <th>Model</th>
                            <th>Nomer</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            vehicles.map(item =>(
                                <tr>
                                    <td>{item.id}</td>
                                    <td>{item.model}</td>
                                    <td>{item.nomer}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </Table>
                </div>
                <div className="container container-row">
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Driver id</Form.Label>
                            <Form.Control type="driverId" placeholder="driverId" name="driverId" value={driverVehForm.driverId} onChange={changeVehDriverForm} />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Vehicle id</Form.Label>
                            <Form.Control type="vehicleId" placeholder="vehicleId" name="vehicleId" value={driverVehForm.vehicleId} onChange={changeVehDriverForm} />
                        </Form.Group>
                        <Button variant="primary" onClick={sendVehicleToDRiver}>
                            Submit
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = state => ({
    requestReducer:state.requestReducer,
});

const mapDispatchToProps = {
    addVehicle,
    getVehicles,
    setVehicleToDriver
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Vehicle))

