import { createSlice } from '@reduxjs/toolkit';



// Funzione per caricare il carrello da sessionStorage
const loadCartFromSessionStorage = () => {
    const cartFromStorage = sessionStorage.getItem('cart');
    if (!cartFromStorage) {
        return [];
    }

    try {
        const parsedCart = JSON.parse(cartFromStorage);

        // Verifica se il risultato è un array, altrimenti crea un array con il singolo elemento
        return Array.isArray(parsedCart) ? parsedCart : [parsedCart];
    } catch (error) {
        console.error('Errore nel parsing di sessionStorage:', error);
        return [];
    }
};

const initialState = {
    isCartOpen: false,
    cart: loadCartFromSessionStorage(),
    items: [],
    totalQuantity: loadCartFromSessionStorage().reduce((acc, curr) => acc + curr.count, 0),
};

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        setItems: (state, action) => {
            state.items = action.payload;
        },


/*        addToCart: (state, action) => {
            const newItem = action.payload.item;

            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.count += newItem.count;
                console.log(`La quantità del prodotto con l'ID ${newItem.id} è stata incrementata a ${existingItem.count}.`);
            } else {
                state.cart = [...state.cart, newItem];
                console.log("ID degli elementi nel carrello:", state.cart.map(item => item.id));
                console.log("quantità degli elementi nel carrello:", state.cart.map(item => item.count));
                state.totalQuantity = state.cart.map(item => item.count).reduce((acc, curr) => acc + curr, 0);
                console.log("Quantità totale degli elementi nel carrello:", state.totalQuantity);
                console.log("Prodotto aggiunto:", newItem.id);
            }

            // Converti l'oggetto proxy in un oggetto standard
            const cartArray = JSON.parse(JSON.stringify(Array.from(state.cart)));

            // Salva il carrello in sessionStorage dopo ogni modifica
            sessionStorage.setItem('cart', JSON.stringify(cartArray));
        },*/


        addToCart: (state, action) => {
            const newItem = action.payload.item;

            const existingItem = state.cart.find(item => item.id === newItem.id);

            if (existingItem) {
                existingItem.count= newItem.count;
                console.log(`La quantità del prodotto con l'ID ${newItem.id} è stata incrementata a ${existingItem.count}.`);
            } else {
                state.cart = [...state.cart, newItem];
                console.log("ID degli elementi nel carrello:", state.cart.map(item => item.id));
                console.log("quantità degli elementi nel carrello:", state.cart.map(item => item.count));
                state.totalQuantity = state.cart.map(item => item.count).reduce((acc, curr) => acc + curr, 0);
                console.log("Quantità totale degli elementi nel carrello:", state.totalQuantity);
                console.log("Prodotto aggiunto:", newItem.id);
            }

            // Converti l'oggetto proxy in un oggetto standard
            const cartArray = JSON.parse(JSON.stringify(Array.from(state.cart)));

            // Salva il carrello in sessionStorage dopo ogni modifica
            sessionStorage.setItem('cart', JSON.stringify(cartArray));
        },


        removeFromCart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload.id);

            // Salva il carrello in sessionStorage dopo ogni modifica
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
        },

        increaseCount: (state, action) => {

            state.cart = state.cart.map((item) => {



                if (item.id === action.payload.id) {

                    if(item.count < item.attributes.quantity){
                        console.log("Prodotto id: "+item.id);
                        console.log(item.attributes.quantity);
                        //check quantity
    
    
                        item.count++;
                    }





                }
                return item;
            });

            // Salva il carrello in sessionStorage dopo ogni modifica
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
        },
        decreaseCount: (state, action) => {
            state.cart = state.cart.map((item) => {
                if (item.id === action.payload.id && item.count > 1) {
                    item.count--;
                }
                return item;
            });

            // Salva il carrello in sessionStorage dopo ogni modifica
            sessionStorage.setItem('cart', JSON.stringify(state.cart));
        },
        setIsCartOpen: (state) => {
            state.isCartOpen = !state.isCartOpen;
        },
        // Nuova azione per azzerare il carrello dopo la conferma
        clearCartAfterConfirmation: (state) => {
            state.cart = [];
            state.totalQuantity = 0;
            
            // Salva il carrello in sessionStorage dopo ogni modifica
            sessionStorage.setItem('cart', JSON.stringify([]));
        },
        
    },
});

// Aggiungi questa azione alle export
export const {
    setItems,
    addToCart,
    removeFromCart,
    increaseCount,
    decreaseCount,
    setIsCartOpen,
    clearCartAfterConfirmation, // Aggiungi la nuova azione alle export
  } = cartSlice.actions;

export default cartSlice.reducer;
