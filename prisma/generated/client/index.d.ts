
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model AsanaTask
 * 
 */
export type AsanaTask = $Result.DefaultSelection<Prisma.$AsanaTaskPayload>
/**
 * Model DailyReport
 * 
 */
export type DailyReport = $Result.DefaultSelection<Prisma.$DailyReportPayload>
/**
 * Model WeeklyReport
 * 
 */
export type WeeklyReport = $Result.DefaultSelection<Prisma.$WeeklyReportPayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.asanaTask`: Exposes CRUD operations for the **AsanaTask** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AsanaTasks
    * const asanaTasks = await prisma.asanaTask.findMany()
    * ```
    */
  get asanaTask(): Prisma.AsanaTaskDelegate<ExtArgs>;

  /**
   * `prisma.dailyReport`: Exposes CRUD operations for the **DailyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more DailyReports
    * const dailyReports = await prisma.dailyReport.findMany()
    * ```
    */
  get dailyReport(): Prisma.DailyReportDelegate<ExtArgs>;

  /**
   * `prisma.weeklyReport`: Exposes CRUD operations for the **WeeklyReport** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more WeeklyReports
    * const weeklyReports = await prisma.weeklyReport.findMany()
    * ```
    */
  get weeklyReport(): Prisma.WeeklyReportDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 5.22.0
   * Query Engine version: 605197351a3c8bdd595af2d2a9bc3025bca48ea2
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    AsanaTask: 'AsanaTask',
    DailyReport: 'DailyReport',
    WeeklyReport: 'WeeklyReport'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "asanaTask" | "dailyReport" | "weeklyReport"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      AsanaTask: {
        payload: Prisma.$AsanaTaskPayload<ExtArgs>
        fields: Prisma.AsanaTaskFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AsanaTaskFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AsanaTaskFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>
          }
          findFirst: {
            args: Prisma.AsanaTaskFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AsanaTaskFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>
          }
          findMany: {
            args: Prisma.AsanaTaskFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>[]
          }
          create: {
            args: Prisma.AsanaTaskCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>
          }
          createMany: {
            args: Prisma.AsanaTaskCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AsanaTaskCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>[]
          }
          delete: {
            args: Prisma.AsanaTaskDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>
          }
          update: {
            args: Prisma.AsanaTaskUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>
          }
          deleteMany: {
            args: Prisma.AsanaTaskDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AsanaTaskUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.AsanaTaskUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AsanaTaskPayload>
          }
          aggregate: {
            args: Prisma.AsanaTaskAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAsanaTask>
          }
          groupBy: {
            args: Prisma.AsanaTaskGroupByArgs<ExtArgs>
            result: $Utils.Optional<AsanaTaskGroupByOutputType>[]
          }
          count: {
            args: Prisma.AsanaTaskCountArgs<ExtArgs>
            result: $Utils.Optional<AsanaTaskCountAggregateOutputType> | number
          }
        }
      }
      DailyReport: {
        payload: Prisma.$DailyReportPayload<ExtArgs>
        fields: Prisma.DailyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DailyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DailyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findFirst: {
            args: Prisma.DailyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DailyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          findMany: {
            args: Prisma.DailyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          create: {
            args: Prisma.DailyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          createMany: {
            args: Prisma.DailyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DailyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>[]
          }
          delete: {
            args: Prisma.DailyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          update: {
            args: Prisma.DailyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          deleteMany: {
            args: Prisma.DailyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DailyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.DailyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DailyReportPayload>
          }
          aggregate: {
            args: Prisma.DailyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDailyReport>
          }
          groupBy: {
            args: Prisma.DailyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<DailyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.DailyReportCountArgs<ExtArgs>
            result: $Utils.Optional<DailyReportCountAggregateOutputType> | number
          }
        }
      }
      WeeklyReport: {
        payload: Prisma.$WeeklyReportPayload<ExtArgs>
        fields: Prisma.WeeklyReportFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WeeklyReportFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WeeklyReportFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          findFirst: {
            args: Prisma.WeeklyReportFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WeeklyReportFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          findMany: {
            args: Prisma.WeeklyReportFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          create: {
            args: Prisma.WeeklyReportCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          createMany: {
            args: Prisma.WeeklyReportCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WeeklyReportCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>[]
          }
          delete: {
            args: Prisma.WeeklyReportDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          update: {
            args: Prisma.WeeklyReportUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          deleteMany: {
            args: Prisma.WeeklyReportDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WeeklyReportUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WeeklyReportUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WeeklyReportPayload>
          }
          aggregate: {
            args: Prisma.WeeklyReportAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWeeklyReport>
          }
          groupBy: {
            args: Prisma.WeeklyReportGroupByArgs<ExtArgs>
            result: $Utils.Optional<WeeklyReportGroupByOutputType>[]
          }
          count: {
            args: Prisma.WeeklyReportCountArgs<ExtArgs>
            result: $Utils.Optional<WeeklyReportCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    dailyReports: number
    weeklyReports: number
    tasks: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | UserCountOutputTypeCountDailyReportsArgs
    weeklyReports?: boolean | UserCountOutputTypeCountWeeklyReportsArgs
    tasks?: boolean | UserCountOutputTypeCountTasksArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountWeeklyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyReportWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountTasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsanaTaskWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    asanaToken: string | null
    asanaRefreshToken: string | null
    asanaTokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    email: string | null
    name: string | null
    password: string | null
    role: string | null
    asanaToken: string | null
    asanaRefreshToken: string | null
    asanaTokenExpiresAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    email: number
    name: number
    password: number
    role: number
    asanaToken: number
    asanaRefreshToken: number
    asanaTokenExpiresAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    asanaToken?: true
    asanaRefreshToken?: true
    asanaTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    asanaToken?: true
    asanaRefreshToken?: true
    asanaTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    email?: true
    name?: true
    password?: true
    role?: true
    asanaToken?: true
    asanaRefreshToken?: true
    asanaTokenExpiresAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    email: string
    name: string | null
    password: string
    role: string
    asanaToken: string | null
    asanaRefreshToken: string | null
    asanaTokenExpiresAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    asanaToken?: boolean
    asanaRefreshToken?: boolean
    asanaTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    weeklyReports?: boolean | User$weeklyReportsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    asanaToken?: boolean
    asanaRefreshToken?: boolean
    asanaTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    email?: boolean
    name?: boolean
    password?: boolean
    role?: boolean
    asanaToken?: boolean
    asanaRefreshToken?: boolean
    asanaTokenExpiresAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    dailyReports?: boolean | User$dailyReportsArgs<ExtArgs>
    weeklyReports?: boolean | User$weeklyReportsArgs<ExtArgs>
    tasks?: boolean | User$tasksArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      dailyReports: Prisma.$DailyReportPayload<ExtArgs>[]
      weeklyReports: Prisma.$WeeklyReportPayload<ExtArgs>[]
      tasks: Prisma.$AsanaTaskPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      name: string | null
      password: string
      role: string
      asanaToken: string | null
      asanaRefreshToken: string | null
      asanaTokenExpiresAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    dailyReports<T extends User$dailyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$dailyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany"> | Null>
    weeklyReports<T extends User$weeklyReportsArgs<ExtArgs> = {}>(args?: Subset<T, User$weeklyReportsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findMany"> | Null>
    tasks<T extends User$tasksArgs<ExtArgs> = {}>(args?: Subset<T, User$tasksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly asanaToken: FieldRef<"User", 'String'>
    readonly asanaRefreshToken: FieldRef<"User", 'String'>
    readonly asanaTokenExpiresAt: FieldRef<"User", 'DateTime'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.dailyReports
   */
  export type User$dailyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    cursor?: DailyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * User.weeklyReports
   */
  export type User$weeklyReportsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    where?: WeeklyReportWhereInput
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    cursor?: WeeklyReportWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * User.tasks
   */
  export type User$tasksArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    where?: AsanaTaskWhereInput
    orderBy?: AsanaTaskOrderByWithRelationInput | AsanaTaskOrderByWithRelationInput[]
    cursor?: AsanaTaskWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AsanaTaskScalarFieldEnum | AsanaTaskScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model AsanaTask
   */

  export type AggregateAsanaTask = {
    _count: AsanaTaskCountAggregateOutputType | null
    _min: AsanaTaskMinAggregateOutputType | null
    _max: AsanaTaskMaxAggregateOutputType | null
  }

  export type AsanaTaskMinAggregateOutputType = {
    id: string | null
    taskGid: string | null
    userId: string | null
    name: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsanaTaskMaxAggregateOutputType = {
    id: string | null
    taskGid: string | null
    userId: string | null
    name: string | null
    completedAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AsanaTaskCountAggregateOutputType = {
    id: number
    taskGid: number
    userId: number
    name: number
    completedAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AsanaTaskMinAggregateInputType = {
    id?: true
    taskGid?: true
    userId?: true
    name?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsanaTaskMaxAggregateInputType = {
    id?: true
    taskGid?: true
    userId?: true
    name?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AsanaTaskCountAggregateInputType = {
    id?: true
    taskGid?: true
    userId?: true
    name?: true
    completedAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AsanaTaskAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsanaTask to aggregate.
     */
    where?: AsanaTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsanaTasks to fetch.
     */
    orderBy?: AsanaTaskOrderByWithRelationInput | AsanaTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AsanaTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsanaTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsanaTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AsanaTasks
    **/
    _count?: true | AsanaTaskCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AsanaTaskMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AsanaTaskMaxAggregateInputType
  }

  export type GetAsanaTaskAggregateType<T extends AsanaTaskAggregateArgs> = {
        [P in keyof T & keyof AggregateAsanaTask]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAsanaTask[P]>
      : GetScalarType<T[P], AggregateAsanaTask[P]>
  }




  export type AsanaTaskGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AsanaTaskWhereInput
    orderBy?: AsanaTaskOrderByWithAggregationInput | AsanaTaskOrderByWithAggregationInput[]
    by: AsanaTaskScalarFieldEnum[] | AsanaTaskScalarFieldEnum
    having?: AsanaTaskScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AsanaTaskCountAggregateInputType | true
    _min?: AsanaTaskMinAggregateInputType
    _max?: AsanaTaskMaxAggregateInputType
  }

  export type AsanaTaskGroupByOutputType = {
    id: string
    taskGid: string
    userId: string
    name: string
    completedAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AsanaTaskCountAggregateOutputType | null
    _min: AsanaTaskMinAggregateOutputType | null
    _max: AsanaTaskMaxAggregateOutputType | null
  }

  type GetAsanaTaskGroupByPayload<T extends AsanaTaskGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AsanaTaskGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AsanaTaskGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AsanaTaskGroupByOutputType[P]>
            : GetScalarType<T[P], AsanaTaskGroupByOutputType[P]>
        }
      >
    >


  export type AsanaTaskSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskGid?: boolean
    userId?: boolean
    name?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asanaTask"]>

  export type AsanaTaskSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    taskGid?: boolean
    userId?: boolean
    name?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["asanaTask"]>

  export type AsanaTaskSelectScalar = {
    id?: boolean
    taskGid?: boolean
    userId?: boolean
    name?: boolean
    completedAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AsanaTaskInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AsanaTaskIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AsanaTaskPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "AsanaTask"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      taskGid: string
      userId: string
      name: string
      completedAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["asanaTask"]>
    composites: {}
  }

  type AsanaTaskGetPayload<S extends boolean | null | undefined | AsanaTaskDefaultArgs> = $Result.GetResult<Prisma.$AsanaTaskPayload, S>

  type AsanaTaskCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<AsanaTaskFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: AsanaTaskCountAggregateInputType | true
    }

  export interface AsanaTaskDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['AsanaTask'], meta: { name: 'AsanaTask' } }
    /**
     * Find zero or one AsanaTask that matches the filter.
     * @param {AsanaTaskFindUniqueArgs} args - Arguments to find a AsanaTask
     * @example
     * // Get one AsanaTask
     * const asanaTask = await prisma.asanaTask.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AsanaTaskFindUniqueArgs>(args: SelectSubset<T, AsanaTaskFindUniqueArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one AsanaTask that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {AsanaTaskFindUniqueOrThrowArgs} args - Arguments to find a AsanaTask
     * @example
     * // Get one AsanaTask
     * const asanaTask = await prisma.asanaTask.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AsanaTaskFindUniqueOrThrowArgs>(args: SelectSubset<T, AsanaTaskFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first AsanaTask that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskFindFirstArgs} args - Arguments to find a AsanaTask
     * @example
     * // Get one AsanaTask
     * const asanaTask = await prisma.asanaTask.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AsanaTaskFindFirstArgs>(args?: SelectSubset<T, AsanaTaskFindFirstArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first AsanaTask that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskFindFirstOrThrowArgs} args - Arguments to find a AsanaTask
     * @example
     * // Get one AsanaTask
     * const asanaTask = await prisma.asanaTask.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AsanaTaskFindFirstOrThrowArgs>(args?: SelectSubset<T, AsanaTaskFindFirstOrThrowArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more AsanaTasks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AsanaTasks
     * const asanaTasks = await prisma.asanaTask.findMany()
     * 
     * // Get first 10 AsanaTasks
     * const asanaTasks = await prisma.asanaTask.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const asanaTaskWithIdOnly = await prisma.asanaTask.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AsanaTaskFindManyArgs>(args?: SelectSubset<T, AsanaTaskFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a AsanaTask.
     * @param {AsanaTaskCreateArgs} args - Arguments to create a AsanaTask.
     * @example
     * // Create one AsanaTask
     * const AsanaTask = await prisma.asanaTask.create({
     *   data: {
     *     // ... data to create a AsanaTask
     *   }
     * })
     * 
     */
    create<T extends AsanaTaskCreateArgs>(args: SelectSubset<T, AsanaTaskCreateArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many AsanaTasks.
     * @param {AsanaTaskCreateManyArgs} args - Arguments to create many AsanaTasks.
     * @example
     * // Create many AsanaTasks
     * const asanaTask = await prisma.asanaTask.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AsanaTaskCreateManyArgs>(args?: SelectSubset<T, AsanaTaskCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many AsanaTasks and returns the data saved in the database.
     * @param {AsanaTaskCreateManyAndReturnArgs} args - Arguments to create many AsanaTasks.
     * @example
     * // Create many AsanaTasks
     * const asanaTask = await prisma.asanaTask.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many AsanaTasks and only return the `id`
     * const asanaTaskWithIdOnly = await prisma.asanaTask.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AsanaTaskCreateManyAndReturnArgs>(args?: SelectSubset<T, AsanaTaskCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a AsanaTask.
     * @param {AsanaTaskDeleteArgs} args - Arguments to delete one AsanaTask.
     * @example
     * // Delete one AsanaTask
     * const AsanaTask = await prisma.asanaTask.delete({
     *   where: {
     *     // ... filter to delete one AsanaTask
     *   }
     * })
     * 
     */
    delete<T extends AsanaTaskDeleteArgs>(args: SelectSubset<T, AsanaTaskDeleteArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one AsanaTask.
     * @param {AsanaTaskUpdateArgs} args - Arguments to update one AsanaTask.
     * @example
     * // Update one AsanaTask
     * const asanaTask = await prisma.asanaTask.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AsanaTaskUpdateArgs>(args: SelectSubset<T, AsanaTaskUpdateArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more AsanaTasks.
     * @param {AsanaTaskDeleteManyArgs} args - Arguments to filter AsanaTasks to delete.
     * @example
     * // Delete a few AsanaTasks
     * const { count } = await prisma.asanaTask.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AsanaTaskDeleteManyArgs>(args?: SelectSubset<T, AsanaTaskDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AsanaTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AsanaTasks
     * const asanaTask = await prisma.asanaTask.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AsanaTaskUpdateManyArgs>(args: SelectSubset<T, AsanaTaskUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AsanaTask.
     * @param {AsanaTaskUpsertArgs} args - Arguments to update or create a AsanaTask.
     * @example
     * // Update or create a AsanaTask
     * const asanaTask = await prisma.asanaTask.upsert({
     *   create: {
     *     // ... data to create a AsanaTask
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AsanaTask we want to update
     *   }
     * })
     */
    upsert<T extends AsanaTaskUpsertArgs>(args: SelectSubset<T, AsanaTaskUpsertArgs<ExtArgs>>): Prisma__AsanaTaskClient<$Result.GetResult<Prisma.$AsanaTaskPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of AsanaTasks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskCountArgs} args - Arguments to filter AsanaTasks to count.
     * @example
     * // Count the number of AsanaTasks
     * const count = await prisma.asanaTask.count({
     *   where: {
     *     // ... the filter for the AsanaTasks we want to count
     *   }
     * })
    **/
    count<T extends AsanaTaskCountArgs>(
      args?: Subset<T, AsanaTaskCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AsanaTaskCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AsanaTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AsanaTaskAggregateArgs>(args: Subset<T, AsanaTaskAggregateArgs>): Prisma.PrismaPromise<GetAsanaTaskAggregateType<T>>

    /**
     * Group by AsanaTask.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AsanaTaskGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AsanaTaskGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AsanaTaskGroupByArgs['orderBy'] }
        : { orderBy?: AsanaTaskGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AsanaTaskGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAsanaTaskGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the AsanaTask model
   */
  readonly fields: AsanaTaskFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for AsanaTask.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AsanaTaskClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the AsanaTask model
   */ 
  interface AsanaTaskFieldRefs {
    readonly id: FieldRef<"AsanaTask", 'String'>
    readonly taskGid: FieldRef<"AsanaTask", 'String'>
    readonly userId: FieldRef<"AsanaTask", 'String'>
    readonly name: FieldRef<"AsanaTask", 'String'>
    readonly completedAt: FieldRef<"AsanaTask", 'DateTime'>
    readonly createdAt: FieldRef<"AsanaTask", 'DateTime'>
    readonly updatedAt: FieldRef<"AsanaTask", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * AsanaTask findUnique
   */
  export type AsanaTaskFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * Filter, which AsanaTask to fetch.
     */
    where: AsanaTaskWhereUniqueInput
  }

  /**
   * AsanaTask findUniqueOrThrow
   */
  export type AsanaTaskFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * Filter, which AsanaTask to fetch.
     */
    where: AsanaTaskWhereUniqueInput
  }

  /**
   * AsanaTask findFirst
   */
  export type AsanaTaskFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * Filter, which AsanaTask to fetch.
     */
    where?: AsanaTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsanaTasks to fetch.
     */
    orderBy?: AsanaTaskOrderByWithRelationInput | AsanaTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsanaTasks.
     */
    cursor?: AsanaTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsanaTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsanaTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsanaTasks.
     */
    distinct?: AsanaTaskScalarFieldEnum | AsanaTaskScalarFieldEnum[]
  }

  /**
   * AsanaTask findFirstOrThrow
   */
  export type AsanaTaskFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * Filter, which AsanaTask to fetch.
     */
    where?: AsanaTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsanaTasks to fetch.
     */
    orderBy?: AsanaTaskOrderByWithRelationInput | AsanaTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AsanaTasks.
     */
    cursor?: AsanaTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsanaTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsanaTasks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AsanaTasks.
     */
    distinct?: AsanaTaskScalarFieldEnum | AsanaTaskScalarFieldEnum[]
  }

  /**
   * AsanaTask findMany
   */
  export type AsanaTaskFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * Filter, which AsanaTasks to fetch.
     */
    where?: AsanaTaskWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AsanaTasks to fetch.
     */
    orderBy?: AsanaTaskOrderByWithRelationInput | AsanaTaskOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AsanaTasks.
     */
    cursor?: AsanaTaskWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AsanaTasks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AsanaTasks.
     */
    skip?: number
    distinct?: AsanaTaskScalarFieldEnum | AsanaTaskScalarFieldEnum[]
  }

  /**
   * AsanaTask create
   */
  export type AsanaTaskCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * The data needed to create a AsanaTask.
     */
    data: XOR<AsanaTaskCreateInput, AsanaTaskUncheckedCreateInput>
  }

  /**
   * AsanaTask createMany
   */
  export type AsanaTaskCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many AsanaTasks.
     */
    data: AsanaTaskCreateManyInput | AsanaTaskCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * AsanaTask createManyAndReturn
   */
  export type AsanaTaskCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many AsanaTasks.
     */
    data: AsanaTaskCreateManyInput | AsanaTaskCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * AsanaTask update
   */
  export type AsanaTaskUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * The data needed to update a AsanaTask.
     */
    data: XOR<AsanaTaskUpdateInput, AsanaTaskUncheckedUpdateInput>
    /**
     * Choose, which AsanaTask to update.
     */
    where: AsanaTaskWhereUniqueInput
  }

  /**
   * AsanaTask updateMany
   */
  export type AsanaTaskUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update AsanaTasks.
     */
    data: XOR<AsanaTaskUpdateManyMutationInput, AsanaTaskUncheckedUpdateManyInput>
    /**
     * Filter which AsanaTasks to update
     */
    where?: AsanaTaskWhereInput
  }

  /**
   * AsanaTask upsert
   */
  export type AsanaTaskUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * The filter to search for the AsanaTask to update in case it exists.
     */
    where: AsanaTaskWhereUniqueInput
    /**
     * In case the AsanaTask found by the `where` argument doesn't exist, create a new AsanaTask with this data.
     */
    create: XOR<AsanaTaskCreateInput, AsanaTaskUncheckedCreateInput>
    /**
     * In case the AsanaTask was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AsanaTaskUpdateInput, AsanaTaskUncheckedUpdateInput>
  }

  /**
   * AsanaTask delete
   */
  export type AsanaTaskDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
    /**
     * Filter which AsanaTask to delete.
     */
    where: AsanaTaskWhereUniqueInput
  }

  /**
   * AsanaTask deleteMany
   */
  export type AsanaTaskDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which AsanaTasks to delete
     */
    where?: AsanaTaskWhereInput
  }

  /**
   * AsanaTask without action
   */
  export type AsanaTaskDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AsanaTask
     */
    select?: AsanaTaskSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AsanaTaskInclude<ExtArgs> | null
  }


  /**
   * Model DailyReport
   */

  export type AggregateDailyReport = {
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  export type DailyReportAvgAggregateOutputType = {
    id: number | null
  }

  export type DailyReportSumAggregateOutputType = {
    id: number | null
  }

  export type DailyReportMinAggregateOutputType = {
    id: number | null
    userId: string | null
    date: Date | null
    workspaceGid: string | null
    projectGid: string | null
    createdAt: Date | null
  }

  export type DailyReportMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    date: Date | null
    workspaceGid: string | null
    projectGid: string | null
    createdAt: Date | null
  }

  export type DailyReportCountAggregateOutputType = {
    id: number
    userId: number
    date: number
    workspaceGid: number
    projectGid: number
    tasks: number
    createdAt: number
    _all: number
  }


  export type DailyReportAvgAggregateInputType = {
    id?: true
  }

  export type DailyReportSumAggregateInputType = {
    id?: true
  }

  export type DailyReportMinAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    workspaceGid?: true
    projectGid?: true
    createdAt?: true
  }

  export type DailyReportMaxAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    workspaceGid?: true
    projectGid?: true
    createdAt?: true
  }

  export type DailyReportCountAggregateInputType = {
    id?: true
    userId?: true
    date?: true
    workspaceGid?: true
    projectGid?: true
    tasks?: true
    createdAt?: true
    _all?: true
  }

  export type DailyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReport to aggregate.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned DailyReports
    **/
    _count?: true | DailyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: DailyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: DailyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DailyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DailyReportMaxAggregateInputType
  }

  export type GetDailyReportAggregateType<T extends DailyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateDailyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDailyReport[P]>
      : GetScalarType<T[P], AggregateDailyReport[P]>
  }




  export type DailyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DailyReportWhereInput
    orderBy?: DailyReportOrderByWithAggregationInput | DailyReportOrderByWithAggregationInput[]
    by: DailyReportScalarFieldEnum[] | DailyReportScalarFieldEnum
    having?: DailyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DailyReportCountAggregateInputType | true
    _avg?: DailyReportAvgAggregateInputType
    _sum?: DailyReportSumAggregateInputType
    _min?: DailyReportMinAggregateInputType
    _max?: DailyReportMaxAggregateInputType
  }

  export type DailyReportGroupByOutputType = {
    id: number
    userId: string
    date: Date
    workspaceGid: string | null
    projectGid: string | null
    tasks: JsonValue
    createdAt: Date
    _count: DailyReportCountAggregateOutputType | null
    _avg: DailyReportAvgAggregateOutputType | null
    _sum: DailyReportSumAggregateOutputType | null
    _min: DailyReportMinAggregateOutputType | null
    _max: DailyReportMaxAggregateOutputType | null
  }

  type GetDailyReportGroupByPayload<T extends DailyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DailyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DailyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
            : GetScalarType<T[P], DailyReportGroupByOutputType[P]>
        }
      >
    >


  export type DailyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    workspaceGid?: boolean
    projectGid?: boolean
    tasks?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    date?: boolean
    workspaceGid?: boolean
    projectGid?: boolean
    tasks?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["dailyReport"]>

  export type DailyReportSelectScalar = {
    id?: boolean
    userId?: boolean
    date?: boolean
    workspaceGid?: boolean
    projectGid?: boolean
    tasks?: boolean
    createdAt?: boolean
  }

  export type DailyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type DailyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $DailyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "DailyReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      date: Date
      workspaceGid: string | null
      projectGid: string | null
      tasks: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["dailyReport"]>
    composites: {}
  }

  type DailyReportGetPayload<S extends boolean | null | undefined | DailyReportDefaultArgs> = $Result.GetResult<Prisma.$DailyReportPayload, S>

  type DailyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<DailyReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: DailyReportCountAggregateInputType | true
    }

  export interface DailyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['DailyReport'], meta: { name: 'DailyReport' } }
    /**
     * Find zero or one DailyReport that matches the filter.
     * @param {DailyReportFindUniqueArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DailyReportFindUniqueArgs>(args: SelectSubset<T, DailyReportFindUniqueArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one DailyReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {DailyReportFindUniqueOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DailyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, DailyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first DailyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DailyReportFindFirstArgs>(args?: SelectSubset<T, DailyReportFindFirstArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first DailyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindFirstOrThrowArgs} args - Arguments to find a DailyReport
     * @example
     * // Get one DailyReport
     * const dailyReport = await prisma.dailyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DailyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, DailyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more DailyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all DailyReports
     * const dailyReports = await prisma.dailyReport.findMany()
     * 
     * // Get first 10 DailyReports
     * const dailyReports = await prisma.dailyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DailyReportFindManyArgs>(args?: SelectSubset<T, DailyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a DailyReport.
     * @param {DailyReportCreateArgs} args - Arguments to create a DailyReport.
     * @example
     * // Create one DailyReport
     * const DailyReport = await prisma.dailyReport.create({
     *   data: {
     *     // ... data to create a DailyReport
     *   }
     * })
     * 
     */
    create<T extends DailyReportCreateArgs>(args: SelectSubset<T, DailyReportCreateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many DailyReports.
     * @param {DailyReportCreateManyArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DailyReportCreateManyArgs>(args?: SelectSubset<T, DailyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many DailyReports and returns the data saved in the database.
     * @param {DailyReportCreateManyAndReturnArgs} args - Arguments to create many DailyReports.
     * @example
     * // Create many DailyReports
     * const dailyReport = await prisma.dailyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many DailyReports and only return the `id`
     * const dailyReportWithIdOnly = await prisma.dailyReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DailyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, DailyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a DailyReport.
     * @param {DailyReportDeleteArgs} args - Arguments to delete one DailyReport.
     * @example
     * // Delete one DailyReport
     * const DailyReport = await prisma.dailyReport.delete({
     *   where: {
     *     // ... filter to delete one DailyReport
     *   }
     * })
     * 
     */
    delete<T extends DailyReportDeleteArgs>(args: SelectSubset<T, DailyReportDeleteArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one DailyReport.
     * @param {DailyReportUpdateArgs} args - Arguments to update one DailyReport.
     * @example
     * // Update one DailyReport
     * const dailyReport = await prisma.dailyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DailyReportUpdateArgs>(args: SelectSubset<T, DailyReportUpdateArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more DailyReports.
     * @param {DailyReportDeleteManyArgs} args - Arguments to filter DailyReports to delete.
     * @example
     * // Delete a few DailyReports
     * const { count } = await prisma.dailyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DailyReportDeleteManyArgs>(args?: SelectSubset<T, DailyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many DailyReports
     * const dailyReport = await prisma.dailyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DailyReportUpdateManyArgs>(args: SelectSubset<T, DailyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one DailyReport.
     * @param {DailyReportUpsertArgs} args - Arguments to update or create a DailyReport.
     * @example
     * // Update or create a DailyReport
     * const dailyReport = await prisma.dailyReport.upsert({
     *   create: {
     *     // ... data to create a DailyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the DailyReport we want to update
     *   }
     * })
     */
    upsert<T extends DailyReportUpsertArgs>(args: SelectSubset<T, DailyReportUpsertArgs<ExtArgs>>): Prisma__DailyReportClient<$Result.GetResult<Prisma.$DailyReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of DailyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportCountArgs} args - Arguments to filter DailyReports to count.
     * @example
     * // Count the number of DailyReports
     * const count = await prisma.dailyReport.count({
     *   where: {
     *     // ... the filter for the DailyReports we want to count
     *   }
     * })
    **/
    count<T extends DailyReportCountArgs>(
      args?: Subset<T, DailyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DailyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends DailyReportAggregateArgs>(args: Subset<T, DailyReportAggregateArgs>): Prisma.PrismaPromise<GetDailyReportAggregateType<T>>

    /**
     * Group by DailyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DailyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends DailyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DailyReportGroupByArgs['orderBy'] }
        : { orderBy?: DailyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, DailyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDailyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the DailyReport model
   */
  readonly fields: DailyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for DailyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DailyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the DailyReport model
   */ 
  interface DailyReportFieldRefs {
    readonly id: FieldRef<"DailyReport", 'Int'>
    readonly userId: FieldRef<"DailyReport", 'String'>
    readonly date: FieldRef<"DailyReport", 'DateTime'>
    readonly workspaceGid: FieldRef<"DailyReport", 'String'>
    readonly projectGid: FieldRef<"DailyReport", 'String'>
    readonly tasks: FieldRef<"DailyReport", 'Json'>
    readonly createdAt: FieldRef<"DailyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * DailyReport findUnique
   */
  export type DailyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findUniqueOrThrow
   */
  export type DailyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport findFirst
   */
  export type DailyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findFirstOrThrow
   */
  export type DailyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReport to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of DailyReports.
     */
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport findMany
   */
  export type DailyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter, which DailyReports to fetch.
     */
    where?: DailyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of DailyReports to fetch.
     */
    orderBy?: DailyReportOrderByWithRelationInput | DailyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing DailyReports.
     */
    cursor?: DailyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` DailyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` DailyReports.
     */
    skip?: number
    distinct?: DailyReportScalarFieldEnum | DailyReportScalarFieldEnum[]
  }

  /**
   * DailyReport create
   */
  export type DailyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a DailyReport.
     */
    data: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
  }

  /**
   * DailyReport createMany
   */
  export type DailyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * DailyReport createManyAndReturn
   */
  export type DailyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many DailyReports.
     */
    data: DailyReportCreateManyInput | DailyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * DailyReport update
   */
  export type DailyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a DailyReport.
     */
    data: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
    /**
     * Choose, which DailyReport to update.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport updateMany
   */
  export type DailyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update DailyReports.
     */
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyInput>
    /**
     * Filter which DailyReports to update
     */
    where?: DailyReportWhereInput
  }

  /**
   * DailyReport upsert
   */
  export type DailyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the DailyReport to update in case it exists.
     */
    where: DailyReportWhereUniqueInput
    /**
     * In case the DailyReport found by the `where` argument doesn't exist, create a new DailyReport with this data.
     */
    create: XOR<DailyReportCreateInput, DailyReportUncheckedCreateInput>
    /**
     * In case the DailyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DailyReportUpdateInput, DailyReportUncheckedUpdateInput>
  }

  /**
   * DailyReport delete
   */
  export type DailyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
    /**
     * Filter which DailyReport to delete.
     */
    where: DailyReportWhereUniqueInput
  }

  /**
   * DailyReport deleteMany
   */
  export type DailyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which DailyReports to delete
     */
    where?: DailyReportWhereInput
  }

  /**
   * DailyReport without action
   */
  export type DailyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DailyReport
     */
    select?: DailyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DailyReportInclude<ExtArgs> | null
  }


  /**
   * Model WeeklyReport
   */

  export type AggregateWeeklyReport = {
    _count: WeeklyReportCountAggregateOutputType | null
    _avg: WeeklyReportAvgAggregateOutputType | null
    _sum: WeeklyReportSumAggregateOutputType | null
    _min: WeeklyReportMinAggregateOutputType | null
    _max: WeeklyReportMaxAggregateOutputType | null
  }

  export type WeeklyReportAvgAggregateOutputType = {
    id: number | null
  }

  export type WeeklyReportSumAggregateOutputType = {
    id: number | null
  }

  export type WeeklyReportMinAggregateOutputType = {
    id: number | null
    userId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    workspaceGid: string | null
    projectGid: string | null
    createdAt: Date | null
  }

  export type WeeklyReportMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    weekStart: Date | null
    weekEnd: Date | null
    workspaceGid: string | null
    projectGid: string | null
    createdAt: Date | null
  }

  export type WeeklyReportCountAggregateOutputType = {
    id: number
    userId: number
    weekStart: number
    weekEnd: number
    workspaceGid: number
    projectGid: number
    dailyReports: number
    createdAt: number
    _all: number
  }


  export type WeeklyReportAvgAggregateInputType = {
    id?: true
  }

  export type WeeklyReportSumAggregateInputType = {
    id?: true
  }

  export type WeeklyReportMinAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    workspaceGid?: true
    projectGid?: true
    createdAt?: true
  }

  export type WeeklyReportMaxAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    workspaceGid?: true
    projectGid?: true
    createdAt?: true
  }

  export type WeeklyReportCountAggregateInputType = {
    id?: true
    userId?: true
    weekStart?: true
    weekEnd?: true
    workspaceGid?: true
    projectGid?: true
    dailyReports?: true
    createdAt?: true
    _all?: true
  }

  export type WeeklyReportAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyReport to aggregate.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned WeeklyReports
    **/
    _count?: true | WeeklyReportCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: WeeklyReportAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: WeeklyReportSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WeeklyReportMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WeeklyReportMaxAggregateInputType
  }

  export type GetWeeklyReportAggregateType<T extends WeeklyReportAggregateArgs> = {
        [P in keyof T & keyof AggregateWeeklyReport]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWeeklyReport[P]>
      : GetScalarType<T[P], AggregateWeeklyReport[P]>
  }




  export type WeeklyReportGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WeeklyReportWhereInput
    orderBy?: WeeklyReportOrderByWithAggregationInput | WeeklyReportOrderByWithAggregationInput[]
    by: WeeklyReportScalarFieldEnum[] | WeeklyReportScalarFieldEnum
    having?: WeeklyReportScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WeeklyReportCountAggregateInputType | true
    _avg?: WeeklyReportAvgAggregateInputType
    _sum?: WeeklyReportSumAggregateInputType
    _min?: WeeklyReportMinAggregateInputType
    _max?: WeeklyReportMaxAggregateInputType
  }

  export type WeeklyReportGroupByOutputType = {
    id: number
    userId: string
    weekStart: Date
    weekEnd: Date
    workspaceGid: string | null
    projectGid: string | null
    dailyReports: JsonValue
    createdAt: Date
    _count: WeeklyReportCountAggregateOutputType | null
    _avg: WeeklyReportAvgAggregateOutputType | null
    _sum: WeeklyReportSumAggregateOutputType | null
    _min: WeeklyReportMinAggregateOutputType | null
    _max: WeeklyReportMaxAggregateOutputType | null
  }

  type GetWeeklyReportGroupByPayload<T extends WeeklyReportGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WeeklyReportGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WeeklyReportGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WeeklyReportGroupByOutputType[P]>
            : GetScalarType<T[P], WeeklyReportGroupByOutputType[P]>
        }
      >
    >


  export type WeeklyReportSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    workspaceGid?: boolean
    projectGid?: boolean
    dailyReports?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    workspaceGid?: boolean
    projectGid?: boolean
    dailyReports?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["weeklyReport"]>

  export type WeeklyReportSelectScalar = {
    id?: boolean
    userId?: boolean
    weekStart?: boolean
    weekEnd?: boolean
    workspaceGid?: boolean
    projectGid?: boolean
    dailyReports?: boolean
    createdAt?: boolean
  }

  export type WeeklyReportInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WeeklyReportIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WeeklyReportPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "WeeklyReport"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      userId: string
      weekStart: Date
      weekEnd: Date
      workspaceGid: string | null
      projectGid: string | null
      dailyReports: Prisma.JsonValue
      createdAt: Date
    }, ExtArgs["result"]["weeklyReport"]>
    composites: {}
  }

  type WeeklyReportGetPayload<S extends boolean | null | undefined | WeeklyReportDefaultArgs> = $Result.GetResult<Prisma.$WeeklyReportPayload, S>

  type WeeklyReportCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WeeklyReportFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WeeklyReportCountAggregateInputType | true
    }

  export interface WeeklyReportDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['WeeklyReport'], meta: { name: 'WeeklyReport' } }
    /**
     * Find zero or one WeeklyReport that matches the filter.
     * @param {WeeklyReportFindUniqueArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WeeklyReportFindUniqueArgs>(args: SelectSubset<T, WeeklyReportFindUniqueArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one WeeklyReport that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WeeklyReportFindUniqueOrThrowArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WeeklyReportFindUniqueOrThrowArgs>(args: SelectSubset<T, WeeklyReportFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first WeeklyReport that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindFirstArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WeeklyReportFindFirstArgs>(args?: SelectSubset<T, WeeklyReportFindFirstArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first WeeklyReport that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindFirstOrThrowArgs} args - Arguments to find a WeeklyReport
     * @example
     * // Get one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WeeklyReportFindFirstOrThrowArgs>(args?: SelectSubset<T, WeeklyReportFindFirstOrThrowArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more WeeklyReports that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all WeeklyReports
     * const weeklyReports = await prisma.weeklyReport.findMany()
     * 
     * // Get first 10 WeeklyReports
     * const weeklyReports = await prisma.weeklyReport.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WeeklyReportFindManyArgs>(args?: SelectSubset<T, WeeklyReportFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a WeeklyReport.
     * @param {WeeklyReportCreateArgs} args - Arguments to create a WeeklyReport.
     * @example
     * // Create one WeeklyReport
     * const WeeklyReport = await prisma.weeklyReport.create({
     *   data: {
     *     // ... data to create a WeeklyReport
     *   }
     * })
     * 
     */
    create<T extends WeeklyReportCreateArgs>(args: SelectSubset<T, WeeklyReportCreateArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many WeeklyReports.
     * @param {WeeklyReportCreateManyArgs} args - Arguments to create many WeeklyReports.
     * @example
     * // Create many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WeeklyReportCreateManyArgs>(args?: SelectSubset<T, WeeklyReportCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many WeeklyReports and returns the data saved in the database.
     * @param {WeeklyReportCreateManyAndReturnArgs} args - Arguments to create many WeeklyReports.
     * @example
     * // Create many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many WeeklyReports and only return the `id`
     * const weeklyReportWithIdOnly = await prisma.weeklyReport.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WeeklyReportCreateManyAndReturnArgs>(args?: SelectSubset<T, WeeklyReportCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a WeeklyReport.
     * @param {WeeklyReportDeleteArgs} args - Arguments to delete one WeeklyReport.
     * @example
     * // Delete one WeeklyReport
     * const WeeklyReport = await prisma.weeklyReport.delete({
     *   where: {
     *     // ... filter to delete one WeeklyReport
     *   }
     * })
     * 
     */
    delete<T extends WeeklyReportDeleteArgs>(args: SelectSubset<T, WeeklyReportDeleteArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one WeeklyReport.
     * @param {WeeklyReportUpdateArgs} args - Arguments to update one WeeklyReport.
     * @example
     * // Update one WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WeeklyReportUpdateArgs>(args: SelectSubset<T, WeeklyReportUpdateArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more WeeklyReports.
     * @param {WeeklyReportDeleteManyArgs} args - Arguments to filter WeeklyReports to delete.
     * @example
     * // Delete a few WeeklyReports
     * const { count } = await prisma.weeklyReport.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WeeklyReportDeleteManyArgs>(args?: SelectSubset<T, WeeklyReportDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more WeeklyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many WeeklyReports
     * const weeklyReport = await prisma.weeklyReport.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WeeklyReportUpdateManyArgs>(args: SelectSubset<T, WeeklyReportUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one WeeklyReport.
     * @param {WeeklyReportUpsertArgs} args - Arguments to update or create a WeeklyReport.
     * @example
     * // Update or create a WeeklyReport
     * const weeklyReport = await prisma.weeklyReport.upsert({
     *   create: {
     *     // ... data to create a WeeklyReport
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the WeeklyReport we want to update
     *   }
     * })
     */
    upsert<T extends WeeklyReportUpsertArgs>(args: SelectSubset<T, WeeklyReportUpsertArgs<ExtArgs>>): Prisma__WeeklyReportClient<$Result.GetResult<Prisma.$WeeklyReportPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of WeeklyReports.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportCountArgs} args - Arguments to filter WeeklyReports to count.
     * @example
     * // Count the number of WeeklyReports
     * const count = await prisma.weeklyReport.count({
     *   where: {
     *     // ... the filter for the WeeklyReports we want to count
     *   }
     * })
    **/
    count<T extends WeeklyReportCountArgs>(
      args?: Subset<T, WeeklyReportCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WeeklyReportCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a WeeklyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends WeeklyReportAggregateArgs>(args: Subset<T, WeeklyReportAggregateArgs>): Prisma.PrismaPromise<GetWeeklyReportAggregateType<T>>

    /**
     * Group by WeeklyReport.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WeeklyReportGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends WeeklyReportGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WeeklyReportGroupByArgs['orderBy'] }
        : { orderBy?: WeeklyReportGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, WeeklyReportGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWeeklyReportGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the WeeklyReport model
   */
  readonly fields: WeeklyReportFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for WeeklyReport.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WeeklyReportClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the WeeklyReport model
   */ 
  interface WeeklyReportFieldRefs {
    readonly id: FieldRef<"WeeklyReport", 'Int'>
    readonly userId: FieldRef<"WeeklyReport", 'String'>
    readonly weekStart: FieldRef<"WeeklyReport", 'DateTime'>
    readonly weekEnd: FieldRef<"WeeklyReport", 'DateTime'>
    readonly workspaceGid: FieldRef<"WeeklyReport", 'String'>
    readonly projectGid: FieldRef<"WeeklyReport", 'String'>
    readonly dailyReports: FieldRef<"WeeklyReport", 'Json'>
    readonly createdAt: FieldRef<"WeeklyReport", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * WeeklyReport findUnique
   */
  export type WeeklyReportFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport findUniqueOrThrow
   */
  export type WeeklyReportFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport findFirst
   */
  export type WeeklyReportFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyReports.
     */
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport findFirstOrThrow
   */
  export type WeeklyReportFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReport to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of WeeklyReports.
     */
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport findMany
   */
  export type WeeklyReportFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter, which WeeklyReports to fetch.
     */
    where?: WeeklyReportWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of WeeklyReports to fetch.
     */
    orderBy?: WeeklyReportOrderByWithRelationInput | WeeklyReportOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing WeeklyReports.
     */
    cursor?: WeeklyReportWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` WeeklyReports from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` WeeklyReports.
     */
    skip?: number
    distinct?: WeeklyReportScalarFieldEnum | WeeklyReportScalarFieldEnum[]
  }

  /**
   * WeeklyReport create
   */
  export type WeeklyReportCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The data needed to create a WeeklyReport.
     */
    data: XOR<WeeklyReportCreateInput, WeeklyReportUncheckedCreateInput>
  }

  /**
   * WeeklyReport createMany
   */
  export type WeeklyReportCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many WeeklyReports.
     */
    data: WeeklyReportCreateManyInput | WeeklyReportCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * WeeklyReport createManyAndReturn
   */
  export type WeeklyReportCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many WeeklyReports.
     */
    data: WeeklyReportCreateManyInput | WeeklyReportCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * WeeklyReport update
   */
  export type WeeklyReportUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The data needed to update a WeeklyReport.
     */
    data: XOR<WeeklyReportUpdateInput, WeeklyReportUncheckedUpdateInput>
    /**
     * Choose, which WeeklyReport to update.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport updateMany
   */
  export type WeeklyReportUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update WeeklyReports.
     */
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyInput>
    /**
     * Filter which WeeklyReports to update
     */
    where?: WeeklyReportWhereInput
  }

  /**
   * WeeklyReport upsert
   */
  export type WeeklyReportUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * The filter to search for the WeeklyReport to update in case it exists.
     */
    where: WeeklyReportWhereUniqueInput
    /**
     * In case the WeeklyReport found by the `where` argument doesn't exist, create a new WeeklyReport with this data.
     */
    create: XOR<WeeklyReportCreateInput, WeeklyReportUncheckedCreateInput>
    /**
     * In case the WeeklyReport was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WeeklyReportUpdateInput, WeeklyReportUncheckedUpdateInput>
  }

  /**
   * WeeklyReport delete
   */
  export type WeeklyReportDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
    /**
     * Filter which WeeklyReport to delete.
     */
    where: WeeklyReportWhereUniqueInput
  }

  /**
   * WeeklyReport deleteMany
   */
  export type WeeklyReportDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which WeeklyReports to delete
     */
    where?: WeeklyReportWhereInput
  }

  /**
   * WeeklyReport without action
   */
  export type WeeklyReportDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WeeklyReport
     */
    select?: WeeklyReportSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WeeklyReportInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    email: 'email',
    name: 'name',
    password: 'password',
    role: 'role',
    asanaToken: 'asanaToken',
    asanaRefreshToken: 'asanaRefreshToken',
    asanaTokenExpiresAt: 'asanaTokenExpiresAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const AsanaTaskScalarFieldEnum: {
    id: 'id',
    taskGid: 'taskGid',
    userId: 'userId',
    name: 'name',
    completedAt: 'completedAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AsanaTaskScalarFieldEnum = (typeof AsanaTaskScalarFieldEnum)[keyof typeof AsanaTaskScalarFieldEnum]


  export const DailyReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    date: 'date',
    workspaceGid: 'workspaceGid',
    projectGid: 'projectGid',
    tasks: 'tasks',
    createdAt: 'createdAt'
  };

  export type DailyReportScalarFieldEnum = (typeof DailyReportScalarFieldEnum)[keyof typeof DailyReportScalarFieldEnum]


  export const WeeklyReportScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    weekStart: 'weekStart',
    weekEnd: 'weekEnd',
    workspaceGid: 'workspaceGid',
    projectGid: 'projectGid',
    dailyReports: 'dailyReports',
    createdAt: 'createdAt'
  };

  export type WeeklyReportScalarFieldEnum = (typeof WeeklyReportScalarFieldEnum)[keyof typeof WeeklyReportScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const JsonNullValueInput: {
    JsonNull: typeof JsonNull
  };

  export type JsonNullValueInput = (typeof JsonNullValueInput)[keyof typeof JsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    asanaToken?: StringNullableFilter<"User"> | string | null
    asanaRefreshToken?: StringNullableFilter<"User"> | string | null
    asanaTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dailyReports?: DailyReportListRelationFilter
    weeklyReports?: WeeklyReportListRelationFilter
    tasks?: AsanaTaskListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    asanaToken?: SortOrderInput | SortOrder
    asanaRefreshToken?: SortOrderInput | SortOrder
    asanaTokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    dailyReports?: DailyReportOrderByRelationAggregateInput
    weeklyReports?: WeeklyReportOrderByRelationAggregateInput
    tasks?: AsanaTaskOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    password?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    asanaToken?: StringNullableFilter<"User"> | string | null
    asanaRefreshToken?: StringNullableFilter<"User"> | string | null
    asanaTokenExpiresAt?: DateTimeNullableFilter<"User"> | Date | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    dailyReports?: DailyReportListRelationFilter
    weeklyReports?: WeeklyReportListRelationFilter
    tasks?: AsanaTaskListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    password?: SortOrder
    role?: SortOrder
    asanaToken?: SortOrderInput | SortOrder
    asanaRefreshToken?: SortOrderInput | SortOrder
    asanaTokenExpiresAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    asanaToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    asanaRefreshToken?: StringNullableWithAggregatesFilter<"User"> | string | null
    asanaTokenExpiresAt?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type AsanaTaskWhereInput = {
    AND?: AsanaTaskWhereInput | AsanaTaskWhereInput[]
    OR?: AsanaTaskWhereInput[]
    NOT?: AsanaTaskWhereInput | AsanaTaskWhereInput[]
    id?: StringFilter<"AsanaTask"> | string
    taskGid?: StringFilter<"AsanaTask"> | string
    userId?: StringFilter<"AsanaTask"> | string
    name?: StringFilter<"AsanaTask"> | string
    completedAt?: DateTimeNullableFilter<"AsanaTask"> | Date | string | null
    createdAt?: DateTimeFilter<"AsanaTask"> | Date | string
    updatedAt?: DateTimeFilter<"AsanaTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AsanaTaskOrderByWithRelationInput = {
    id?: SortOrder
    taskGid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AsanaTaskWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    taskGid?: string
    AND?: AsanaTaskWhereInput | AsanaTaskWhereInput[]
    OR?: AsanaTaskWhereInput[]
    NOT?: AsanaTaskWhereInput | AsanaTaskWhereInput[]
    userId?: StringFilter<"AsanaTask"> | string
    name?: StringFilter<"AsanaTask"> | string
    completedAt?: DateTimeNullableFilter<"AsanaTask"> | Date | string | null
    createdAt?: DateTimeFilter<"AsanaTask"> | Date | string
    updatedAt?: DateTimeFilter<"AsanaTask"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "taskGid">

  export type AsanaTaskOrderByWithAggregationInput = {
    id?: SortOrder
    taskGid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AsanaTaskCountOrderByAggregateInput
    _max?: AsanaTaskMaxOrderByAggregateInput
    _min?: AsanaTaskMinOrderByAggregateInput
  }

  export type AsanaTaskScalarWhereWithAggregatesInput = {
    AND?: AsanaTaskScalarWhereWithAggregatesInput | AsanaTaskScalarWhereWithAggregatesInput[]
    OR?: AsanaTaskScalarWhereWithAggregatesInput[]
    NOT?: AsanaTaskScalarWhereWithAggregatesInput | AsanaTaskScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"AsanaTask"> | string
    taskGid?: StringWithAggregatesFilter<"AsanaTask"> | string
    userId?: StringWithAggregatesFilter<"AsanaTask"> | string
    name?: StringWithAggregatesFilter<"AsanaTask"> | string
    completedAt?: DateTimeNullableWithAggregatesFilter<"AsanaTask"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"AsanaTask"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"AsanaTask"> | Date | string
  }

  export type DailyReportWhereInput = {
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    id?: IntFilter<"DailyReport"> | number
    userId?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    workspaceGid?: StringNullableFilter<"DailyReport"> | string | null
    projectGid?: StringNullableFilter<"DailyReport"> | string | null
    tasks?: JsonFilter<"DailyReport">
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type DailyReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    workspaceGid?: SortOrderInput | SortOrder
    projectGid?: SortOrderInput | SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type DailyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: DailyReportWhereInput | DailyReportWhereInput[]
    OR?: DailyReportWhereInput[]
    NOT?: DailyReportWhereInput | DailyReportWhereInput[]
    userId?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    workspaceGid?: StringNullableFilter<"DailyReport"> | string | null
    projectGid?: StringNullableFilter<"DailyReport"> | string | null
    tasks?: JsonFilter<"DailyReport">
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type DailyReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    workspaceGid?: SortOrderInput | SortOrder
    projectGid?: SortOrderInput | SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
    _count?: DailyReportCountOrderByAggregateInput
    _avg?: DailyReportAvgOrderByAggregateInput
    _max?: DailyReportMaxOrderByAggregateInput
    _min?: DailyReportMinOrderByAggregateInput
    _sum?: DailyReportSumOrderByAggregateInput
  }

  export type DailyReportScalarWhereWithAggregatesInput = {
    AND?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    OR?: DailyReportScalarWhereWithAggregatesInput[]
    NOT?: DailyReportScalarWhereWithAggregatesInput | DailyReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"DailyReport"> | number
    userId?: StringWithAggregatesFilter<"DailyReport"> | string
    date?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
    workspaceGid?: StringNullableWithAggregatesFilter<"DailyReport"> | string | null
    projectGid?: StringNullableWithAggregatesFilter<"DailyReport"> | string | null
    tasks?: JsonWithAggregatesFilter<"DailyReport">
    createdAt?: DateTimeWithAggregatesFilter<"DailyReport"> | Date | string
  }

  export type WeeklyReportWhereInput = {
    AND?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    OR?: WeeklyReportWhereInput[]
    NOT?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    id?: IntFilter<"WeeklyReport"> | number
    userId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    workspaceGid?: StringNullableFilter<"WeeklyReport"> | string | null
    projectGid?: StringNullableFilter<"WeeklyReport"> | string | null
    dailyReports?: JsonFilter<"WeeklyReport">
    createdAt?: DateTimeFilter<"WeeklyReport"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type WeeklyReportOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    workspaceGid?: SortOrderInput | SortOrder
    projectGid?: SortOrderInput | SortOrder
    dailyReports?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type WeeklyReportWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    OR?: WeeklyReportWhereInput[]
    NOT?: WeeklyReportWhereInput | WeeklyReportWhereInput[]
    userId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    workspaceGid?: StringNullableFilter<"WeeklyReport"> | string | null
    projectGid?: StringNullableFilter<"WeeklyReport"> | string | null
    dailyReports?: JsonFilter<"WeeklyReport">
    createdAt?: DateTimeFilter<"WeeklyReport"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type WeeklyReportOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    workspaceGid?: SortOrderInput | SortOrder
    projectGid?: SortOrderInput | SortOrder
    dailyReports?: SortOrder
    createdAt?: SortOrder
    _count?: WeeklyReportCountOrderByAggregateInput
    _avg?: WeeklyReportAvgOrderByAggregateInput
    _max?: WeeklyReportMaxOrderByAggregateInput
    _min?: WeeklyReportMinOrderByAggregateInput
    _sum?: WeeklyReportSumOrderByAggregateInput
  }

  export type WeeklyReportScalarWhereWithAggregatesInput = {
    AND?: WeeklyReportScalarWhereWithAggregatesInput | WeeklyReportScalarWhereWithAggregatesInput[]
    OR?: WeeklyReportScalarWhereWithAggregatesInput[]
    NOT?: WeeklyReportScalarWhereWithAggregatesInput | WeeklyReportScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"WeeklyReport"> | number
    userId?: StringWithAggregatesFilter<"WeeklyReport"> | string
    weekStart?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
    workspaceGid?: StringNullableWithAggregatesFilter<"WeeklyReport"> | string | null
    projectGid?: StringNullableWithAggregatesFilter<"WeeklyReport"> | string | null
    dailyReports?: JsonWithAggregatesFilter<"WeeklyReport">
    createdAt?: DateTimeWithAggregatesFilter<"WeeklyReport"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
    tasks?: AsanaTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
    tasks?: AsanaTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
    tasks?: AsanaTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
    tasks?: AsanaTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsanaTaskCreateInput = {
    id?: string
    taskGid: string
    name: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTasksInput
  }

  export type AsanaTaskUncheckedCreateInput = {
    id?: string
    taskGid: string
    userId: string
    name: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsanaTaskUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTasksNestedInput
  }

  export type AsanaTaskUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsanaTaskCreateManyInput = {
    id?: string
    taskGid: string
    userId: string
    name: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsanaTaskUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsanaTaskUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateInput = {
    date: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutDailyReportsInput
  }

  export type DailyReportUncheckedCreateInput = {
    id?: number
    userId: string
    date: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyReportUpdateInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutDailyReportsNestedInput
  }

  export type DailyReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportCreateManyInput = {
    id?: number
    userId: string
    date: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyReportUpdateManyMutationInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportCreateInput = {
    weekStart: Date | string
    weekEnd: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    dailyReports: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutWeeklyReportsInput
  }

  export type WeeklyReportUncheckedCreateInput = {
    id?: number
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    dailyReports: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeeklyReportUpdateInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWeeklyReportsNestedInput
  }

  export type WeeklyReportUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportCreateManyInput = {
    id?: number
    userId: string
    weekStart: Date | string
    weekEnd: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    dailyReports: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeeklyReportUpdateManyMutationInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type DailyReportListRelationFilter = {
    every?: DailyReportWhereInput
    some?: DailyReportWhereInput
    none?: DailyReportWhereInput
  }

  export type WeeklyReportListRelationFilter = {
    every?: WeeklyReportWhereInput
    some?: WeeklyReportWhereInput
    none?: WeeklyReportWhereInput
  }

  export type AsanaTaskListRelationFilter = {
    every?: AsanaTaskWhereInput
    some?: AsanaTaskWhereInput
    none?: AsanaTaskWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type DailyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WeeklyReportOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AsanaTaskOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    asanaToken?: SortOrder
    asanaRefreshToken?: SortOrder
    asanaTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    asanaToken?: SortOrder
    asanaRefreshToken?: SortOrder
    asanaTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    name?: SortOrder
    password?: SortOrder
    role?: SortOrder
    asanaToken?: SortOrder
    asanaRefreshToken?: SortOrder
    asanaTokenExpiresAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AsanaTaskCountOrderByAggregateInput = {
    id?: SortOrder
    taskGid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsanaTaskMaxOrderByAggregateInput = {
    id?: SortOrder
    taskGid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AsanaTaskMinOrderByAggregateInput = {
    id?: SortOrder
    taskGid?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    completedAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }
  export type JsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonFilterBase<$PrismaModel>>, 'path'>>

  export type JsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DailyReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    workspaceGid?: SortOrder
    projectGid?: SortOrder
    tasks?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DailyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    workspaceGid?: SortOrder
    projectGid?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    date?: SortOrder
    workspaceGid?: SortOrder
    projectGid?: SortOrder
    createdAt?: SortOrder
  }

  export type DailyReportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }
  export type JsonWithAggregatesFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type WeeklyReportCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    workspaceGid?: SortOrder
    projectGid?: SortOrder
    dailyReports?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklyReportAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type WeeklyReportMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    workspaceGid?: SortOrder
    projectGid?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklyReportMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    weekStart?: SortOrder
    weekEnd?: SortOrder
    workspaceGid?: SortOrder
    projectGid?: SortOrder
    createdAt?: SortOrder
  }

  export type WeeklyReportSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DailyReportCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type WeeklyReportCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
  }

  export type AsanaTaskCreateNestedManyWithoutUserInput = {
    create?: XOR<AsanaTaskCreateWithoutUserInput, AsanaTaskUncheckedCreateWithoutUserInput> | AsanaTaskCreateWithoutUserInput[] | AsanaTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AsanaTaskCreateOrConnectWithoutUserInput | AsanaTaskCreateOrConnectWithoutUserInput[]
    createMany?: AsanaTaskCreateManyUserInputEnvelope
    connect?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
  }

  export type DailyReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
  }

  export type WeeklyReportUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
  }

  export type AsanaTaskUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AsanaTaskCreateWithoutUserInput, AsanaTaskUncheckedCreateWithoutUserInput> | AsanaTaskCreateWithoutUserInput[] | AsanaTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AsanaTaskCreateOrConnectWithoutUserInput | AsanaTaskCreateOrConnectWithoutUserInput[]
    createMany?: AsanaTaskCreateManyUserInputEnvelope
    connect?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type DailyReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutUserInput | DailyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutUserInput | DailyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutUserInput | DailyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type WeeklyReportUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyReportUpsertWithWhereUniqueWithoutUserInput | WeeklyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    set?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    disconnect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    delete?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    update?: WeeklyReportUpdateWithWhereUniqueWithoutUserInput | WeeklyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyReportUpdateManyWithWhereWithoutUserInput | WeeklyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
  }

  export type AsanaTaskUpdateManyWithoutUserNestedInput = {
    create?: XOR<AsanaTaskCreateWithoutUserInput, AsanaTaskUncheckedCreateWithoutUserInput> | AsanaTaskCreateWithoutUserInput[] | AsanaTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AsanaTaskCreateOrConnectWithoutUserInput | AsanaTaskCreateOrConnectWithoutUserInput[]
    upsert?: AsanaTaskUpsertWithWhereUniqueWithoutUserInput | AsanaTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AsanaTaskCreateManyUserInputEnvelope
    set?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    disconnect?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    delete?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    connect?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    update?: AsanaTaskUpdateWithWhereUniqueWithoutUserInput | AsanaTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AsanaTaskUpdateManyWithWhereWithoutUserInput | AsanaTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AsanaTaskScalarWhereInput | AsanaTaskScalarWhereInput[]
  }

  export type DailyReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput> | DailyReportCreateWithoutUserInput[] | DailyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: DailyReportCreateOrConnectWithoutUserInput | DailyReportCreateOrConnectWithoutUserInput[]
    upsert?: DailyReportUpsertWithWhereUniqueWithoutUserInput | DailyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: DailyReportCreateManyUserInputEnvelope
    set?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    disconnect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    delete?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    connect?: DailyReportWhereUniqueInput | DailyReportWhereUniqueInput[]
    update?: DailyReportUpdateWithWhereUniqueWithoutUserInput | DailyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: DailyReportUpdateManyWithWhereWithoutUserInput | DailyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
  }

  export type WeeklyReportUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput> | WeeklyReportCreateWithoutUserInput[] | WeeklyReportUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WeeklyReportCreateOrConnectWithoutUserInput | WeeklyReportCreateOrConnectWithoutUserInput[]
    upsert?: WeeklyReportUpsertWithWhereUniqueWithoutUserInput | WeeklyReportUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WeeklyReportCreateManyUserInputEnvelope
    set?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    disconnect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    delete?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    connect?: WeeklyReportWhereUniqueInput | WeeklyReportWhereUniqueInput[]
    update?: WeeklyReportUpdateWithWhereUniqueWithoutUserInput | WeeklyReportUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WeeklyReportUpdateManyWithWhereWithoutUserInput | WeeklyReportUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
  }

  export type AsanaTaskUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AsanaTaskCreateWithoutUserInput, AsanaTaskUncheckedCreateWithoutUserInput> | AsanaTaskCreateWithoutUserInput[] | AsanaTaskUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AsanaTaskCreateOrConnectWithoutUserInput | AsanaTaskCreateOrConnectWithoutUserInput[]
    upsert?: AsanaTaskUpsertWithWhereUniqueWithoutUserInput | AsanaTaskUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AsanaTaskCreateManyUserInputEnvelope
    set?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    disconnect?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    delete?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    connect?: AsanaTaskWhereUniqueInput | AsanaTaskWhereUniqueInput[]
    update?: AsanaTaskUpdateWithWhereUniqueWithoutUserInput | AsanaTaskUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AsanaTaskUpdateManyWithWhereWithoutUserInput | AsanaTaskUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AsanaTaskScalarWhereInput | AsanaTaskScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutTasksInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutTasksNestedInput = {
    create?: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    connectOrCreate?: UserCreateOrConnectWithoutTasksInput
    upsert?: UserUpsertWithoutTasksInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTasksInput, UserUpdateWithoutTasksInput>, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserCreateNestedOneWithoutDailyReportsInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutDailyReportsNestedInput = {
    create?: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDailyReportsInput
    upsert?: UserUpsertWithoutDailyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDailyReportsInput, UserUpdateWithoutDailyReportsInput>, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserCreateNestedOneWithoutWeeklyReportsInput = {
    create?: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyReportsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutWeeklyReportsNestedInput = {
    create?: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWeeklyReportsInput
    upsert?: UserUpsertWithoutWeeklyReportsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWeeklyReportsInput, UserUpdateWithoutWeeklyReportsInput>, UserUncheckedUpdateWithoutWeeklyReportsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }
  export type NestedJsonFilter<$PrismaModel = never> = 
    | PatchUndefined<
        Either<Required<NestedJsonFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type DailyReportCreateWithoutUserInput = {
    date: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyReportUncheckedCreateWithoutUserInput = {
    id?: number
    date: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type DailyReportCreateOrConnectWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    create: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput>
  }

  export type DailyReportCreateManyUserInputEnvelope = {
    data: DailyReportCreateManyUserInput | DailyReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WeeklyReportCreateWithoutUserInput = {
    weekStart: Date | string
    weekEnd: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    dailyReports: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeeklyReportUncheckedCreateWithoutUserInput = {
    id?: number
    weekStart: Date | string
    weekEnd: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    dailyReports: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeeklyReportCreateOrConnectWithoutUserInput = {
    where: WeeklyReportWhereUniqueInput
    create: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput>
  }

  export type WeeklyReportCreateManyUserInputEnvelope = {
    data: WeeklyReportCreateManyUserInput | WeeklyReportCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AsanaTaskCreateWithoutUserInput = {
    id?: string
    taskGid: string
    name: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsanaTaskUncheckedCreateWithoutUserInput = {
    id?: string
    taskGid: string
    name: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AsanaTaskCreateOrConnectWithoutUserInput = {
    where: AsanaTaskWhereUniqueInput
    create: XOR<AsanaTaskCreateWithoutUserInput, AsanaTaskUncheckedCreateWithoutUserInput>
  }

  export type AsanaTaskCreateManyUserInputEnvelope = {
    data: AsanaTaskCreateManyUserInput | AsanaTaskCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type DailyReportUpsertWithWhereUniqueWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    update: XOR<DailyReportUpdateWithoutUserInput, DailyReportUncheckedUpdateWithoutUserInput>
    create: XOR<DailyReportCreateWithoutUserInput, DailyReportUncheckedCreateWithoutUserInput>
  }

  export type DailyReportUpdateWithWhereUniqueWithoutUserInput = {
    where: DailyReportWhereUniqueInput
    data: XOR<DailyReportUpdateWithoutUserInput, DailyReportUncheckedUpdateWithoutUserInput>
  }

  export type DailyReportUpdateManyWithWhereWithoutUserInput = {
    where: DailyReportScalarWhereInput
    data: XOR<DailyReportUpdateManyMutationInput, DailyReportUncheckedUpdateManyWithoutUserInput>
  }

  export type DailyReportScalarWhereInput = {
    AND?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    OR?: DailyReportScalarWhereInput[]
    NOT?: DailyReportScalarWhereInput | DailyReportScalarWhereInput[]
    id?: IntFilter<"DailyReport"> | number
    userId?: StringFilter<"DailyReport"> | string
    date?: DateTimeFilter<"DailyReport"> | Date | string
    workspaceGid?: StringNullableFilter<"DailyReport"> | string | null
    projectGid?: StringNullableFilter<"DailyReport"> | string | null
    tasks?: JsonFilter<"DailyReport">
    createdAt?: DateTimeFilter<"DailyReport"> | Date | string
  }

  export type WeeklyReportUpsertWithWhereUniqueWithoutUserInput = {
    where: WeeklyReportWhereUniqueInput
    update: XOR<WeeklyReportUpdateWithoutUserInput, WeeklyReportUncheckedUpdateWithoutUserInput>
    create: XOR<WeeklyReportCreateWithoutUserInput, WeeklyReportUncheckedCreateWithoutUserInput>
  }

  export type WeeklyReportUpdateWithWhereUniqueWithoutUserInput = {
    where: WeeklyReportWhereUniqueInput
    data: XOR<WeeklyReportUpdateWithoutUserInput, WeeklyReportUncheckedUpdateWithoutUserInput>
  }

  export type WeeklyReportUpdateManyWithWhereWithoutUserInput = {
    where: WeeklyReportScalarWhereInput
    data: XOR<WeeklyReportUpdateManyMutationInput, WeeklyReportUncheckedUpdateManyWithoutUserInput>
  }

  export type WeeklyReportScalarWhereInput = {
    AND?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
    OR?: WeeklyReportScalarWhereInput[]
    NOT?: WeeklyReportScalarWhereInput | WeeklyReportScalarWhereInput[]
    id?: IntFilter<"WeeklyReport"> | number
    userId?: StringFilter<"WeeklyReport"> | string
    weekStart?: DateTimeFilter<"WeeklyReport"> | Date | string
    weekEnd?: DateTimeFilter<"WeeklyReport"> | Date | string
    workspaceGid?: StringNullableFilter<"WeeklyReport"> | string | null
    projectGid?: StringNullableFilter<"WeeklyReport"> | string | null
    dailyReports?: JsonFilter<"WeeklyReport">
    createdAt?: DateTimeFilter<"WeeklyReport"> | Date | string
  }

  export type AsanaTaskUpsertWithWhereUniqueWithoutUserInput = {
    where: AsanaTaskWhereUniqueInput
    update: XOR<AsanaTaskUpdateWithoutUserInput, AsanaTaskUncheckedUpdateWithoutUserInput>
    create: XOR<AsanaTaskCreateWithoutUserInput, AsanaTaskUncheckedCreateWithoutUserInput>
  }

  export type AsanaTaskUpdateWithWhereUniqueWithoutUserInput = {
    where: AsanaTaskWhereUniqueInput
    data: XOR<AsanaTaskUpdateWithoutUserInput, AsanaTaskUncheckedUpdateWithoutUserInput>
  }

  export type AsanaTaskUpdateManyWithWhereWithoutUserInput = {
    where: AsanaTaskScalarWhereInput
    data: XOR<AsanaTaskUpdateManyMutationInput, AsanaTaskUncheckedUpdateManyWithoutUserInput>
  }

  export type AsanaTaskScalarWhereInput = {
    AND?: AsanaTaskScalarWhereInput | AsanaTaskScalarWhereInput[]
    OR?: AsanaTaskScalarWhereInput[]
    NOT?: AsanaTaskScalarWhereInput | AsanaTaskScalarWhereInput[]
    id?: StringFilter<"AsanaTask"> | string
    taskGid?: StringFilter<"AsanaTask"> | string
    userId?: StringFilter<"AsanaTask"> | string
    name?: StringFilter<"AsanaTask"> | string
    completedAt?: DateTimeNullableFilter<"AsanaTask"> | Date | string | null
    createdAt?: DateTimeFilter<"AsanaTask"> | Date | string
    updatedAt?: DateTimeFilter<"AsanaTask"> | Date | string
  }

  export type UserCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTasksInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTasksInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
  }

  export type UserUpsertWithoutTasksInput = {
    update: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
    create: XOR<UserCreateWithoutTasksInput, UserUncheckedCreateWithoutTasksInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTasksInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTasksInput, UserUncheckedUpdateWithoutTasksInput>
  }

  export type UserUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTasksInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutDailyReportsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklyReports?: WeeklyReportCreateNestedManyWithoutUserInput
    tasks?: AsanaTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutDailyReportsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    weeklyReports?: WeeklyReportUncheckedCreateNestedManyWithoutUserInput
    tasks?: AsanaTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutDailyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
  }

  export type UserUpsertWithoutDailyReportsInput = {
    update: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
    create: XOR<UserCreateWithoutDailyReportsInput, UserUncheckedCreateWithoutDailyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDailyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDailyReportsInput, UserUncheckedUpdateWithoutDailyReportsInput>
  }

  export type UserUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklyReports?: WeeklyReportUpdateManyWithoutUserNestedInput
    tasks?: AsanaTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutDailyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    weeklyReports?: WeeklyReportUncheckedUpdateManyWithoutUserNestedInput
    tasks?: AsanaTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutWeeklyReportsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportCreateNestedManyWithoutUserInput
    tasks?: AsanaTaskCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWeeklyReportsInput = {
    id?: string
    email: string
    name?: string | null
    password: string
    role?: string
    asanaToken?: string | null
    asanaRefreshToken?: string | null
    asanaTokenExpiresAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    dailyReports?: DailyReportUncheckedCreateNestedManyWithoutUserInput
    tasks?: AsanaTaskUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWeeklyReportsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
  }

  export type UserUpsertWithoutWeeklyReportsInput = {
    update: XOR<UserUpdateWithoutWeeklyReportsInput, UserUncheckedUpdateWithoutWeeklyReportsInput>
    create: XOR<UserCreateWithoutWeeklyReportsInput, UserUncheckedCreateWithoutWeeklyReportsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWeeklyReportsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWeeklyReportsInput, UserUncheckedUpdateWithoutWeeklyReportsInput>
  }

  export type UserUpdateWithoutWeeklyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUpdateManyWithoutUserNestedInput
    tasks?: AsanaTaskUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWeeklyReportsInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    password?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    asanaToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaRefreshToken?: NullableStringFieldUpdateOperationsInput | string | null
    asanaTokenExpiresAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    dailyReports?: DailyReportUncheckedUpdateManyWithoutUserNestedInput
    tasks?: AsanaTaskUncheckedUpdateManyWithoutUserNestedInput
  }

  export type DailyReportCreateManyUserInput = {
    id?: number
    date: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    tasks: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WeeklyReportCreateManyUserInput = {
    id?: number
    weekStart: Date | string
    weekEnd: Date | string
    workspaceGid?: string | null
    projectGid?: string | null
    dailyReports: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type AsanaTaskCreateManyUserInput = {
    id?: string
    taskGid: string
    name: string
    completedAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type DailyReportUpdateWithoutUserInput = {
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type DailyReportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    date?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    tasks?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUpdateWithoutUserInput = {
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WeeklyReportUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    weekStart?: DateTimeFieldUpdateOperationsInput | Date | string
    weekEnd?: DateTimeFieldUpdateOperationsInput | Date | string
    workspaceGid?: NullableStringFieldUpdateOperationsInput | string | null
    projectGid?: NullableStringFieldUpdateOperationsInput | string | null
    dailyReports?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsanaTaskUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsanaTaskUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AsanaTaskUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    taskGid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    completedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use UserCountOutputTypeDefaultArgs instead
     */
    export type UserCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AsanaTaskDefaultArgs instead
     */
    export type AsanaTaskArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = AsanaTaskDefaultArgs<ExtArgs>
    /**
     * @deprecated Use DailyReportDefaultArgs instead
     */
    export type DailyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = DailyReportDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WeeklyReportDefaultArgs instead
     */
    export type WeeklyReportArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WeeklyReportDefaultArgs<ExtArgs>

  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}