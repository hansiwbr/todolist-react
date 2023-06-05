import React, { useState } from 'react';

export default function TaskForm() {
  const [taskName, setTaskName] = useState("");

  const handleInputChange = (event) => {
    setTaskName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

  };

  return (
    <form onSubmit={handleSubmit}>
      <button>+</button>
      <input
        type="text"
        value={taskName}
        onChange={handleInputChange}
        placeholder="Your next task..."
      />
    </form>
  );
}