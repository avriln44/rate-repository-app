import AsyncStorage from '@react-native-async-storage/async-storage';

class AuthStorage {
  constructor(namespace = 'auth') {
    this.namespace = namespace;
  }

  async getAccessToken() {
    // Get the access token for the storage
    const accessTokens = await AsyncStorage.getItem(`${this.namespace}:token`);
    return accessTokens ? JSON.parse(accessTokens) : [];
  }

  async setAccessToken(accessToken) {
    // Add the access token to the storage
    const currentTokens = await this.getAccessToken();
    const newTokens = [...currentTokens, accessToken];
    await AsyncStorage.setItem(
      `${this.namespace}:token`,
      JSON.stringify(newTokens)
    );
  }

  async removeAccessToken() {
    // Remove the access token from the storage
    await AsyncStorage.removeItem(`${this.namespace}:token`);
  }
}

export default AuthStorage;
