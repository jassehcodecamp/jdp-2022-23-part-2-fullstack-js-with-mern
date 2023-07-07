import React from "react"

const StudentsTable = () => {
  const [students, setStudents] = useState([
    "Musa",
    "Ahmad",
    "Muhammad",
    "Momodou",
  ])

  return (
    <div>
      <table>
        <caption>Fullstack JavaScript Students</caption>

        <table>
          <thead>
            <tr>
              <th>#</th>
              <th>Student Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student}</td>
                <td>
                  <div style={{ display: "flex", gap: "8px" }}>
                    <button>Edit</button>
                    <button>Delete</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </table>
    </div>
  )
}

export default StudentsTable
