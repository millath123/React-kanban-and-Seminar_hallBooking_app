import React from 'react';
import { Provider } from 'react-redux';
import store from '../redux/store';
import KanbanBoard from '../components/KanbanBoard';


function App() {
  return (
    <Provider store={store}>
      <KanbanBoard />
    </Provider>
  );
}

export default App;
