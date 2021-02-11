import React, { Component, useState, useEffect } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Routes from '../Routes';
import TextField from '@material-ui/core/TextField';
import axios from 'axios';
import { CameraFeed } from '../components/camera-feed';
import ReactDOM from 'react-dom';
import { Widget } from "@uploadcare/react-widget";
import Logo from "./medicine.png";


// Upload to local seaweedFS instance
const uploadImage = async file => {
    const formData = new FormData();
    formData.append('file', file);

    // Connect to a seaweedfs instance
};


export default function Medicine() {


    const imageUpload = async (uuidS) => {
        return axios.post('http://localhost:8351/api/v1/post/imageUpload', {
            uuid: uuidS
        })
            .then((data) => {
                return JSON.stringify(data.data.split('\n'))
            }, (error) => {

            });

    }

    const [uuidKey, setUUID] = useState('')
    const [getData, setData] = useState('')

    const changeUUID = async (e) => {
        await setUUID(e.uuid)
        await imageUpload(e.uuid).then(userData => {
            setData(userData || "no data found");
        })
    }

    const changeData = (e) => {
        console.log(e)
        setData(e)
    }
    const APIKEY = 'YOUR UPLOAD KEY GOES HERE'
    const Example = () => (
        <Widget onChange={changeUUID} publicKey={APIKEY} clearable />
    );




    return (
        <div style={{ margin: '80px 150px', width: '80%', flexDirection: 'row', display: 'flex' }}>
            <img src={Logo} alt="website logo" style={{ height: '100%', width: '250px' }} />
            <div>
                <Card style={{ width: '20rem' }}>
                    <ListGroup>
                        <ListGroup.Item>Re-stock on your medicine here!</ListGroup.Item>
                    </ListGroup>
                </Card>
                <Card style={{ display: 'flex', width: '20rem' }}>
                    <ListGroup>
                        <ListGroup.Item>
                            <form action="http://localhost:8351/api/v1/post/medicine" method="POST">
                                <p>Enter Rxcode</p>
                                <TextField
                                    id="standard-full-width"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    margin="normal"
                                    value = {getData.replace('[', '').replace("\"", '').replace(']', '').split(',')[1]}
                                    name="rxcode"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                <p>Enter Dosage Amount</p>
                                <TextField
                                    id="standard-full-width"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    defaultValue={getData == '' ? '' : getData}
                                    value = {getData.replace('[', '').replace("\"", '').replace(']', '').split(',')[2]}
                                    name="dosage"
                                    margin="normal"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                <ListGroup.Item><Button variant="btn btn-success" method="post" type="submit">Submit Refill Request</Button></ListGroup.Item>
                            </form></ListGroup.Item>
                    </ListGroup>
                </Card>

            </div>
            <Card style={{ height: '70%', width: '100%', flexDirection: 'col', display: 'flex' }}>
                <ListGroup >
                    <ListGroup.Item  ><h3>Let our AI do the work for you! Just upload the image and wait for the results to populate!</h3></ListGroup.Item>
                    <p style={{
                        position: 'realitive',
                        top: '15px',
                        right: '56px'
                    }}>
                        <Example />
                    </p>

                    <p>
                        {getData}
                    </p>

                </ListGroup>
            </Card>
        </div >

    );
}
