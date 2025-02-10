import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import configureStore from './tools/store/configureStore.js'
import { getProducts } from './tools/actions/productAction.js';
import { getSocialmedia } from './tools/actions/socialmediaAction.js';
import { Provider } from 'react-redux';
import supabase from './utils/supabase.js';
import { AuthProvider } from './context/AuthContext.jsx';
import { NavbarProvider } from './context/NavbarContext.jsx';
const store = configureStore();


async function getProductsData() {
  const { data, error } = await supabase.from('Products').select('*')
  return data;
}

async function getSocialMediaData() {
  const { data, error } = await supabase.from('SocialMediaPosts').select('*')
  return data;
}
store.dispatch(getProducts(await getProductsData()));
store.dispatch(getSocialmedia(await getSocialMediaData()));


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <NavbarProvider>
        <Provider store={store}>
          <App />
        </Provider>
      </NavbarProvider>
    </AuthProvider>
  </StrictMode>
)
