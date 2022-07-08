import React from "react";
import {Row, Col, Container} from "react-bootstrap";
import {DoorManipulation} from "./DoorManipulation.component";
import {Url} from "./Url.component";
import PwaInstallPopupIOS from 'react-pwa-install-ios';

function Home() {
    return (
        <>
            <PwaInstallPopupIOS
                delay={3}
                lang="en"
                appIcon={process.env.PUBLIC_URL + "/icons/icon-192x192.png"}>
            </PwaInstallPopupIOS>
            <Container>
                <Row>
                    <Col>
                        <h1 className='text-center'>Welcome To UI Locked and Unlocked Door</h1>
                    </Col>
                </Row>
                <Url/>
                <DoorManipulation/>
            </ Container>
        </>
    )

}

export default Home
