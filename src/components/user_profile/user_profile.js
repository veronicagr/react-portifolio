import React from "react";
import { Row, Col, Card } from 'react-materialize';
import avatar from '../../images/avatar.png';

const UserProfile = () => (
    <Card>
        <Row>
            <Col s={8} m={8} offset="s2 m2">
                <img src={avatar} className="circle responsive-img" />
            </Col>
        </Row>
        <Row className="center-align">
            <h5 >Verônica Gomes</h5>
            <p className="red darken-2 white-text">FrontEnd Developer</p>
        </Row>
    </Card>
);
export default UserProfile;