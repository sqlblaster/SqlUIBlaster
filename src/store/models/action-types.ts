export type Action<T = string, PL = {}> = {
  type: T;
} & PL;

export type Status = 'fetching' | 'received' | 'error';
export type AsyncAction<T = string, PL = {}> = Action<T, PL> & {
  status: Status;
};
