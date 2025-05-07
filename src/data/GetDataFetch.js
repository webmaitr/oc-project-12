import data from './mock.jsx';

const url = 'http://localhost:3000/user';

async function getUserData(userId, mock) {
  if (mock) {
    const currentUserInfo = data.USER_MAIN_DATA.filter(
      (user) => user.id === userId
    );
    const info = currentUserInfo[0];

    return info;
  } else {
    try {
      const response = await fetch(`${url}/${userId}`);
      if (!response.ok) {
        throw new Error(`Une erreur s'est produite : ${response.status}`);
      }
      const result = await response.json();
      const info = result.data;
      return info;
    } catch (error) {
      console.error(error.message);
    }
  }
}

async function getUserActivity(userId, mock) {
  if (mock) {
    const currentUserActivity = data.USER_ACTIVITY.filter(
      (user) => user.userId === userId
    );
    const activity = currentUserActivity[0];

    return activity;
  } else {
    try {
      const response = await fetch(`${url}/${userId}/activity`);
      if (!response.ok) {
        throw new Error(`Une erreur s'est produite : ${response.status}`);
      }
      const result = await response.json();
      const activity = result.data;

      return activity;
    } catch (error) {
      console.error(error.message);
    }
  }
}

async function getUserSessions(userId, mock) {
  if (mock) {
    const currentUserSessions = data.USER_AVERAGE_SESSIONS.filter(
      (user) => user.userId === userId
    );
    const sessions = currentUserSessions[0];
    return sessions;
  } else {
    try {
      const response = await fetch(`${url}/${userId}/average-sessions`);
      if (!response.ok) {
        throw new Error(`Une erreur s'est produite : ${response.status}`);
      }
      const result = await response.json();
      const sessions = result.data;
      return sessions;
    } catch (error) {
      console.error(error.message);
    }
  }
}

async function getUserPerformance(userId, mock) {
  if (mock) {
    const currentUserPerf = data.USER_PERFORMANCE.filter(
      (user) => user.userId === userId
    );
    const performance = currentUserPerf[0];
    return performance;
  } else {
    try {
      const response = await fetch(`${url}/${userId}/performance`);
      if (!response.ok) {
        throw new Error(`Une erreur s'est produite : ${response.status}`);
      }
      const result = await response.json();
      const performance = result.data;
      return performance;
    } catch (error) {
      console.error(error.message);
    }
  }
}

export { getUserData, getUserActivity, getUserSessions, getUserPerformance };
