import React from 'react';
import EmployeeService from '../services/EmployeeService';

class EmployeeComponent extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            employees:[]
        }
    }

    componentDidMount(){
        EmployeeService.getUsers().then((response) => {
            this.setState({ employees: response.data})
        });
    }

    render (){
        return (
            <div>
                <h1 className = "text-center"> Employee Details List</h1>
                <table className = "table table-striped">
                    <thead>
                        <tr>

                            <td> Emp Id</td>
                            <td> First Name</td>
                            <td> Last Name</td>
                            <td> Email Id</td>
                        </tr>

                    </thead>
                    <tbody>
                        {
                            this.state.employees.map(
                                employee => 
                                <tr key = {employee.id}>
                                     <td> {employee.id}</td>   
                                     <td> {employee.firstName}</td>   
                                     <td> {employee.lastName}</td>   
                                     <td> {employee.email}</td>   
                                </tr>
                            )
                        }

                    </tbody>
                </table>

            </div>

        )
    }
}

export default EmployeeComponent