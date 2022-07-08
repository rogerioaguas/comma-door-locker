import React from "react";
import Form from 'react-bootstrap/Form';
import {Row, Col, Container} from 'react-bootstrap'
import {EventEmitter} from '../Util/EventEmitter'

function updateUrl(url) {
    EventEmitter.emit('URL',url.target.value)
}

export function Url() {
    return (<>
        <Container>
            <Row>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Connect to:</Form.Label>
                            <Form.Control placeholder="http://x.x.x.x:5000 or http://[uri]:[port]"
                                          onChange={updateUrl}/>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    </>)
}
