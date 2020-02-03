import React from 'react';
import ContactStore from './ContactStore';

const store =  {ContactStore}
// debugging only ! remove for production
window.store = store

const StoreContext = React.createContext(store);
export {store};
export default StoreContext;