import { createAction } from '@reduxjs/toolkit';
//Action creators
export const addCont = createAction('ADD', (id, name, number) => ({
  payload: { id, name, number },
}));
export const delCont = createAction('DEL');
export const filCont = createAction('FILTER');
