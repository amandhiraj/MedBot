import React, { Component } from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import Routes from '../Routes';
import {Link} from '@material-ui/core';
import history from './../history';

class Products extends Component {
    render() {
        return (
            <div style={{ display: 'flex', justifyContent: 'center', padding: 30 }}>
                <div><h2>Products Page</h2>
                    <Card style={{ width: '12rem' }}>
                        <ListGroup>
                            <ListGroup.Item><Button variant = "btn btn-success" onClick={() => history.push('/Medicines')}>Restock Medicine</Button></ListGroup.Item>
                            <ListGroup.Item><Button variant = "btn btn-success" onClick={() => history.push('/Contact')}>Self Assessment</Button></ListGroup.Item>
                        </ListGroup>
                    </Card>
                </div>
            </div>
        );
    }
}

export default Products;