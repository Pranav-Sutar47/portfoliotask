import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer,Bounce } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import App from './App.jsx'
import 'react-tooltip/dist/react-tooltip.css'
import './index.css'

createRoot(document.getElementById('root')).render(
  <div>
  <App />
  <ToastContainer
  position="top-center"
  autoClose={5000}
  hideProgressBar
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
  transition={Bounce}
/>
</div>
)
