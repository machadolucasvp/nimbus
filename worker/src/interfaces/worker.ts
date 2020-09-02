export interface Worker {
  work: (into: string) => Promise<any>
}