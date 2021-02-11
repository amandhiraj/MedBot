import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
import { Card, ListGroup } from 'react-bootstrap';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import history from './../history';


class Contact extends Component {
/*     constructor(props) {
        super(props);
        const { name, label, placeholder, ...rest } = props
        this.onSubmit = this.onSubmit.bind(this);
    } */
    render() {

        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Symptoms Questionnaire</h2>
                    <Card style={{ width: '25rem' }}>
                        <div>
                            <form action="http://localhost:8351/api/v1/post/contact" method="POST">
                                <TextField
                                    id="standard-full-width"
                                    label="Name?"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    margin="normal"
                                    name="name"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                <TextField
                                    id="filled-full-width"
                                    label="Address?"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    margin="normal"
                                    name="address"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                <TextField
                                    id="filled-full-width"
                                    label="Description?"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    margin="normal"
                                    name="description"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                <TextField
                                    id="filled-full-width"
                                    label="symptoms?"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    margin="normal"
                                    name="symptoms"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />
                                 <TextField
                                    id="filled-full-width"
                                    label="Bloodtype?"
                                    style={{ margin: 8 }}
                                    fullWidth
                                    margin="normal"
                                    name="bloodtype"
                                    InputLabelProps={{
                                        shrink: true,
                                    }}
                                    required
                                />

                                <div>  <ListGroup.Item><Button variant="btn btn-success" method="post" type="submit">Submit Self-Assessment</Button></ListGroup.Item></div>

                            </form>
                        </div>
                    </Card>
                </div>

            </div>

        );
    }
}
export default Contact;