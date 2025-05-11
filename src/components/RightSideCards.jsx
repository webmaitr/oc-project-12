import SideCard from './SideCard';
import caloriesIcon from './../assets/caloriesIcon.svg';
import proteinIcon from './../assets/proteinIcon.svg';
import carbsIcon from './../assets/carbsIcon.svg';
import fatIcon from './../assets/fatIcon.svg';

function RightSideCards({ userKeyData }) {
  return (
    <div className="sideCardArea">
      <SideCard
        icon={caloriesIcon}
        category="Calories"
        score={userKeyData.calorieCount}
      />
      <SideCard
        icon={proteinIcon}
        category="Proteines"
        score={userKeyData.proteinCount}
      />
      <SideCard
        icon={carbsIcon}
        category="Glucides"
        score={userKeyData.carbohydrateCount}
      />
      <SideCard
        icon={fatIcon}
        category="Lipides"
        score={userKeyData.lipidCount}
      />
    </div>
  );
}
export default RightSideCards;
