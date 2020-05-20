import React from "react"
import Employees from "../api/Employee"
import SearchBar from "./SearchBar"
import EmployeeList from "./EmployeeList"


class App extends React.Component {
    state = { employees: [] }

    componentDidMount = async () => {
        const response = await Employees.get("?results=200&nat=us&inc=gender,name,nat,location,email,picture,dob")
        console.log(response.data.results)
        this.setState({ employees: response.data.results })
    }

    onSearchSubmit(term) {
        console.log(term)
    }


    render() {
        return (
            <div className="ui container" style={{ marginTop: "10px" }}>
                <SearchBar onSubmit={this.onSearchSubmit} />
                {/* found: {this.state.employees} */}
                < EmployeeList employees={this.state.employees} />
            </div >
        );
    }
}

export default App