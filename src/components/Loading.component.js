import {Spinner, Row, Col} from "react-bootstrap";
import React from "react";
import "./Loading.css"

export function Loading() {
    return (<>
        <div class='background'>
            <div className='text-center'>
                <Spinner animation="border" role="status" variant="primary">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
                <Row>
                    <Col>
                        <h3 className='text-white'>Loading...</h3>
                    </Col>
                </Row>
            </div>
        </div>

    </>)
}
