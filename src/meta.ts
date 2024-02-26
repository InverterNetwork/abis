import { UnionToIntersection } from 'type-fest'
import { MethodKey, ModuleKeys, ModuleVersion, ModuleVersionKeys } from '.'

// The value of the methodMetas object
export type MethodMeta<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = Extract<ModuleVersion<K, V>['methodMetas'][number], { name: MK }>

// Selectable tag key
export type TagKey<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = keyof MethodMeta<K, V, MK>['tags']

// Selectable tag
export type Tag<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
  TK extends TagKey<K, V, MK>,
> = MethodMeta<K, V, MK>['tags'][TK]

// Selectable description key
export type DescriptionKey<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = keyof MethodMeta<K, V, MK>['descriptions']

// Selectable description
export type Description<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
  DK extends DescriptionKey<K, V, MK>,
> = MethodMeta<K, V, MK>['descriptions'][DK]

// Selectable return description
export type ReturnDescription<
  K extends ModuleKeys,
  V extends ModuleVersionKeys,
  MK extends MethodKey<K, V>,
> = UnionToIntersection<
  Extract<
    MethodMeta<K, V, MK>,
    {
      descriptions: {
        returns: object
      }
    }
  >
>['descriptions']['returns']
