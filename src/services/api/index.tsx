
import { http } from '../http';

interface MovieDataInterface {
  Search: [],
  randomUserData: {},
  totalResults: string
}

const getAll = async (param: string) => {
  return http.get<MovieDataInterface>(`?apikey=6c8dee69&${param}`);
};

const UserRandomServices = {
  getAll,
};

export default UserRandomServices;