import React, {useEffect, useState} from "react";
import {Button, Row, Col} from "react-bootstrap";
import ToastContainer from 'react-bootstrap/ToastContainer';
import Toast from 'react-bootstrap/Toast';
import {LockFill, UnlockFill} from "react-bootstrap-icons";
import axios from "axios";
import {EventEmitter} from '../Util/EventEmitter'
import {Loading} from "./Loading.component";
import {sleep} from "../Util/Sleep";

export function DoorManipulation() {

    let [url, setUrl] = useState('');
    let [loadingEnabled, setLoadingEnabled] = useState(false);
    let [toastType, setToastType] = useState('success')
    let [message, setMessage] = useState('')
    let [toastShow, setToastShow] = useState(false)

    useEffect(() => {
        if (toastShow) {
            sleep(3000).then(toggleToast)
        }
    })

    function lockDoor() {
        setLoadingEnabled(true)
        axios.get(`${url}/lock`)
            .then(() => {
                toastAction("success", 'Your door should be locked')
                setLoadingEnabled(false)
            })
            .catch(() => {
                toastAction("danger", 'Check connection with comma device')
                setLoadingEnabled(false)
            })
    }

    function unlockDoor() {
        setLoadingEnabled(true)
        axios.get(`${url}/lock`)
            .then(() => {
                toastAction("success", 'Your door should be unlocked')
                setLoadingEnabled(false)
            })
            .catch(() => {
                toastAction("danger", 'Check connection with comma device')
                setLoadingEnabled(false)
            })
    }

    function isLoadingEnabled() {
        return loadingEnabled
    }

    function toastAction(type, message, delay) {
        setToastType(type);
        setMessage(message);
        toggleToast()
    }


    function toggleToast() {
        setToastShow(!toastShow)
    }

    EventEmitter.listen('URL', setUrl)

    return (<>
        {isLoadingEnabled() ? <Loading/> : ''}

        <ToastContainer className="p-3" position='top-center'>
            <Toast bg={toastType} show={toastShow} onClose={toggleToast}>
                <Toast.Header closeButton={true}>
                    <img
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">{toastType === 'danger' ? "Error" : "Success"}</strong>
                </Toast.Header>
                <Toast.Body>{message}</Toast.Body>
            </Toast>
        </ToastContainer>

        <Row className='text-center mt-5'>
            <Col>
                <Button variant="success" className='rounded-circle p-5' onClick={unlockDoor}><UnlockFill
                    size='96'/></Button>
            </Col>
        </Row>
        <Row className="mt-5 mb-3 text-center">
            <Col>
                <Button variant="danger" className='rounded-circle p-5' onClick={lockDoor}><LockFill
                    size='96'/></Button>{' '}
            </Col>
        </Row>
    </>)
}
