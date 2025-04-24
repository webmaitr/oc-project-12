import Navbar from './components/Navbar';
import SideMenu from './components/SideMenu';
import CentralSectionMock from './components/CentralSectionMock';
import CentralSection from './components/CentralSection';
import './App.css';
import { useContext } from 'react';
import { IdContext } from './components/IdContext';

function App() {
  const { mock } = useContext(IdContext);
  console.log(mock)
  return (
    <> 
      <Navbar />
      <main>
        <SideMenu />
        {mock?
        <CentralSectionMock />:
        <CentralSection />
        }
      </main>
    </>
  );
}
export default App;
