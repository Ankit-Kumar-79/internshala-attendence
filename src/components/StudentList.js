const StudentList = ({ students }) => {
  const count = students.length;

  return (
    <div className="shadow-2xl rounded-md backdrop-opacity-10 backdrop-invert bg-white/10 container mx-auto px-4 py-8">
      <h2 className="student-list  text-xl font-bold mb-4 text-center ">
        Student List
      </h2>
      {count > 0 ? (
        <ul className="list-decimal">
          {students.map((student) => (
            <li key={student.rollNumber} className="mb-2">
              <div className="font-bold">{student.studentName}</div>
              <div>Roll Number: {student.rollNumber}</div>
              <div>Check-in Time: {student.checkInTime}</div>
              <div>Check-out Time: {student.checkOutTime}</div>
            </li>
          ))}
        </ul>
      ) : (
        <div className="ml-3  text-center">No students checked in.</div>
      )}
      <div className="mt-4 font-bold text-center">Total Students: {count}</div>
    </div>
  );
};

export default StudentList;
