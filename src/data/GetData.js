import { getDataMock } from './GetDataMock';
import getDataFetch from './GetDataFetch';

async function getData(userId) {
  const mock = false;
  if (mock) {
    const userData = getDataMock(userId);
    return userData;
  } else {
    const userData = await getDataFetch(userId);
    return userData;
  }
}

export { getData };
