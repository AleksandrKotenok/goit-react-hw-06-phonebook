

import { configureStore, createAction,createReducer, createSlice } from '@reduxjs/toolkit';
import { nanoid } from "nanoid";
import { createStore } from '@reduxjs/toolkit';

const initilStore = {
   name: '',
   number:'',
   items: [
      {id: 1,name: 'kolya',number: 45353},
      {id:2, name:'moly', number:953332253}
   ],
   filter: ''
}
// Action creators
export const inputName = createAction('INPUT_NAME')
export const inputNum = createAction('INPUT_NUMBER')
export const addCont = createAction('ADD')
export const clearForm = createAction('CLEAR_FORM')
export const delCont = createAction('DEL')
export const filCont = createAction('FILTER')


   // Reducer
// const contactReducer = createReducer(initilStore, {
//       [inputName]: (state, action) => Object.assign({}, state, { name:action.text }),
//       [inputNum]: (state, action) => Object.assign({}, state, { number: action.text }),
//       [addCont]: (state, action) => state,items:[state.items,{
//                      id: nanoid(),
//                      name: state.name,
//                      number: state.number
//                      }],
//       [clearForm]: (state, action) =>state, name: '',
//       number:'',
//    });
const contactReducer = (state = initilStore, action) => {
   console.log('reducer', action)
   switch (action.type) {
      case 'INPUT_NAME':
         return  Object.assign({}, state, { name:action.text })
      case 'INPUT_NUMBER':
         console.log(state.number)
         return  Object.assign({}, state, { number: action.text })
      case 'ADD':
         return{...state,items:[...state.items,{
            id: nanoid(),
            name: state.name,
            number: state.number
            }]
         }
      case 'CLEAR_FORM':
         return{...state, name: '',
         number:''
         }
      case 'DEL':
         const deleteContact = (id) =>state.filter((item) => item.id !== id)
         return { ...initilStore }
      case filCont.type:
         return { ...state, card: 'full' }
      default: return state
   }
};
   
// const rootReducer = combineReducers({
//    contactReducer,
// });
// Store
// const store = configureStore({
//    reducer:{ contactReducer},
// }); 
const store = createStore(contactReducer);
export default store


                  


