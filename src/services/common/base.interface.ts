export interface BaseInterface<T> {
  add(model: T): Promise<T>;
  update(id: string, model: T): Promise<T | null>;
  delete(id: string): Promise<Boolean>;
  findById(id: string): Promise<T | null>;
  findAll(): Promise<T[]>;
}
