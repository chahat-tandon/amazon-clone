export const initialState ={
    basket:[],
    user:null
}

const reducer = (state,action)=>{
    switch (action.type) {
        case "ADD_ITEM":
            return {
                ...state,
                basket:[...state.basket,action.item]
            }
        case "REMOVE_ITEM":{
            const newBasket = state.basket
            const index = newBasket.findIndex(item=>item.id===action.item.id)
            console.log(index)
            newBasket.splice(index,1)

            return {
                ...state,
                basket:newBasket
            }
        }
        case "SET_USER":
            return{
                ...state,user:action.user
            }
    
        default:
            return state;
    }
}

export default reducer

 