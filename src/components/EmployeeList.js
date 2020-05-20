import React from "react"
import "./EmployeeList.css"

const EmployeeList = (props) => {

    const employeeImg = props.employees.map(({ email, picture }) => {
        console.log(picture.medium)
        return <img key={email} src={picture.medium} />
    })
    return (
        <div className="employee-list">{employeeImg}</div>
    )
}

export default EmployeeList