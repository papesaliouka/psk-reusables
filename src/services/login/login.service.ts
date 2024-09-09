


// Define types for the login request response
interface LoginResponse {
  token: string; // assuming the response includes a token; adjust as per the actual response
  [key: string]: any; // to allow for additional properties
}

// Type definition for loginRequest function parameters
export const loginRequest = async (email: string, password: string, API_URL: string): Promise<LoginResponse | null> => {
  try {

    const response = await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ username: email, password: password }),
    });

    const data: LoginResponse = await response.json();

    if (response.ok) {
      return data; // Return the data if the response is successful
    }

    return null; // Return null if the response is not ok
  } catch (error) {
    return null; // Return null in case of an error
  }
};
