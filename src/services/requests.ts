import axios from 'axios';

export const getApi = async <T>(endpoint: string): Promise<T> => {
  const { data } = await axios.get<T>(`${endpoint}`);
  return data;
};
