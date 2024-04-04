export type Config =
  | {
      deploymentArgs: { configData: object[]; dependencyData: object[] }
    }
  | Record<
      string,
      {
        tags: Record<string, import('../../src/base').Tags>
        returnsNames: string[]
      }
    >
