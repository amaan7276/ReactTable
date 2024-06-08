
import { configureStore } from '@reduxjs/toolkit';
import tableReducer from './tableSlice';

const store = configureStore({
  reducer: {
    table: tableReducer,
  },
});


store.dispatch({ type: 'table/setFilteredData', payload: store.getState().table.data });

export default store;
