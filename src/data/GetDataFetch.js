const url = ('http://localhost:3000/user')

const userInfoFetch = {
  getData: async (userId) => {
    try {
      const response = await fetch(`${url}/${userId}`);
      if (!response.ok) {
        throw new Error(`Une erreur s'est produite : ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("Erreur lors de l'appel API : ", error);
      throw error;
    }
  }
}

export default userInfoFetch;


