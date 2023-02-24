import { useState } from "react";

const StudentForm = ({ onAddStudent }) => {
  const [rollNumber, setRollNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [checkInTime, setCheckInTime] = useState("");
  const [checkOutTime, setCheckOutTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const student = { rollNumber, studentName, checkInTime, checkOutTime };
    onAddStudent(student);
    setRollNumber("");
    setStudentName("");
    setCheckInTime("");
    setCheckOutTime("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-4 ml-3 mr-3">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="rollNumber"
        >
          Roll Number
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="rollNumber"
          type="text"
          placeholder="Enter Roll Number"
          value={rollNumber}
          onChange={(e) => setRollNumber(e.target.value)}
        />
      </div>
      <div className="mb-4 ml-3 mr-3">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="studentName"
        >
          Student Name
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="studentName"
          type="text"
          placeholder="Enter Student Name"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        />
      </div>
      <div className="mb-4 ml-3 mr-3">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="checkInTime"
        >
          Check-in Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="checkInTime"
          type="text"
          placeholder="Enter Check-in Time"
          value={checkInTime}
          onChange={(e) => setCheckInTime(e.target.value)}
        />
      </div>
      <div className="mb-4 ml-3 mr-3">
        <label
          className="block text-gray-700 font-bold mb-2"
          htmlFor="checkOutTime"
        >
          Check-out Time
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="checkOutTime"
          type="text"
          placeholder="Enter Check-out Time"
          value={checkOutTime}
          onChange={(e) => setCheckOutTime(e.target.value)}
        />
      </div>
      <div className="flex justify-center mb-4">
        <button
          className="bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500 ... text-white font-bold py-2 px-4 rounded "
          type="submit"
        >
          Add Student
        </button>
      </div>
    </form>
  );
};

export default StudentForm;
