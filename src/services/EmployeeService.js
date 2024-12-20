import axios from "axios";

const REST_API_URL = "http://localhost:8080/api/employees";

export const listEmployees = () => {
    return axios.get(REST_API_URL);
}

export const addEmployee = (employee) => {
    return axios.post(REST_API_URL, employee);
}

export const getEmployee = (employeeId) => {
    return axios.get(REST_API_URL + '/' + employeeId);
}

export const updateEmployee = (employeeId, employee) => axios.put(REST_API_URL + '/' + employeeId, employee);