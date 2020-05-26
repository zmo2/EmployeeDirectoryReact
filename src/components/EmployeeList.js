import React from "react"
import "./EmployeeList.css"

const EmployeeList = (props) => {

    const employeeImg = props.employees.map(({ email, name, picture, phone, dob }) => {

        return (
            <button className="content" key={email} >
                <img className="avatar" src={picture.medium} />
                <span className="author" >{name.first}, {name.last}</span>
                <br />
                <span className="text">{email}</span>
                <br />
                <span>{phone}</span>
                <br />
                <span>{dob.date.substring(0, 10)}</span>
            </button>
        )
    })


    return (
        <div className="employee-list" >
            {employeeImg}
        </div>
    )
}

export default EmployeeList