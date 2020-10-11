import React, {useEffect, useState} from 'react';
import '../../App.css';
import {Table, Dropdown, Form, Button} from 'react-bootstrap';
import Menu from "../../components/menu";
import {getParkings, takePlace, getFreePlaces} from "../../store/actions/request";
import {connect} from "react-redux";
import {withRouter} from "react-router";

const onMount = props => () => {
    props.getParkings();
    props.getFreePlaces();
};

function Parking(props) {

    const [takeForm, setTakeForm] = useState({
      place_id: null,
      vehicle_id: null
    });

    const changeForm = e =>{
        setTakeForm({...takeForm, [e.target.name]: e.target.value})
    };

    const sendForm = () => {
        props.takePlace(takeForm.vehicle_id, takeForm.place_id);
        setTakeForm({
            place_id: '',
            vehicle_id: ''
        })
    };

    const {parking, freePlaces} = props.requestReducer;
    useEffect(onMount(props), []);
    const isLoggedIn = (
        <Form>
            <Form.Group >

                <Form.Label>Place id</Form.Label>
                <Form.Control name="place_id" type="place_id" placeholder="place_id" value={takeForm.place_id} onChange={changeForm}/>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Driver vehicle Id</Form.Label>
                <Form.Control name="vehicle_id" type="vehicle_id" placeholder="Driver vehicle Id" value={takeForm.vehicle_id} onChange={changeForm}/>
            </Form.Group>

            <Button  variant="primary" onClick={sendForm} >
                Submit
            </Button>
        </Form>
    );

    return (
      <div>
         <Menu/>
          <div className="container container-row">
              <div>
              <Table striped bordered hover variant="dark">
                  <thead>
                  <tr>
                      <th>#</th>
                      <th>Address</th>
                      <th>Name</th>
                      <th>Status</th>
                  </tr>
                  </thead>
                  {console.log("cccccc", parking)}
                  <tbody>
                  {
                      parking.map(item =>(
                              <tr>
                                  <td>{item.id}</td>
                                  <td>{item.parkingAddress}</td>
                                  <td>{item.parkingName}</td>
                                  <td>{String(item.status)}</td>
                              </tr>

                      ))
                  }
                  </tbody>
              </Table>
          </div>
          <br/>
          <div>
              <div> <h2>Free places</h2>
                  <Table striped bordered hover variant="dark">
                      <thead>
                      <tr>
                          <th>#</th>
                          <th>Address</th>
                          <th>Name</th>
                          <th>Status</th>
                      </tr>
                      </thead>
                      {console.log("cccccc", parking)}
                      <tbody>
                      {
                          freePlaces.map(item =>(
                              <tr>
                                  <td>{item.id}</td>
                                  <td>{item.parkingAddress}</td>
                                  <td>{item.parkingName}</td>
                                  <td>{String(item.status)}</td>
                              </tr>

                          ))
                      }
                      </tbody>
                  </Table>
              </div>
              <br/>
              <div>
                  { isLoggedIn}
              </div>
          </div>
          </div>
      </div>
    );
}

const mapStateToProps = state => ({
    requestReducer:state.requestReducer,
});

const mapDispatchToProps = {
    getParkings,
    takePlace,
    getFreePlaces

};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(Parking))

