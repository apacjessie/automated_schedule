import './App.css';
import AppProviders from './providers/app';
import AppRoutes from './routes';

export default function App() {
  return (
    <AppProviders>
      <AppRoutes />
    </AppProviders>
  );
}
