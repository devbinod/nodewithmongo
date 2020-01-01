export interface BaseInterface<T> {

    add(t: T): Promise<T>
    update(id: string,t: T) : Promise<T | null>
    delete(id: string): Promise<Boolean >
    findById(id: string): Promise<T | null>
    findAll(): Promise<T[]>


}