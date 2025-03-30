import { Asset } from '../../types';
import mockData from './mockData';

export const getAssets = async (): Promise<Asset[]> => {
    // To do: It would be cool to mock a delay and load skeleton cards
  return mockData;
};