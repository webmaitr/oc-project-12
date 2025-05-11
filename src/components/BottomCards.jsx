import Sessions from './Sessions.jsx';
import Performances from './Performances.jsx';
import Score from './Score.jsx';

function BottomCards({
  userInfo,
  userPerformance,
  userSessions,
  userActivity
}) {
  return (
    <>
      <Sessions userSessions={userSessions} userActivity={userActivity} />
      <Performances userPerformance={userPerformance} />
      <Score userInfo={userInfo} />
    </>
  );
}
export default BottomCards;
