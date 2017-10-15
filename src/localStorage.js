export const loadCartItems = () =>{
  try{
    let data = localStorage.getItem('cartData');
    if(data == null)
      return undefined;
    return JSON.parse(data);
  }
  catch(err){
    return undefined
  }
}

export const saveCartItems = (state) => {
  try{
    let data = JSON.stringify(state)
    localStorage.setItem('cartData',data)

  }
  catch(err){
    console.log(err);
  }
}
