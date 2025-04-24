import { getFirstname } from './../data/GetData';
import SideCard from './SideCard';
import caloriesIcon from './../assets/caloriesIcon.svg';
import proteinIcon from './../assets/proteinIcon.svg';
import carbsIcon from './../assets/carbsIcon.svg';
import fatIcon from './../assets/fatIcon.svg';

function RightSideCards ({ userId }) {
  const keyData = getFirstname(userId).userKeyData;
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = keyData;
  
  return (
  <>
    <SideCard icon={caloriesIcon} category="Calories" score={calorieCount} />
    <SideCard icon={proteinIcon} category="Proteines" score={proteinCount} />
    <SideCard icon={carbsIcon} category="Glucides" score={carbohydrateCount} />
    <SideCard icon={fatIcon} category="Lipides" score={lipidCount} />
  </>
  )
}
export default RightSideCards;