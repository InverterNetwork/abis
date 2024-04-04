import { Entries } from 'type-fest'

export const getEntries = <T extends object>(obj: T) =>
  Object.entries(obj) as Entries<T>
