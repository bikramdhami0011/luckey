"use client"
import { useState } from 'react';

export default function DailyRoutine() {
  const [routine, setRoutine] = useState('');
  const [savedRoutines, setSavedRoutines] = useState([]);
  const [editIndex, setEditIndex] = useState(-1);

  const handleInputChange = (e) => {
    setRoutine(e.target.value);
  };

  const handleSave = () => {
    if (routine.trim() !== '') {
      if (editIndex !== -1) {
        // If editing an existing routine
        const updatedRoutines = [...savedRoutines];
        updatedRoutines[editIndex] = routine;
        setSavedRoutines(updatedRoutines);
        setRoutine('');
        setEditIndex(-1);
      } else {
        // If adding a new routine
        setSavedRoutines([...savedRoutines, routine]);
        setRoutine('');
      }
    }
  };

  const handleEdit = (index) => {
    setRoutine(savedRoutines[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const updatedRoutines = [...savedRoutines];
    updatedRoutines.splice(index, 1);
    setSavedRoutines(updatedRoutines);
  };

  return (
    <div    style={{display:"flex" ,flexDirection:"column", width:"100%"}}>
      <h1>Daily Routine</h1>
      <div   style={{display:"flex" ,flexDirection:"column", width:"50%",justifyItems:"center",justifyContent:"center",textAlign:"center"}}>
      <div  style={{display:"flex" ,flexDirection:"column", width:"100%"}}>
      <textarea
        rows="10"
        cols="50"
        placeholder="Enter your daily routine..."
        value={routine}
        onChange={handleInputChange}
      ></textarea>
      <button onClick={handleSave}>
        {editIndex !== -1 ? 'Update' : 'Save'}
      </button>
    </div>
      
      </div>
     
      <div>
        <h2>Saved Routines</h2>
        <ul>
          {savedRoutines.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => handleEdit(index)}>Edit</button>
              <button onClick={() => handleDelete(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
