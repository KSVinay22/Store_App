import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CartProvider } from './CartContext';
import { Auth0Provider } from '@auth0/auth0-react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-nv4iztc78rbb75t4.us.auth0.com"
    clientId="tT6pC7wCovjIXxTp3hlXnP7S7xEGQ7lY"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <CartProvider>
      <App/>
    </CartProvider>
  </Auth0Provider>
)
