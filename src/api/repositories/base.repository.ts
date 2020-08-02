import { Repository } from "typeorm";

const buildNotImplementedError = () => new Error('Method not implemented');

export abstract class BaseRepository<T, K> {
  repository: Repository<T>

  constructor(repository: Repository<T>) {
    this.repository = repository;
  }

  async create(entity: T): Promise<T> {
    return this.repository.create(entity);
  }

  async findById(identifier: K): Promise<T | undefined> {
    return this.repository.findOne(identifier);
  }

  async update(identifier: K, entity: T): Promise<T> { throw buildNotImplementedError() }
  async delete(identifier: K): Promise<T> { throw buildNotImplementedError() }
}