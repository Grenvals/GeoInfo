import { updateObjectInArray } from './object-helper';

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_TASK': {
      const newId = `f${(+new Date()).toString(16)}`;
      const newTask = {
        id: newId,
        status: false,
        category: action.category,
        text: action.text,
      };
      return { ...state, tasksList: [...state.tasksList, newTask] };
    }
    case 'SET_CATEGORY': {
      const newId = `f${(+new Date()).toString(16)}`;
      const newCategory = {
        id: newId,
        name: action.payload,
        isDropdown: true,
      };
      return { ...state, categoryList: [...state.categoryList, newCategory] };
    }
    case 'SET_TASK_STATUS': {
      return {
        ...state,
        tasksList: updateObjectInArray(state.tasksList, action.id, 'id', {
          status: action.isDone,
        }),
      };
    }
    case 'SET_TASK_NAME': {
      return {
        ...state,
        tasksList: updateObjectInArray(state.tasksList, action.id, 'id', {
          text: action.payload,
        }),
      };
    }
    case 'SET_CATEGORY_DROPDOWN_STATUS': {
      return {
        ...state,
        categoryList: updateObjectInArray(state.categoryList, action.id, 'id', {
          isDropdown: action.isDropdown,
        }),
      };
    }
    case 'DELETE_TASK': {
      return {
        ...state,
        tasksList: state.tasksList.filter((t) => t.id !== action.payload),
      };
    }
    case 'DELETE_CATEGORY': {
      const categoryName = state.categoryList.find((c) => c.id === action.payload).name;
      return {
        ...state,
        categoryList: state.categoryList.filter((с) => с.id !== action.payload),
        tasksList: state.tasksList.filter((t) => t.category !== categoryName),
      };
    }
    default:
      return state;
  }
};

export { reducer };
