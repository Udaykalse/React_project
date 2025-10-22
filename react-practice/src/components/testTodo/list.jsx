import React from 'react'
const student = [
    { id: 1, name: "Uday", email: "uday@gmail.com", city: "Latur" },
    { id: 2, name: "Amit", email: "amit@gmail.com", city: "Pune" },
    { id: 3, name: "Priya", email: "priya@gmail.com", city: "Mumbai" }
];
function list() {
    return (
        <div>
            <table border={1}>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        student.map((student) => (
                            <tr key={student.id}>
                                <td>{student.id}</td>
                                <td>{student.name}</td>
                                <td>{student.email}</td>
                                <td>{student.city}</td>

                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </div>
    )
}

export default list
