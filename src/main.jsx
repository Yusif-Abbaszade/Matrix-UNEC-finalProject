import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import configureStore from './tools/store/configureStore.js'
import { getProducts } from './tools/actions/productAction.js';
import { Provider } from 'react-redux';
const store = configureStore();

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(getProducts());

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
)
