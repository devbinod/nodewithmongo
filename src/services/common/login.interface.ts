export interface LoginInterface<T> {
  findByEmail(email: string): Promise<T | null>;
}
