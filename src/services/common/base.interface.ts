export interface BaseInterface<T> {
  save(model: T): Promise<T>;
  update(_id: string, model: T): Promise<T | null>;
  delete(_id: string): Promise<Boolean>;
  findById(_id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}
