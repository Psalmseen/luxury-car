import axios from 'axios';
import { store } from '../store/store';

class Service {
  async fetchCars(number = 0) {
    try {
      const { data } = await axios.get('https://car-data.p.rapidapi.com/cars', {
        params: { limit: '20', page: `${number}` },
        headers: {
          'X-RapidAPI-Key':
            '88877b4fc2msh1597cfd9479d785p16c74ajsnc34358889a85',
          'X-RapidAPI-Host': 'car-data.p.rapidapi.com',
        },
      });

      store.setCars(data);
      store.setCurrentPage(number);
    } catch (error) {
      console.log(error);
    }
  }
}

export const service = new Service();
