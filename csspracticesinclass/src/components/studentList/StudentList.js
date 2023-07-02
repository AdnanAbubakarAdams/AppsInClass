import React, {useState, useEffect} from 'react';
import axios from 'axios';
import StudentCard from '../studentCard/StudentCard';
import "./StudentList.scss";

const API = "http://localhost:9000/students";

const StudentList = () => {

    const [students, setStudents] = useState([]);
    const [searchData, setSearchData] = useState("")

    useEffect(() => {
        axios.get(API)
        .then((res) => {
            setTimeout(() => {
                setStudents(res.data.students)
                // console.log(res.data)
            }, 1000);
        })
        .catch((error) => console.log(error));
    }, []);

    let filterStudents = students;

    if(searchData) {
        filterStudents = students.filter((student) => {
            const fullIntro =  `my name is ${student.firstName}, i come from ${student.city} and i work at ${student.company}`;
            console.log(fullIntro)
            return fullIntro;
        })
    }

    

    
  return (
    <div className='studentList'>
        <section>
            <input 
            type="text"
            placeholder='search'
            value={searchData}
            onChange={(e) => setSearchData(e.target.value)}
            />
            <table>
                <thead>
                    <tr>
                        <th>NAME</th>
                        <th>CITY</th>
                        <th>COMPANY</th>
                    </tr>
                </thead>
                <tbody>
                    {filterStudents.map((student, id) => {
                        return <StudentCard key={id} student={student} id={id} />
                    })}
                </tbody>
            </table>
        </section>
    </div>
  )
}

export default StudentList;