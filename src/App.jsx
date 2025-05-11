import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import CentralSection from './components/CentralSection';
import './App.css';
import { useContext } from 'react';
import { IdContext } from './components/IdContext';

function App() {
  const { mock } = useContext(IdContext);
  return (
    <>
      <Navbar />
      <main>
        <SideMenu />
        <CentralSection />
      </main>
    </>
  );
}
export default App;
