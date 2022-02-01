import * as uuid from 'uuid';
import { Filter } from '../components/FilterItem/model';

export const filtersMock: Filter[] = [new Filter({ id: uuid() })];
