import React from 'react'

const StudentCard = ({ student, id }) => {
  return (
      <tr>
        <td>{student.firstName}</td>
        <td>{student.city}</td>
        <td>{student.company}</td>
      </tr>
  )
}

export default StudentCard;