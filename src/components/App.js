import React from "react"
import Employees from "../api/Employee"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"
import emptyArray from "./Array"


class App extends React.Component {
    state = { employees: [], filteredEmployees: [] }

    componentDidMount = async () => {
        const response = await Employees.get("?results=200&nat=us&inc=gender,name,nat,location,email,picture,phone,dob")
        this.setState({ employees: response.data.results })
        // let combined = this.state.employees.map(employee => {
        //     return `${employee.name.first}${employee.name.last}${employee.email}${employee.phone}${employee.dob.date.substring(0, 10)}`
        // })
        // this.setState({ combinedString: combined })
    }

    onSearchChange = (term) => {
        // console.log(term.length)
        // console.log(term)
        // console.log(this.state.filteredEmployees)
        let index = this.state.employees.filter(employee => {
            return employee.email.includes(term.toLowerCase()) || employee.phone.includes(term) || employee.dob.date.substring(0, 10).includes(term)
        })
        if (index.length === 0 && term.length >= 0) {
            this.setState({ filteredEmployees: emptyArray })
        } else {
            this.setState({ filteredEmployees: index })
        }
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onchange={this.onSearchChange} />
                < EmployeeList employees={this.state.filteredEmployees.length > 0 ? this.state.filteredEmployees : this.state.employees} />
            </div >
        );
    }
}

export default App