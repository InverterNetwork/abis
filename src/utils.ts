export type FindIndex<T, Name, Index extends any[] = []> = T extends readonly [
  infer First,
  ...infer Rest,
]
  ? First extends { name: infer N }
    ? N extends Name
      ? Index['length']
      : FindIndex<Rest, Name, [...Index, any]>
    : never
  : never
