import './App.css';
import AppRoutes from './routes/AppRoutes';
import { CartProvider } from './context/CartContext';
import { FavoritesProvider } from './context/FavoritesContext'; // Import du FavoritesProvider

function App() {
  return (
    <div className="App">
      <CartProvider>
        <FavoritesProvider>
          <AppRoutes/>
        </FavoritesProvider>
      </CartProvider>
    </div>
  );
}

export default App;