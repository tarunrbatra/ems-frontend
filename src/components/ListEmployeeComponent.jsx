import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService';
import { useNavigate } from 'react-router-dom';

export default function ListEmployeeComponent() {

    const dummydata = [
    {
        "id": 1,
        "firstName": "fname1",
        "lastName": "lname1",
        "email": "fname1@email.com"
    },
    {
        "id": 2,
        "firstName": "fname2",
        "lastName": "lname2",
        "email": "fname2@email.com"
    },
    {
        "id": 3,
        "firstName": "fname3",
        "lastName": "lname3",
        "email": "fname3@email.com"
    }
  ]

  const navigator = useNavigate();

  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    listEmployees().then((response) => {
        setEmployees(response.data);
    }).catch(error => console.error(error))
  }, [])


  function addNewEmployee() {
    navigator('/add-employee');

  }

  function updateEmployee(id) {
    navigator(`/edit-employee/${id}`);

  }

  return (
    <div className='container'>
        <h2 className='text-center'>List of Employees</h2>
        <button className='btn btn-primary mb-2' onClick={addNewEmployee}>Add Employee</button>

        <table className='table table-striped table-bordered'>
            <thead>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    //dummydata.map(employee =>
                    employees.map(employee =>
                        <tr key={employee.id}>
                            <td>{employee.id}</td>
                            <td>{employee.firstName}</td>
                            <td>{employee.lastName}</td>
                            <td>{employee.email}</td>
                            <td>
                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
    </div>
  )
}
