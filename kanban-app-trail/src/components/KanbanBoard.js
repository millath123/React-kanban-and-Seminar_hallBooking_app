import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addColumn, editColumn, deleteColumn, setColumns } from '../redux/kanbanSlice';
import Column from '../components/Column';
import '../styles/KanbanBoard.css';

const KanbanBoard = () => {
  const columns = useSelector((state) => state.kanban.columns);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const [titleEditing, setTitleEditing] = useState(false);
  const [editTitleId, seteditTitleId] = useState(null);
  const [newTitle, setnewTitle] = useState('');

  useEffect(() => {
    const savedColumns = localStorage.getItem('kanbanColumns');
    if (savedColumns) {
      dispatch(setColumns(JSON.parse(savedColumns)));
    }
  }, [dispatch]);

  useEffect(() => {
    localStorage.setItem('kanbanColumns', JSON.stringify(columns));
  }, [columns]);

  const handleAddOrEditColumn = () => {
    if (newTitle.trim()) {
      if (titleEditing) {
        dispatch(editColumn({ id: editTitleId, title: newTitle }));
        setTitleEditing(false);
        seteditTitleId(null);
      } else {
        dispatch(addColumn(newTitle));
      }
      setnewTitle('');
      setModalOpen(false);
    }
  };

  const handleEditClick = (column) => {
    setTitleEditing(true);
    seteditTitleId(column.id);
    setnewTitle(column.title);
    setModalOpen(true);
  };

  const handleDeleteClick = (id) => {
    dispatch(deleteColumn(id));
  };

  return (
    <div className="kanban-board">
      
      {columns.map((column) => (
        <Column
          key={column.id}
          column={column}
          onEdit={() => handleEditClick(column)}
          onDelete={() => handleDeleteClick(column.id)}
        />
      ))}
      <button className="add-column-btn" onClick={() => setModalOpen(true)}>
        + {titleEditing ? 'Edit' : 'Add'} Column
      </button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <input
              type="text"
              value={newTitle}
              onChange={(e) => setnewTitle(e.target.value)}
              placeholder="Column Title"
            />
            <button onClick={handleAddOrEditColumn}>
              {titleEditing ? 'Save' : 'Add'}
            </button>
            <button onClick={() => setModalOpen(false)}>Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default KanbanBoard;
