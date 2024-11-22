


export const initialState = {
    carrinho: [],
    user: null,
};

function reducer (state, action) {
    console.log(action);
    switch(action.type) {
        case 'ADD_TO_CART':

           return {
             ...state,
            carrinho: [...state.carrinho, action.item],
            };

        case 'REMOVE_FROM_CART':
            let newCarrinho = [...state.carrinho];
            const index = state.carrinho.findIndex((carrinhoItem) => carrinhoItem.id === action.id);

            if (index >= 0) {
                newCarrinho.splice(index, 1);
            } else {
                console.warn(`Não foi possivel remover o produto (id: ${action.id})`)
            }
            


            return {...state, carrinho: newCarrinho};
        default:
            return state;
    }
}

export default reducer;