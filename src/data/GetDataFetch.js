const url = 'http://localhost:3000/user';

async function getUserData(userId) {
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

async function getUserActivity(userId) {
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

async function getUserSessions(userId) {
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

async function getUserPerformance(userId) {
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

async function getDataFetch(userId) {
  const userData = {
    info: await getUserData(userId),
    activity: await getUserActivity(userId),
    sessions: await getUserSessions(userId),
    performance: await getUserPerformance(userId)
  };
  return userData;
}

export default getDataFetch;
