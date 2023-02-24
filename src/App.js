import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, setStudents] = useState([]);

  const handleAddStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="container mx-auto px-4 py-8 ">
      <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10 text-center">
        Student Attendance System
      </h1>
      <div className="grid grid-cols-2 gap-8  ">
        <div className="shadow-2xl rounded-md backdrop-opacity-10 backdrop-invert bg-white/10">
          <h2 className="text-xl font-bold mb-4 mt-2 text-center">
            Add Student
          </h2>
          <StudentForm onAddStudent={handleAddStudent} />
        </div>
        <div>
          <StudentList students={students} />
        </div>
      </div>
    </div>
  );
}

export default App;
