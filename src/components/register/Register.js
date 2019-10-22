import React from 'react';
import './Register.css';
import registersJson from './registers.json';


class Register extends React.Component {

    constructor(props) {
        super(props);
        this.state = { registers: registersJson };
    }

    render() {
        return <div className="Register">
            <table className="table table-striped table-dark table-sm">
                <thead>
                    <tr>
                        <th scope="col">Registro</th>
                        <th scope="col">Valor</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.state.registers.map(register => <tr>
                            <th scope="row">{register.name}</th>
                            <td> {register.value || '0x00000000'}</td>
                            {/* <td> <input type="text" value={register.value || '0x00000000'} /> </td> */}
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    }

}

export default Register;

