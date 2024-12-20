import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { addEmployee } from '../services/EmployeeService'

const EmployeeComponent = () => {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')


    const navigator = useNavigate();

    function handleFirstName(e) {
        setFirstName(e.target.value);
    }

    function handleLstName(e) {
        setLastName(e.target.value);
    }

    function handleEmail(e) {
        setEmail(e.target.value);
    }

    function saveEmployee(e) {
        e.preventDefault();

        const employee = {firstName, lastName, email}

        console.log(employee);

        addEmployee(employee).then(response => {
            console.log(response.data);

        navigator('/employees');
    })
    
}


return (
<div className='container'>
    <br></br>
    <div className='rows'>
        <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add Employee</h2>
            <div className='card-body'>
                <form>
                    <div className='form-group mb-2'>
                        <label className='form-lable'>First Name:</label>
                        <input
                            type='text'
                            placeholder='Enter Employee First NAme'
                            name='firstName'
                            value={firstName}
                            className='form-control'
                            onChange={handleFirstName}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-lable'>Last Name:</label>
                        <input
                            type='text'
                            placeholder='Enter Employee Last NAme'
                            name='lastName'
                            value={lastName}
                            className='form-control'
                            onChange={handleLstName}
                        />
                    </div>
                    <div className='form-group mb-2'>
                        <label className='form-lable'>Email:</label>
                        <input
                            type='text'
                            placeholder='Enter Employee Email'
                            name='email'
                            value={email}
                            className='form-control'
                            onChange={handleEmail}
                        />
                    </div>

                    <button className='btn btn-success' onClick={saveEmployee}>Submit</button>
                </form>
            </div>
        </div>
    </div>
    
</div>
)

}

export default EmployeeComponent

