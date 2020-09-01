const SET_TASK = 'SET_TASK';
const DELETE_TASK = 'DELETE_TASK';
const SET_TASK_STATUS = 'SET_TASK_STATUS';
const SET_TASK_NAME = 'SET_TASK_NAME';
const SET_CATEGORY = 'SET_CATEGORY';
const DELETE_CATEGORY = 'DELETE_CATEGORY';
const SET_CATEGORY_DROPDOWN_STATUS = 'SET_CATEGORY_DROPDOWN_STATUS';

export const setTask = (text, category) => ({
  type: SET_TASK,
  text,
  category,
});

export const deleteTask = (id) => ({
  type: DELETE_TASK,
  payload: id,
});

export const setTaskStatus = (id, isDone) => ({
  type: SET_TASK_STATUS,
  id,
  isDone,
});

export const setTaskName = (id, textValue) => ({
  type: SET_TASK_NAME,
  id,
  payload: textValue,
});

export const setCategoryDropdownStatus = (id, value) => ({
  type: SET_CATEGORY_DROPDOWN_STATUS,
  id,
  isDropdown: value,
});

export const setCategory = (name) => ({
  type: SET_CATEGORY,
  payload: name,
});

export const deleteCategory = (id) => ({
  type: DELETE_CATEGORY,
  payload: id,
});
