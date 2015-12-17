
import React from 'react';
import { connect } from 'react-redux';

import Modal from 'react-bootstrap/lib/Modal';
import Input from 'react-bootstrap/lib/Input';
import Button from 'react-bootstrap/lib/Button';

import { Msg } from 'components/Msg';

import { login } from 'services/login-service';
import { __noop } from 'lib/mish';

@connect(s => s.login)
export class Login extends React.Component {

    doLogin = () => {
        var uname = this._uname.getValue();
        var passw = this._passw.getValue();
        this.props.dispatch(login(uname, passw));
    }

    render() {

        var isModalVisible = !this.props.status;

        return (
            <Modal show={isModalVisible} onHide={__noop}>
                <Modal.Header>
                    <Modal.Title>YouCollide Dashboard</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form className="form-horizontal">
                        <Input ref={c => this._uname = c} type="text" label="user" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                        <Input ref={c => this._passw = c} type="password" label="password" labelClassName="col-xs-2" wrapperClassName="col-xs-10" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Msg bsStyle="danger" className="pull-left" text={this.props.msg} />
                    <Button bsStyle="primary" onClick={this.doLogin}>Login</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
