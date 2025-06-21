import axios from 'axios';

export async function loginUser(googleToken: string) {
  const res = await axios.post('/api/auth/google', { token: googleToken });
  return res.data;
}
