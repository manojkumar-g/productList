export const removeItem = (id) => ({
  type : 'REMOVE_ITEM',
  id
})

export const addData = (data) => ({
  type : 'ADD_DATA',
  data
})

export const changeQuantity = (id,quantity) =>({
  type:'CHANGE_QUANTITY',
  quantity,id
})

export const restoreData = (id) => ({
  type : 'RESTORE_DATA',
})

export const closeAlert = (id) => ({
  type : 'CLOSE_ALERT',
})

export const showAlert = (message) => ({
  type : 'SHOW_ALERT',
  message
})
