import data from './mock.jsx';

function getFirstname(userId) {
  const currentUser = data.USER_MAIN_DATA.filter((user) => user.id === userId);
  const userFirstName = currentUser[0].userInfos.firstName;
  const userKeyData = currentUser[0].keyData;
  const userScore = [{myScore : (currentUser[0].score?currentUser[0].score:currentUser[0].todayScore)*100}];
  return { userFirstName, userKeyData, userScore };
}

function getActivity(userId) {
  const currentUser = data.USER_ACTIVITY.filter(
    (user) => user.userId === userId
  );
  const userActivity = currentUser[0].sessions;

  return userActivity;
}

function getAverageSession(userId) {
  const currentUser = data.USER_AVERAGE_SESSIONS.filter(
    (user) => user.userId === userId
  );
  const userAverageSession = currentUser[0].sessions;

  return userAverageSession;
}

function getPerformance(userId) {
  const currentUser = data.USER_PERFORMANCE.filter(
    (user) => user.userId === userId
  );
  const userPerformanceData = currentUser[0].data;
  const dataKind = currentUser[0].kind;
  const userPerformance = userPerformanceData.map((k, index) => ({value : k.value , kind : dataKind[index+1]}))
  
  return userPerformance;
}

export { getFirstname, getActivity, getAverageSession, getPerformance };

