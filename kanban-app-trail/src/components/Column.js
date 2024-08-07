import React from 'react';
import '../styles/Column.css';
import { FaTrash } from "react-icons/fa";
import { FaRegPenToSquare } from "react-icons/fa6";


const Column = ({ column, onEdit, onDelete }) => {
  return (
    <div className="column">
      <div className="column-header">
        <h2>{column.title}</h2>
        <button onClick={onEdit} className='edit-button'><FaRegPenToSquare />
</button>
        <button onClick={onDelete} className='delete-button'><FaTrash /></button>
      </div>
      
    </div>
  );
};

export default Column;
