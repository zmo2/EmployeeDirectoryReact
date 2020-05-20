import React from "react"
import "./EmployeeList.css"

const EmployeeList = (props) => {

    const employeeImg = props.employees.map(({ email, name, picture }) => {
        return (
            <div key={email}>
                <img src={picture.medium} />
                <span>{name.first}, {name.last}</span>
                <br />
                <span>{email}</span>
            </div>
        )
    })

    return (
        <div className="employee-list">
            {employeeImg}
        </div>
    )
}

export default EmployeeList