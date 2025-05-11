import data from './mock.jsx';

function getDataMock(userId) {
  const currentUserInfo = data.USER_MAIN_DATA.filter(
    (user) => user.id === userId
  );
  const info = currentUserInfo[0];

  const currentUserActivity = data.USER_ACTIVITY.filter(
    (user) => user.userId === userId
  );
  const activity = currentUserActivity[0];

  const currentUserSessions = data.USER_AVERAGE_SESSIONS.filter(
    (user) => user.userId === userId
  );
  const sessions = currentUserSessions[0];

  const currentUserPerf = data.USER_PERFORMANCE.filter(
    (user) => user.userId === userId
  );
  const performance = currentUserPerf[0];

  return { info, activity, sessions, performance };
}

export { getDataMock };
