import React, { Component, useState } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import history from './../history';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import moment from 'moment'
import axios from 'axios'
import TextField from '@material-ui/core/TextField';

export default function Calendarsa() {

    const [dateState, setDateState] = useState(new Date())
    const [nameState, setName] = useState('');

    const changeDate = (e) => {
        setDateState(e)
    }
    const changeName = (e) => {
        setName(e.target.value)
    }


    const sendDate = () => {
        return axios.post('http://localhost:8351/api/v1/post/appointment', {
            name: nameState,
            date: dateState
        })
            .then((response) => {
                console.log(response);
                if (response.status == 200) {
                    alert(`You have successfully booked an appointment for: ${moment(dateState).format('MMMM Do YYYY')}`)
                    window.location.reload(false);
                } else {
                    alert(`There was an arror booking your appointment`)
                    window.location.reload(false);
                }
            }, (error) => {
                alert(`We can not connect to the servers!`);
            });

    }

    return (
        <div style={{ margin: '50px 40px ' }}>
            <center>
                <Calendar
                    className="cal"
                    value={dateState}
                    onChange={changeDate}
                />
                <p>Current selected date is <b>{moment(dateState).format('MMMM Do YYYY')}</b></p>
                <p>Enter your name</p>
                <TextField
                    id="standard-full-width"
                    style={{ margin: 8 }}
                    margin="normal"
                    InputLabelProps={{
                        shrink: true,
                    }}
                    onChange={
                        changeName
                    }
                    required
                />
                <div style={{ width: "30%", position: "center", }}>
                    <ListGroup.Item>
                        <Button variant="btn btn-success" onClick={sendDate}>Book appointment</Button>
                    </ListGroup.Item>
                </div>

            </center>
        </div>
    )
} 
