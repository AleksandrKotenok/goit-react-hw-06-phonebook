
import { nanoid } from "nanoid";
import { createStore } from '@reduxjs/toolkit';

const initilStore = {
   name: '',
   number:'',
   items: [
      {id: 1,name: 'kolya',number: 45454353},
      { id: 2, name: 'moly', number: 953332253 },
      { id: 3, name: 'boba', number: 2378426453 },
      { id: 4, name: 'dodo', number: 12345988 },
      { id: 5, name: 'botik', number: 4535657868 },
      { id: 6, name: 'rik', number: 56767878789 },
      { id: 7, name: 'foper', number: 987332253 },
      {id:8, name:'xedos', number:76752253}
   ],
   filter: ''
}

const contactReducer = (state = initilStore, action) => {
   switch (action.type) {
      case 'INPUT_NAME':
         return  Object.assign({}, state, { name:action.text })
      case 'INPUT_NUMBER':
         return  Object.assign({}, state, { number: action.text })
         case 'FILTER':
            return  Object.assign({}, state, { filter: action.text })
      case 'ADD':
         const isFound = state.items.find(item => item.name.toLowerCase() === state.name.toLowerCase())
         if (isFound) return window.alert(`${state.name} is already in contacts.`);
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
         const deleteContact = (action)=>state.items.filter(({ id }) => id !== action.payload)
         const itemsAfterDel = deleteContact (action)
         return {...state,items:[...itemsAfterDel]}
      default: return {...state}
   }
};
   
const store = createStore(contactReducer);
export default store



















// Action creators
// export const inputName = createAction('INPUT_NAME')
// export const inputNum = createAction('INPUT_NUMBER')
// export const addCont = createAction('ADD')
// export const clearForm = createAction('CLEAR_FORM')
// export const delCont = createAction('DEL')
// export const filCont = createAction('FILTER')


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
// const rootReducer = combineReducers({
//    contactReducer,
// });
// Store
// const store = configureStore({
//    reducer:{ contactReducer},
// }); 