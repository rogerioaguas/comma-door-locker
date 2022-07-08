import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {DoorManipulation} from "./DoorManipulation.component";
import {Url} from "./Url.component";

function Home() {
    if ('serviceWorker' in navigator) {
        window.addEventListener('load', function () {
            navigator.serviceWorker.register('/service-worker.js');
        });
    }
    return (
        <Container>
            <Row>
                <Col>
                    <h1 className='text-center'>Welcome To UI Locked and Unlocked Door</h1>
                </Col>
            </Row>
            <Url/>
            <DoorManipulation/>
        </ Container>
    )

}

export default Home
