const initialState = {
  data:[
    {id:1,name:'Call Of Duty',quality:2,rate:99},
    {id:2,name:'God of War',quality:3,rate:120},
    {id:3,name:'Far Cry 4',quality:3,rate:150},
    {id:4,name:'Evil With In 2',quality:2,rate:150},
  ],
  showAlert:false,
  userName:'',
  isAuthenticated:false,
  authFailed:false,
}

const reducer = (state = initialState,action) =>{
  switch (action.type) {
    case 'REQUEST_AUTHENTICATION':
      if(action.userName == 'clarion@clarion.com' && action.password == 'Clarion123'){
        return {
          ...state,
          isAuthenticated:true,
          userName:action.userName,
          authFailed:false
        }
      }
      else{
        return {
          ...state,
          isAuthenticated:false,
          authFailed:true
        }
      }
      break;
    case 'ADD_NEW_ITEM':
      return {
        ...state,
        showAlert:false,
        data:[
          {
            id:Date.now(),
            name:action.name,
            quality:action.quality,
            rate:action.rate
          },
          ...state.data

        ]
      }
      break;
    case 'DELETE_ITEM':
      return {
        ...state,
        data:state.data.filter(
          ({id}) => id != action.id
        )
      }
      break;
    case 'SHOW_ALERT':
      return {
        ...state,
        showAlert:true
      }
      break;
    case 'CLOSE_ALERT':
    return {
      ...state,
      showAlert:false
    }
      break;
    default:
      return state;
  }
}

export default reducer
