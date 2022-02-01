export class AsyncState<R> {
  public loading: boolean = false;
  public error: boolean = false;
  public result: R;

  constructor(...inits: Partial<AsyncState<R>>[]) {
    Object.assign(this, ...inits);
  }
}
