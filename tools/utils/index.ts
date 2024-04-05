import { Entries } from 'type-fest'

export const getEntries = <T extends object>(obj: T): Entries<T> =>
  Object.entries(obj) as any
