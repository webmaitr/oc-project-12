import CentralCard from './CentralCard.jsx';
import BottomCards from './BottomCards.jsx';
import RightSideCards from './RightSideCards.jsx';
import { useContext } from 'react';
import { IdContext } from '../components/IdContext.jsx';
import './../styles/dataDisplay.css';

function DataDisplay() {
  const { userId } = useContext(IdContext);
  return (
    <div className="display-chart-area">
      <CentralCard userId={userId} />
      <BottomCards userId={userId} />
      <RightSideCards userId={userId} />
    </div>
  )
  
}

export default DataDisplay;
