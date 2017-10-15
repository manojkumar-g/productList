const initialState = {
  data:[
     { "id": 9090, "name": "Item1", "price": 200, "discount": 10, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9091, "name": "Item2", "price": 250, "discount": 15, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9092, "name": "Item3", "price": 320, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9093, "name": "Item4", "price": 290, "discount": 0, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9094, "name": "Item1", "price": 500, "discount": 25, "type": "thriller", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9095, "name": "Item2", "price": 150, "discount": 5, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9096, "name": "Item3", "price": 700, "discount": 22, "type": "literature", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }, { "id": 9097, "name": "Item4", "price": 350, "discount": 18, "type": "fiction", "img_url": "https://store.lexisnexis.com.au/__data/media/catalog/thumb//placeholder.jpg" }
   ].map(
     x =>  ({...x,quantity:1})
   ),
  showAlert:false,
  alertMessage:''
}
const reducer = (state = initialState,action) =>{
  let {data} = state;
  switch (action.type) {
    case 'ADD_DATA':
      return{
        ...initialState,
        data:action.data
      }
      break;
    case 'REMOVE_ITEM':
      return {
        ...state,
        data: data.filter(({id}) => id != action.id)
      }
      break;
    case 'CHANGE_QUANTITY':
      return{
        ...state,
        data:data.map(
          item =>
              item.id == action.id ?
                                  action.quantity >=0 ?
                                      {...item,quantity:action.quantity*1}
                                      :
                                      item
                                   :
                                   item
        )
      }
    case 'RESTORE_DATA':
      return {
        ...state,
        data:[...initialState.data]
      }
      break;
    case 'SHOW_ALERT':
      return{
        ...state,
        showAlert:true,
        alertMessage:action.message
      }
      break;
    case 'CLOSE_ALERT':
      return {
        ...state,
        showAlert:false,
        alertMessage:''
      }
      break;
    default:
      return state;
  }
}


export default reducer;
