import React from "react";

// Student Component
function Student(props) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "15px",
        margin: "15px",
        borderRadius: "10px",
        backgroundColor: "#f2f2f2",
      }}
    >
      <h2>Student Details</h2>

      <p>
        <b>Name:</b> {props.name}
      </p>

      <p>
        <b>Course:</b> {props.course}
      </p>

      <p>
        <b>Marks:</b> {props.marks}
      </p>
    </div>
  );
}

// App Component
function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <h1>React Components using JSX and Props</h1>

      <Student
        name="Rahul Sharma"
        course="BCA"
        marks="85"
      />

      <Student
        name="Priya Singh"
        course="MCA"
        marks="92"
      />

      <Student
        name="Amit Verma"
        course="B.Tech"
        marks="78"
      />
    </div>
  );
}

export default App;