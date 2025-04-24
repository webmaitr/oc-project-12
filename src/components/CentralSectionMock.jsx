import Welcome from './Welcome';
import { getFirstname } from '../data/GetData.jsx';
import DataDisplay from './DataDisplay';
import { useContext } from 'react';
import { IdContext } from './IdContext.jsx';


function CentralSectionMock() {
  const { userId } = useContext(IdContext);
  const firstName = getFirstname(userId).userFirstName;

  return(
    <section className="central-section">
      <Welcome firstName={firstName} />
      <DataDisplay />
    </section>
  );
}

export default CentralSectionMock;
