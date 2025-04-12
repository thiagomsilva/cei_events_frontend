import api from '../api';

export const getEvents = async () => {
  try {
    const response = await api.get('/events');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar eventos:', error);
    throw error;
  }
};