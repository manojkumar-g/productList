export const requestAuth = (userName,password) => ({
  userName,password,
  type:'REQUEST_AUTHENTICATION'
});

export const addItem = (name,rate,quality) => ({
  name,rate,quality,
  type:'ADD_NEW_ITEM'
});

export const deleteItem = (id) => ({
  id,
  type:'DELETE_ITEM'
});

export const showAlert = () => ({
  type:'SHOW_ALERT'
});
export const closeAlert = () => ({
  type:'CLOSE_ALERT'
});
