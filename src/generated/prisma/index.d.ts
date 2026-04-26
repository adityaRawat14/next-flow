
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Workflow
 * 
 */
export type Workflow = $Result.DefaultSelection<Prisma.$WorkflowPayload>
/**
 * Model Node
 * 
 */
export type Node = $Result.DefaultSelection<Prisma.$NodePayload>
/**
 * Model Edge
 * 
 */
export type Edge = $Result.DefaultSelection<Prisma.$EdgePayload>
/**
 * Model ExecutionHistory
 * 
 */
export type ExecutionHistory = $Result.DefaultSelection<Prisma.$ExecutionHistoryPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.workflow`: Exposes CRUD operations for the **Workflow** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workflows
    * const workflows = await prisma.workflow.findMany()
    * ```
    */
  get workflow(): Prisma.WorkflowDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.node`: Exposes CRUD operations for the **Node** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Nodes
    * const nodes = await prisma.node.findMany()
    * ```
    */
  get node(): Prisma.NodeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.edge`: Exposes CRUD operations for the **Edge** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Edges
    * const edges = await prisma.edge.findMany()
    * ```
    */
  get edge(): Prisma.EdgeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.executionHistory`: Exposes CRUD operations for the **ExecutionHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ExecutionHistories
    * const executionHistories = await prisma.executionHistory.findMany()
    * ```
    */
  get executionHistory(): Prisma.ExecutionHistoryDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.8.0
   * Query Engine version: 3c6e192761c0362d496ed980de936e2f3cebcd3a
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Workflow: 'Workflow',
    Node: 'Node',
    Edge: 'Edge',
    ExecutionHistory: 'ExecutionHistory'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "workflow" | "node" | "edge" | "executionHistory"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Workflow: {
        payload: Prisma.$WorkflowPayload<ExtArgs>
        fields: Prisma.WorkflowFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkflowFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkflowFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findFirst: {
            args: Prisma.WorkflowFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkflowFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          findMany: {
            args: Prisma.WorkflowFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          create: {
            args: Prisma.WorkflowCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          createMany: {
            args: Prisma.WorkflowCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkflowCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          delete: {
            args: Prisma.WorkflowDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          update: {
            args: Prisma.WorkflowUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          deleteMany: {
            args: Prisma.WorkflowDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkflowUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.WorkflowUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>[]
          }
          upsert: {
            args: Prisma.WorkflowUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkflowPayload>
          }
          aggregate: {
            args: Prisma.WorkflowAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkflow>
          }
          groupBy: {
            args: Prisma.WorkflowGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkflowGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkflowCountArgs<ExtArgs>
            result: $Utils.Optional<WorkflowCountAggregateOutputType> | number
          }
        }
      }
      Node: {
        payload: Prisma.$NodePayload<ExtArgs>
        fields: Prisma.NodeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NodeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NodeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findFirst: {
            args: Prisma.NodeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NodeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          findMany: {
            args: Prisma.NodeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          create: {
            args: Prisma.NodeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          createMany: {
            args: Prisma.NodeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NodeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          delete: {
            args: Prisma.NodeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          update: {
            args: Prisma.NodeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          deleteMany: {
            args: Prisma.NodeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NodeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NodeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>[]
          }
          upsert: {
            args: Prisma.NodeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NodePayload>
          }
          aggregate: {
            args: Prisma.NodeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNode>
          }
          groupBy: {
            args: Prisma.NodeGroupByArgs<ExtArgs>
            result: $Utils.Optional<NodeGroupByOutputType>[]
          }
          count: {
            args: Prisma.NodeCountArgs<ExtArgs>
            result: $Utils.Optional<NodeCountAggregateOutputType> | number
          }
        }
      }
      Edge: {
        payload: Prisma.$EdgePayload<ExtArgs>
        fields: Prisma.EdgeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EdgeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EdgeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          findFirst: {
            args: Prisma.EdgeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EdgeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          findMany: {
            args: Prisma.EdgeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>[]
          }
          create: {
            args: Prisma.EdgeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          createMany: {
            args: Prisma.EdgeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EdgeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>[]
          }
          delete: {
            args: Prisma.EdgeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          update: {
            args: Prisma.EdgeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          deleteMany: {
            args: Prisma.EdgeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EdgeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EdgeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>[]
          }
          upsert: {
            args: Prisma.EdgeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EdgePayload>
          }
          aggregate: {
            args: Prisma.EdgeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEdge>
          }
          groupBy: {
            args: Prisma.EdgeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EdgeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EdgeCountArgs<ExtArgs>
            result: $Utils.Optional<EdgeCountAggregateOutputType> | number
          }
        }
      }
      ExecutionHistory: {
        payload: Prisma.$ExecutionHistoryPayload<ExtArgs>
        fields: Prisma.ExecutionHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExecutionHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          findFirst: {
            args: Prisma.ExecutionHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExecutionHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          findMany: {
            args: Prisma.ExecutionHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          create: {
            args: Prisma.ExecutionHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          createMany: {
            args: Prisma.ExecutionHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExecutionHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          delete: {
            args: Prisma.ExecutionHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          update: {
            args: Prisma.ExecutionHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          deleteMany: {
            args: Prisma.ExecutionHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExecutionHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>[]
          }
          upsert: {
            args: Prisma.ExecutionHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExecutionHistoryPayload>
          }
          aggregate: {
            args: Prisma.ExecutionHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExecutionHistory>
          }
          groupBy: {
            args: Prisma.ExecutionHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExecutionHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExecutionHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<ExecutionHistoryCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    workflow?: WorkflowOmit
    node?: NodeOmit
    edge?: EdgeOmit
    executionHistory?: ExecutionHistoryOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    workflows: number
    history: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflows?: boolean | UserCountOutputTypeCountWorkflowsArgs
    history?: boolean | UserCountOutputTypeCountHistoryArgs
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
  export type UserCountOutputTypeCountWorkflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
  }


  /**
   * Count Type WorkflowCountOutputType
   */

  export type WorkflowCountOutputType = {
    nodes: number
    edges: number
    history: number
  }

  export type WorkflowCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    nodes?: boolean | WorkflowCountOutputTypeCountNodesArgs
    edges?: boolean | WorkflowCountOutputTypeCountEdgesArgs
    history?: boolean | WorkflowCountOutputTypeCountHistoryArgs
  }

  // Custom InputTypes
  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkflowCountOutputType
     */
    select?: WorkflowCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountNodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountEdgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdgeWhereInput
  }

  /**
   * WorkflowCountOutputType without action
   */
  export type WorkflowCountOutputTypeCountHistoryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
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
    clerkId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    clerkId: string | null
    email: string | null
    name: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    clerkId: number
    email: number
    name: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    clerkId?: true
    email?: true
    name?: true
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
    clerkId: string
    email: string
    name: string | null
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
    clerkId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    clerkId?: boolean
    email?: boolean
    name?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "clerkId" | "email" | "name" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflows?: boolean | User$workflowsArgs<ExtArgs>
    history?: boolean | User$historyArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workflows: Prisma.$WorkflowPayload<ExtArgs>[]
      history: Prisma.$ExecutionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      clerkId: string
      email: string
      name: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflows<T extends User$workflowsArgs<ExtArgs> = {}>(args?: Subset<T, User$workflowsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends User$historyArgs<ExtArgs> = {}>(args?: Subset<T, User$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly clerkId: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.workflows
   */
  export type User$workflowsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    cursor?: WorkflowWhereUniqueInput
    take?: number
    skip?: number
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * User.history
   */
  export type User$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    cursor?: ExecutionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Workflow
   */

  export type AggregateWorkflow = {
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  export type WorkflowMinAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkflowCountAggregateOutputType = {
    id: number
    userId: number
    name: number
    description: number
    data: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkflowMinAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowMaxAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkflowCountAggregateInputType = {
    id?: true
    userId?: true
    name?: true
    description?: true
    data?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkflowAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflow to aggregate.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workflows
    **/
    _count?: true | WorkflowCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkflowMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkflowMaxAggregateInputType
  }

  export type GetWorkflowAggregateType<T extends WorkflowAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkflow]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkflow[P]>
      : GetScalarType<T[P], AggregateWorkflow[P]>
  }




  export type WorkflowGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkflowWhereInput
    orderBy?: WorkflowOrderByWithAggregationInput | WorkflowOrderByWithAggregationInput[]
    by: WorkflowScalarFieldEnum[] | WorkflowScalarFieldEnum
    having?: WorkflowScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkflowCountAggregateInputType | true
    _min?: WorkflowMinAggregateInputType
    _max?: WorkflowMaxAggregateInputType
  }

  export type WorkflowGroupByOutputType = {
    id: string
    userId: string
    name: string
    description: string | null
    data: JsonValue | null
    createdAt: Date
    updatedAt: Date
    _count: WorkflowCountAggregateOutputType | null
    _min: WorkflowMinAggregateOutputType | null
    _max: WorkflowMaxAggregateOutputType | null
  }

  type GetWorkflowGroupByPayload<T extends WorkflowGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkflowGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkflowGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
            : GetScalarType<T[P], WorkflowGroupByOutputType[P]>
        }
      >
    >


  export type WorkflowSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | Workflow$nodesArgs<ExtArgs>
    edges?: boolean | Workflow$edgesArgs<ExtArgs>
    history?: boolean | Workflow$historyArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workflow"]>

  export type WorkflowSelectScalar = {
    id?: boolean
    userId?: boolean
    name?: boolean
    description?: boolean
    data?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkflowOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "name" | "description" | "data" | "createdAt" | "updatedAt", ExtArgs["result"]["workflow"]>
  export type WorkflowInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    nodes?: boolean | Workflow$nodesArgs<ExtArgs>
    edges?: boolean | Workflow$edgesArgs<ExtArgs>
    history?: boolean | Workflow$historyArgs<ExtArgs>
    _count?: boolean | WorkflowCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type WorkflowIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $WorkflowPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workflow"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      nodes: Prisma.$NodePayload<ExtArgs>[]
      edges: Prisma.$EdgePayload<ExtArgs>[]
      history: Prisma.$ExecutionHistoryPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      name: string
      description: string | null
      data: Prisma.JsonValue | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workflow"]>
    composites: {}
  }

  type WorkflowGetPayload<S extends boolean | null | undefined | WorkflowDefaultArgs> = $Result.GetResult<Prisma.$WorkflowPayload, S>

  type WorkflowCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<WorkflowFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: WorkflowCountAggregateInputType | true
    }

  export interface WorkflowDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workflow'], meta: { name: 'Workflow' } }
    /**
     * Find zero or one Workflow that matches the filter.
     * @param {WorkflowFindUniqueArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkflowFindUniqueArgs>(args: SelectSubset<T, WorkflowFindUniqueArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Workflow that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {WorkflowFindUniqueOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkflowFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkflowFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkflowFindFirstArgs>(args?: SelectSubset<T, WorkflowFindFirstArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Workflow that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindFirstOrThrowArgs} args - Arguments to find a Workflow
     * @example
     * // Get one Workflow
     * const workflow = await prisma.workflow.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkflowFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkflowFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Workflows that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workflows
     * const workflows = await prisma.workflow.findMany()
     * 
     * // Get first 10 Workflows
     * const workflows = await prisma.workflow.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workflowWithIdOnly = await prisma.workflow.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkflowFindManyArgs>(args?: SelectSubset<T, WorkflowFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Workflow.
     * @param {WorkflowCreateArgs} args - Arguments to create a Workflow.
     * @example
     * // Create one Workflow
     * const Workflow = await prisma.workflow.create({
     *   data: {
     *     // ... data to create a Workflow
     *   }
     * })
     * 
     */
    create<T extends WorkflowCreateArgs>(args: SelectSubset<T, WorkflowCreateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Workflows.
     * @param {WorkflowCreateManyArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkflowCreateManyArgs>(args?: SelectSubset<T, WorkflowCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workflows and returns the data saved in the database.
     * @param {WorkflowCreateManyAndReturnArgs} args - Arguments to create many Workflows.
     * @example
     * // Create many Workflows
     * const workflow = await prisma.workflow.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkflowCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkflowCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Workflow.
     * @param {WorkflowDeleteArgs} args - Arguments to delete one Workflow.
     * @example
     * // Delete one Workflow
     * const Workflow = await prisma.workflow.delete({
     *   where: {
     *     // ... filter to delete one Workflow
     *   }
     * })
     * 
     */
    delete<T extends WorkflowDeleteArgs>(args: SelectSubset<T, WorkflowDeleteArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Workflow.
     * @param {WorkflowUpdateArgs} args - Arguments to update one Workflow.
     * @example
     * // Update one Workflow
     * const workflow = await prisma.workflow.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkflowUpdateArgs>(args: SelectSubset<T, WorkflowUpdateArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Workflows.
     * @param {WorkflowDeleteManyArgs} args - Arguments to filter Workflows to delete.
     * @example
     * // Delete a few Workflows
     * const { count } = await prisma.workflow.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkflowDeleteManyArgs>(args?: SelectSubset<T, WorkflowDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkflowUpdateManyArgs>(args: SelectSubset<T, WorkflowUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workflows and returns the data updated in the database.
     * @param {WorkflowUpdateManyAndReturnArgs} args - Arguments to update many Workflows.
     * @example
     * // Update many Workflows
     * const workflow = await prisma.workflow.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Workflows and only return the `id`
     * const workflowWithIdOnly = await prisma.workflow.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends WorkflowUpdateManyAndReturnArgs>(args: SelectSubset<T, WorkflowUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Workflow.
     * @param {WorkflowUpsertArgs} args - Arguments to update or create a Workflow.
     * @example
     * // Update or create a Workflow
     * const workflow = await prisma.workflow.upsert({
     *   create: {
     *     // ... data to create a Workflow
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workflow we want to update
     *   }
     * })
     */
    upsert<T extends WorkflowUpsertArgs>(args: SelectSubset<T, WorkflowUpsertArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Workflows.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowCountArgs} args - Arguments to filter Workflows to count.
     * @example
     * // Count the number of Workflows
     * const count = await prisma.workflow.count({
     *   where: {
     *     // ... the filter for the Workflows we want to count
     *   }
     * })
    **/
    count<T extends WorkflowCountArgs>(
      args?: Subset<T, WorkflowCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkflowCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkflowAggregateArgs>(args: Subset<T, WorkflowAggregateArgs>): Prisma.PrismaPromise<GetWorkflowAggregateType<T>>

    /**
     * Group by Workflow.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkflowGroupByArgs} args - Group by arguments.
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
      T extends WorkflowGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkflowGroupByArgs['orderBy'] }
        : { orderBy?: WorkflowGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkflowGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkflowGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workflow model
   */
  readonly fields: WorkflowFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workflow.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkflowClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    nodes<T extends Workflow$nodesArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$nodesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    edges<T extends Workflow$edgesArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$edgesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    history<T extends Workflow$historyArgs<ExtArgs> = {}>(args?: Subset<T, Workflow$historyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Workflow model
   */
  interface WorkflowFieldRefs {
    readonly id: FieldRef<"Workflow", 'String'>
    readonly userId: FieldRef<"Workflow", 'String'>
    readonly name: FieldRef<"Workflow", 'String'>
    readonly description: FieldRef<"Workflow", 'String'>
    readonly data: FieldRef<"Workflow", 'Json'>
    readonly createdAt: FieldRef<"Workflow", 'DateTime'>
    readonly updatedAt: FieldRef<"Workflow", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workflow findUnique
   */
  export type WorkflowFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findUniqueOrThrow
   */
  export type WorkflowFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow findFirst
   */
  export type WorkflowFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findFirstOrThrow
   */
  export type WorkflowFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflow to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow findMany
   */
  export type WorkflowFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter, which Workflows to fetch.
     */
    where?: WorkflowWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workflows to fetch.
     */
    orderBy?: WorkflowOrderByWithRelationInput | WorkflowOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workflows.
     */
    cursor?: WorkflowWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workflows from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workflows.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workflows.
     */
    distinct?: WorkflowScalarFieldEnum | WorkflowScalarFieldEnum[]
  }

  /**
   * Workflow create
   */
  export type WorkflowCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to create a Workflow.
     */
    data: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
  }

  /**
   * Workflow createMany
   */
  export type WorkflowCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Workflow createManyAndReturn
   */
  export type WorkflowCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to create many Workflows.
     */
    data: WorkflowCreateManyInput | WorkflowCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow update
   */
  export type WorkflowUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The data needed to update a Workflow.
     */
    data: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
    /**
     * Choose, which Workflow to update.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow updateMany
   */
  export type WorkflowUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
  }

  /**
   * Workflow updateManyAndReturn
   */
  export type WorkflowUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * The data used to update Workflows.
     */
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyInput>
    /**
     * Filter which Workflows to update
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Workflow upsert
   */
  export type WorkflowUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * The filter to search for the Workflow to update in case it exists.
     */
    where: WorkflowWhereUniqueInput
    /**
     * In case the Workflow found by the `where` argument doesn't exist, create a new Workflow with this data.
     */
    create: XOR<WorkflowCreateInput, WorkflowUncheckedCreateInput>
    /**
     * In case the Workflow was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkflowUpdateInput, WorkflowUncheckedUpdateInput>
  }

  /**
   * Workflow delete
   */
  export type WorkflowDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
    /**
     * Filter which Workflow to delete.
     */
    where: WorkflowWhereUniqueInput
  }

  /**
   * Workflow deleteMany
   */
  export type WorkflowDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workflows to delete
     */
    where?: WorkflowWhereInput
    /**
     * Limit how many Workflows to delete.
     */
    limit?: number
  }

  /**
   * Workflow.nodes
   */
  export type Workflow$nodesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    cursor?: NodeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Workflow.edges
   */
  export type Workflow$edgesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    where?: EdgeWhereInput
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    cursor?: EdgeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Workflow.history
   */
  export type Workflow$historyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    cursor?: ExecutionHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * Workflow without action
   */
  export type WorkflowDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workflow
     */
    select?: WorkflowSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Workflow
     */
    omit?: WorkflowOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkflowInclude<ExtArgs> | null
  }


  /**
   * Model Node
   */

  export type AggregateNode = {
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  export type NodeMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    type: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type NodeCountAggregateOutputType = {
    id: number
    workflowId: number
    type: number
    data: number
    position: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type NodeMinAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeMaxAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    createdAt?: true
    updatedAt?: true
  }

  export type NodeCountAggregateInputType = {
    id?: true
    workflowId?: true
    type?: true
    data?: true
    position?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type NodeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Node to aggregate.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Nodes
    **/
    _count?: true | NodeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NodeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NodeMaxAggregateInputType
  }

  export type GetNodeAggregateType<T extends NodeAggregateArgs> = {
        [P in keyof T & keyof AggregateNode]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNode[P]>
      : GetScalarType<T[P], AggregateNode[P]>
  }




  export type NodeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NodeWhereInput
    orderBy?: NodeOrderByWithAggregationInput | NodeOrderByWithAggregationInput[]
    by: NodeScalarFieldEnum[] | NodeScalarFieldEnum
    having?: NodeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NodeCountAggregateInputType | true
    _min?: NodeMinAggregateInputType
    _max?: NodeMaxAggregateInputType
  }

  export type NodeGroupByOutputType = {
    id: string
    workflowId: string
    type: string
    data: JsonValue
    position: JsonValue
    createdAt: Date
    updatedAt: Date
    _count: NodeCountAggregateOutputType | null
    _min: NodeMinAggregateOutputType | null
    _max: NodeMaxAggregateOutputType | null
  }

  type GetNodeGroupByPayload<T extends NodeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NodeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NodeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NodeGroupByOutputType[P]>
            : GetScalarType<T[P], NodeGroupByOutputType[P]>
        }
      >
    >


  export type NodeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    data?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    data?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    type?: boolean
    data?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["node"]>

  export type NodeSelectScalar = {
    id?: boolean
    workflowId?: boolean
    type?: boolean
    data?: boolean
    position?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type NodeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "type" | "data" | "position" | "createdAt" | "updatedAt", ExtArgs["result"]["node"]>
  export type NodeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type NodeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type NodeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $NodePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Node"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      type: string
      data: Prisma.JsonValue
      position: Prisma.JsonValue
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["node"]>
    composites: {}
  }

  type NodeGetPayload<S extends boolean | null | undefined | NodeDefaultArgs> = $Result.GetResult<Prisma.$NodePayload, S>

  type NodeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NodeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NodeCountAggregateInputType | true
    }

  export interface NodeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Node'], meta: { name: 'Node' } }
    /**
     * Find zero or one Node that matches the filter.
     * @param {NodeFindUniqueArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NodeFindUniqueArgs>(args: SelectSubset<T, NodeFindUniqueArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Node that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NodeFindUniqueOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NodeFindUniqueOrThrowArgs>(args: SelectSubset<T, NodeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NodeFindFirstArgs>(args?: SelectSubset<T, NodeFindFirstArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Node that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindFirstOrThrowArgs} args - Arguments to find a Node
     * @example
     * // Get one Node
     * const node = await prisma.node.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NodeFindFirstOrThrowArgs>(args?: SelectSubset<T, NodeFindFirstOrThrowArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Nodes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Nodes
     * const nodes = await prisma.node.findMany()
     * 
     * // Get first 10 Nodes
     * const nodes = await prisma.node.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const nodeWithIdOnly = await prisma.node.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NodeFindManyArgs>(args?: SelectSubset<T, NodeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Node.
     * @param {NodeCreateArgs} args - Arguments to create a Node.
     * @example
     * // Create one Node
     * const Node = await prisma.node.create({
     *   data: {
     *     // ... data to create a Node
     *   }
     * })
     * 
     */
    create<T extends NodeCreateArgs>(args: SelectSubset<T, NodeCreateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Nodes.
     * @param {NodeCreateManyArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NodeCreateManyArgs>(args?: SelectSubset<T, NodeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Nodes and returns the data saved in the database.
     * @param {NodeCreateManyAndReturnArgs} args - Arguments to create many Nodes.
     * @example
     * // Create many Nodes
     * const node = await prisma.node.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NodeCreateManyAndReturnArgs>(args?: SelectSubset<T, NodeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Node.
     * @param {NodeDeleteArgs} args - Arguments to delete one Node.
     * @example
     * // Delete one Node
     * const Node = await prisma.node.delete({
     *   where: {
     *     // ... filter to delete one Node
     *   }
     * })
     * 
     */
    delete<T extends NodeDeleteArgs>(args: SelectSubset<T, NodeDeleteArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Node.
     * @param {NodeUpdateArgs} args - Arguments to update one Node.
     * @example
     * // Update one Node
     * const node = await prisma.node.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NodeUpdateArgs>(args: SelectSubset<T, NodeUpdateArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Nodes.
     * @param {NodeDeleteManyArgs} args - Arguments to filter Nodes to delete.
     * @example
     * // Delete a few Nodes
     * const { count } = await prisma.node.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NodeDeleteManyArgs>(args?: SelectSubset<T, NodeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NodeUpdateManyArgs>(args: SelectSubset<T, NodeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Nodes and returns the data updated in the database.
     * @param {NodeUpdateManyAndReturnArgs} args - Arguments to update many Nodes.
     * @example
     * // Update many Nodes
     * const node = await prisma.node.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Nodes and only return the `id`
     * const nodeWithIdOnly = await prisma.node.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends NodeUpdateManyAndReturnArgs>(args: SelectSubset<T, NodeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Node.
     * @param {NodeUpsertArgs} args - Arguments to update or create a Node.
     * @example
     * // Update or create a Node
     * const node = await prisma.node.upsert({
     *   create: {
     *     // ... data to create a Node
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Node we want to update
     *   }
     * })
     */
    upsert<T extends NodeUpsertArgs>(args: SelectSubset<T, NodeUpsertArgs<ExtArgs>>): Prisma__NodeClient<$Result.GetResult<Prisma.$NodePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Nodes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeCountArgs} args - Arguments to filter Nodes to count.
     * @example
     * // Count the number of Nodes
     * const count = await prisma.node.count({
     *   where: {
     *     // ... the filter for the Nodes we want to count
     *   }
     * })
    **/
    count<T extends NodeCountArgs>(
      args?: Subset<T, NodeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NodeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NodeAggregateArgs>(args: Subset<T, NodeAggregateArgs>): Prisma.PrismaPromise<GetNodeAggregateType<T>>

    /**
     * Group by Node.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NodeGroupByArgs} args - Group by arguments.
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
      T extends NodeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NodeGroupByArgs['orderBy'] }
        : { orderBy?: NodeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NodeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNodeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Node model
   */
  readonly fields: NodeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Node.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NodeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Node model
   */
  interface NodeFieldRefs {
    readonly id: FieldRef<"Node", 'String'>
    readonly workflowId: FieldRef<"Node", 'String'>
    readonly type: FieldRef<"Node", 'String'>
    readonly data: FieldRef<"Node", 'Json'>
    readonly position: FieldRef<"Node", 'Json'>
    readonly createdAt: FieldRef<"Node", 'DateTime'>
    readonly updatedAt: FieldRef<"Node", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Node findUnique
   */
  export type NodeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findUniqueOrThrow
   */
  export type NodeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node findFirst
   */
  export type NodeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findFirstOrThrow
   */
  export type NodeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Node to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node findMany
   */
  export type NodeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter, which Nodes to fetch.
     */
    where?: NodeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Nodes to fetch.
     */
    orderBy?: NodeOrderByWithRelationInput | NodeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Nodes.
     */
    cursor?: NodeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Nodes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Nodes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Nodes.
     */
    distinct?: NodeScalarFieldEnum | NodeScalarFieldEnum[]
  }

  /**
   * Node create
   */
  export type NodeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to create a Node.
     */
    data: XOR<NodeCreateInput, NodeUncheckedCreateInput>
  }

  /**
   * Node createMany
   */
  export type NodeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Node createManyAndReturn
   */
  export type NodeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to create many Nodes.
     */
    data: NodeCreateManyInput | NodeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node update
   */
  export type NodeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The data needed to update a Node.
     */
    data: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
    /**
     * Choose, which Node to update.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node updateMany
   */
  export type NodeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
  }

  /**
   * Node updateManyAndReturn
   */
  export type NodeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * The data used to update Nodes.
     */
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyInput>
    /**
     * Filter which Nodes to update
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Node upsert
   */
  export type NodeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * The filter to search for the Node to update in case it exists.
     */
    where: NodeWhereUniqueInput
    /**
     * In case the Node found by the `where` argument doesn't exist, create a new Node with this data.
     */
    create: XOR<NodeCreateInput, NodeUncheckedCreateInput>
    /**
     * In case the Node was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NodeUpdateInput, NodeUncheckedUpdateInput>
  }

  /**
   * Node delete
   */
  export type NodeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
    /**
     * Filter which Node to delete.
     */
    where: NodeWhereUniqueInput
  }

  /**
   * Node deleteMany
   */
  export type NodeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Nodes to delete
     */
    where?: NodeWhereInput
    /**
     * Limit how many Nodes to delete.
     */
    limit?: number
  }

  /**
   * Node without action
   */
  export type NodeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Node
     */
    select?: NodeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Node
     */
    omit?: NodeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NodeInclude<ExtArgs> | null
  }


  /**
   * Model Edge
   */

  export type AggregateEdge = {
    _count: EdgeCountAggregateOutputType | null
    _min: EdgeMinAggregateOutputType | null
    _max: EdgeMaxAggregateOutputType | null
  }

  export type EdgeMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    source: string | null
    target: string | null
    sourceHandle: string | null
    targetHandle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EdgeMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    source: string | null
    target: string | null
    sourceHandle: string | null
    targetHandle: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type EdgeCountAggregateOutputType = {
    id: number
    workflowId: number
    source: number
    target: number
    sourceHandle: number
    targetHandle: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type EdgeMinAggregateInputType = {
    id?: true
    workflowId?: true
    source?: true
    target?: true
    sourceHandle?: true
    targetHandle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EdgeMaxAggregateInputType = {
    id?: true
    workflowId?: true
    source?: true
    target?: true
    sourceHandle?: true
    targetHandle?: true
    createdAt?: true
    updatedAt?: true
  }

  export type EdgeCountAggregateInputType = {
    id?: true
    workflowId?: true
    source?: true
    target?: true
    sourceHandle?: true
    targetHandle?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type EdgeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edge to aggregate.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Edges
    **/
    _count?: true | EdgeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EdgeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EdgeMaxAggregateInputType
  }

  export type GetEdgeAggregateType<T extends EdgeAggregateArgs> = {
        [P in keyof T & keyof AggregateEdge]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEdge[P]>
      : GetScalarType<T[P], AggregateEdge[P]>
  }




  export type EdgeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EdgeWhereInput
    orderBy?: EdgeOrderByWithAggregationInput | EdgeOrderByWithAggregationInput[]
    by: EdgeScalarFieldEnum[] | EdgeScalarFieldEnum
    having?: EdgeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EdgeCountAggregateInputType | true
    _min?: EdgeMinAggregateInputType
    _max?: EdgeMaxAggregateInputType
  }

  export type EdgeGroupByOutputType = {
    id: string
    workflowId: string
    source: string
    target: string
    sourceHandle: string | null
    targetHandle: string | null
    createdAt: Date
    updatedAt: Date
    _count: EdgeCountAggregateOutputType | null
    _min: EdgeMinAggregateOutputType | null
    _max: EdgeMaxAggregateOutputType | null
  }

  type GetEdgeGroupByPayload<T extends EdgeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EdgeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EdgeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EdgeGroupByOutputType[P]>
            : GetScalarType<T[P], EdgeGroupByOutputType[P]>
        }
      >
    >


  export type EdgeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    source?: boolean
    target?: boolean
    sourceHandle?: boolean
    targetHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edge"]>

  export type EdgeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    source?: boolean
    target?: boolean
    sourceHandle?: boolean
    targetHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edge"]>

  export type EdgeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    source?: boolean
    target?: boolean
    sourceHandle?: boolean
    targetHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["edge"]>

  export type EdgeSelectScalar = {
    id?: boolean
    workflowId?: boolean
    source?: boolean
    target?: boolean
    sourceHandle?: boolean
    targetHandle?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type EdgeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "source" | "target" | "sourceHandle" | "targetHandle" | "createdAt" | "updatedAt", ExtArgs["result"]["edge"]>
  export type EdgeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type EdgeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }
  export type EdgeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
  }

  export type $EdgePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Edge"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      source: string
      target: string
      sourceHandle: string | null
      targetHandle: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["edge"]>
    composites: {}
  }

  type EdgeGetPayload<S extends boolean | null | undefined | EdgeDefaultArgs> = $Result.GetResult<Prisma.$EdgePayload, S>

  type EdgeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EdgeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EdgeCountAggregateInputType | true
    }

  export interface EdgeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Edge'], meta: { name: 'Edge' } }
    /**
     * Find zero or one Edge that matches the filter.
     * @param {EdgeFindUniqueArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EdgeFindUniqueArgs>(args: SelectSubset<T, EdgeFindUniqueArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Edge that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EdgeFindUniqueOrThrowArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EdgeFindUniqueOrThrowArgs>(args: SelectSubset<T, EdgeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edge that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindFirstArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EdgeFindFirstArgs>(args?: SelectSubset<T, EdgeFindFirstArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Edge that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindFirstOrThrowArgs} args - Arguments to find a Edge
     * @example
     * // Get one Edge
     * const edge = await prisma.edge.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EdgeFindFirstOrThrowArgs>(args?: SelectSubset<T, EdgeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Edges that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Edges
     * const edges = await prisma.edge.findMany()
     * 
     * // Get first 10 Edges
     * const edges = await prisma.edge.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const edgeWithIdOnly = await prisma.edge.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EdgeFindManyArgs>(args?: SelectSubset<T, EdgeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Edge.
     * @param {EdgeCreateArgs} args - Arguments to create a Edge.
     * @example
     * // Create one Edge
     * const Edge = await prisma.edge.create({
     *   data: {
     *     // ... data to create a Edge
     *   }
     * })
     * 
     */
    create<T extends EdgeCreateArgs>(args: SelectSubset<T, EdgeCreateArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Edges.
     * @param {EdgeCreateManyArgs} args - Arguments to create many Edges.
     * @example
     * // Create many Edges
     * const edge = await prisma.edge.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EdgeCreateManyArgs>(args?: SelectSubset<T, EdgeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Edges and returns the data saved in the database.
     * @param {EdgeCreateManyAndReturnArgs} args - Arguments to create many Edges.
     * @example
     * // Create many Edges
     * const edge = await prisma.edge.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Edges and only return the `id`
     * const edgeWithIdOnly = await prisma.edge.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EdgeCreateManyAndReturnArgs>(args?: SelectSubset<T, EdgeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Edge.
     * @param {EdgeDeleteArgs} args - Arguments to delete one Edge.
     * @example
     * // Delete one Edge
     * const Edge = await prisma.edge.delete({
     *   where: {
     *     // ... filter to delete one Edge
     *   }
     * })
     * 
     */
    delete<T extends EdgeDeleteArgs>(args: SelectSubset<T, EdgeDeleteArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Edge.
     * @param {EdgeUpdateArgs} args - Arguments to update one Edge.
     * @example
     * // Update one Edge
     * const edge = await prisma.edge.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EdgeUpdateArgs>(args: SelectSubset<T, EdgeUpdateArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Edges.
     * @param {EdgeDeleteManyArgs} args - Arguments to filter Edges to delete.
     * @example
     * // Delete a few Edges
     * const { count } = await prisma.edge.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EdgeDeleteManyArgs>(args?: SelectSubset<T, EdgeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Edges
     * const edge = await prisma.edge.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EdgeUpdateManyArgs>(args: SelectSubset<T, EdgeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Edges and returns the data updated in the database.
     * @param {EdgeUpdateManyAndReturnArgs} args - Arguments to update many Edges.
     * @example
     * // Update many Edges
     * const edge = await prisma.edge.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Edges and only return the `id`
     * const edgeWithIdOnly = await prisma.edge.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EdgeUpdateManyAndReturnArgs>(args: SelectSubset<T, EdgeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Edge.
     * @param {EdgeUpsertArgs} args - Arguments to update or create a Edge.
     * @example
     * // Update or create a Edge
     * const edge = await prisma.edge.upsert({
     *   create: {
     *     // ... data to create a Edge
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Edge we want to update
     *   }
     * })
     */
    upsert<T extends EdgeUpsertArgs>(args: SelectSubset<T, EdgeUpsertArgs<ExtArgs>>): Prisma__EdgeClient<$Result.GetResult<Prisma.$EdgePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Edges.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeCountArgs} args - Arguments to filter Edges to count.
     * @example
     * // Count the number of Edges
     * const count = await prisma.edge.count({
     *   where: {
     *     // ... the filter for the Edges we want to count
     *   }
     * })
    **/
    count<T extends EdgeCountArgs>(
      args?: Subset<T, EdgeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EdgeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Edge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EdgeAggregateArgs>(args: Subset<T, EdgeAggregateArgs>): Prisma.PrismaPromise<GetEdgeAggregateType<T>>

    /**
     * Group by Edge.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EdgeGroupByArgs} args - Group by arguments.
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
      T extends EdgeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EdgeGroupByArgs['orderBy'] }
        : { orderBy?: EdgeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EdgeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEdgeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Edge model
   */
  readonly fields: EdgeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Edge.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EdgeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Edge model
   */
  interface EdgeFieldRefs {
    readonly id: FieldRef<"Edge", 'String'>
    readonly workflowId: FieldRef<"Edge", 'String'>
    readonly source: FieldRef<"Edge", 'String'>
    readonly target: FieldRef<"Edge", 'String'>
    readonly sourceHandle: FieldRef<"Edge", 'String'>
    readonly targetHandle: FieldRef<"Edge", 'String'>
    readonly createdAt: FieldRef<"Edge", 'DateTime'>
    readonly updatedAt: FieldRef<"Edge", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Edge findUnique
   */
  export type EdgeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge findUniqueOrThrow
   */
  export type EdgeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge findFirst
   */
  export type EdgeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Edge findFirstOrThrow
   */
  export type EdgeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edge to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Edge findMany
   */
  export type EdgeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter, which Edges to fetch.
     */
    where?: EdgeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Edges to fetch.
     */
    orderBy?: EdgeOrderByWithRelationInput | EdgeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Edges.
     */
    cursor?: EdgeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Edges from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Edges.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Edges.
     */
    distinct?: EdgeScalarFieldEnum | EdgeScalarFieldEnum[]
  }

  /**
   * Edge create
   */
  export type EdgeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * The data needed to create a Edge.
     */
    data: XOR<EdgeCreateInput, EdgeUncheckedCreateInput>
  }

  /**
   * Edge createMany
   */
  export type EdgeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Edges.
     */
    data: EdgeCreateManyInput | EdgeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Edge createManyAndReturn
   */
  export type EdgeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * The data used to create many Edges.
     */
    data: EdgeCreateManyInput | EdgeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edge update
   */
  export type EdgeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * The data needed to update a Edge.
     */
    data: XOR<EdgeUpdateInput, EdgeUncheckedUpdateInput>
    /**
     * Choose, which Edge to update.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge updateMany
   */
  export type EdgeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Edges.
     */
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyInput>
    /**
     * Filter which Edges to update
     */
    where?: EdgeWhereInput
    /**
     * Limit how many Edges to update.
     */
    limit?: number
  }

  /**
   * Edge updateManyAndReturn
   */
  export type EdgeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * The data used to update Edges.
     */
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyInput>
    /**
     * Filter which Edges to update
     */
    where?: EdgeWhereInput
    /**
     * Limit how many Edges to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Edge upsert
   */
  export type EdgeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * The filter to search for the Edge to update in case it exists.
     */
    where: EdgeWhereUniqueInput
    /**
     * In case the Edge found by the `where` argument doesn't exist, create a new Edge with this data.
     */
    create: XOR<EdgeCreateInput, EdgeUncheckedCreateInput>
    /**
     * In case the Edge was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EdgeUpdateInput, EdgeUncheckedUpdateInput>
  }

  /**
   * Edge delete
   */
  export type EdgeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
    /**
     * Filter which Edge to delete.
     */
    where: EdgeWhereUniqueInput
  }

  /**
   * Edge deleteMany
   */
  export type EdgeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Edges to delete
     */
    where?: EdgeWhereInput
    /**
     * Limit how many Edges to delete.
     */
    limit?: number
  }

  /**
   * Edge without action
   */
  export type EdgeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Edge
     */
    select?: EdgeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Edge
     */
    omit?: EdgeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EdgeInclude<ExtArgs> | null
  }


  /**
   * Model ExecutionHistory
   */

  export type AggregateExecutionHistory = {
    _count: ExecutionHistoryCountAggregateOutputType | null
    _avg: ExecutionHistoryAvgAggregateOutputType | null
    _sum: ExecutionHistorySumAggregateOutputType | null
    _min: ExecutionHistoryMinAggregateOutputType | null
    _max: ExecutionHistoryMaxAggregateOutputType | null
  }

  export type ExecutionHistoryAvgAggregateOutputType = {
    duration: number | null
  }

  export type ExecutionHistorySumAggregateOutputType = {
    duration: number | null
  }

  export type ExecutionHistoryMinAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    status: string | null
    scope: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    createdAt: Date | null
  }

  export type ExecutionHistoryMaxAggregateOutputType = {
    id: string | null
    workflowId: string | null
    userId: string | null
    status: string | null
    scope: string | null
    startTime: Date | null
    endTime: Date | null
    duration: number | null
    createdAt: Date | null
  }

  export type ExecutionHistoryCountAggregateOutputType = {
    id: number
    workflowId: number
    userId: number
    status: number
    scope: number
    executedNodeIds: number
    nodeResults: number
    nodeErrors: number
    nodeLogs: number
    startTime: number
    endTime: number
    duration: number
    triggerTaskIds: number
    createdAt: number
    _all: number
  }


  export type ExecutionHistoryAvgAggregateInputType = {
    duration?: true
  }

  export type ExecutionHistorySumAggregateInputType = {
    duration?: true
  }

  export type ExecutionHistoryMinAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    status?: true
    scope?: true
    startTime?: true
    endTime?: true
    duration?: true
    createdAt?: true
  }

  export type ExecutionHistoryMaxAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    status?: true
    scope?: true
    startTime?: true
    endTime?: true
    duration?: true
    createdAt?: true
  }

  export type ExecutionHistoryCountAggregateInputType = {
    id?: true
    workflowId?: true
    userId?: true
    status?: true
    scope?: true
    executedNodeIds?: true
    nodeResults?: true
    nodeErrors?: true
    nodeLogs?: true
    startTime?: true
    endTime?: true
    duration?: true
    triggerTaskIds?: true
    createdAt?: true
    _all?: true
  }

  export type ExecutionHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionHistory to aggregate.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ExecutionHistories
    **/
    _count?: true | ExecutionHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExecutionHistoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExecutionHistorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExecutionHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExecutionHistoryMaxAggregateInputType
  }

  export type GetExecutionHistoryAggregateType<T extends ExecutionHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateExecutionHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExecutionHistory[P]>
      : GetScalarType<T[P], AggregateExecutionHistory[P]>
  }




  export type ExecutionHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExecutionHistoryWhereInput
    orderBy?: ExecutionHistoryOrderByWithAggregationInput | ExecutionHistoryOrderByWithAggregationInput[]
    by: ExecutionHistoryScalarFieldEnum[] | ExecutionHistoryScalarFieldEnum
    having?: ExecutionHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExecutionHistoryCountAggregateInputType | true
    _avg?: ExecutionHistoryAvgAggregateInputType
    _sum?: ExecutionHistorySumAggregateInputType
    _min?: ExecutionHistoryMinAggregateInputType
    _max?: ExecutionHistoryMaxAggregateInputType
  }

  export type ExecutionHistoryGroupByOutputType = {
    id: string
    workflowId: string
    userId: string
    status: string
    scope: string
    executedNodeIds: string[]
    nodeResults: JsonValue
    nodeErrors: JsonValue
    nodeLogs: JsonValue
    startTime: Date
    endTime: Date | null
    duration: number | null
    triggerTaskIds: JsonValue | null
    createdAt: Date
    _count: ExecutionHistoryCountAggregateOutputType | null
    _avg: ExecutionHistoryAvgAggregateOutputType | null
    _sum: ExecutionHistorySumAggregateOutputType | null
    _min: ExecutionHistoryMinAggregateOutputType | null
    _max: ExecutionHistoryMaxAggregateOutputType | null
  }

  type GetExecutionHistoryGroupByPayload<T extends ExecutionHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExecutionHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExecutionHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExecutionHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], ExecutionHistoryGroupByOutputType[P]>
        }
      >
    >


  export type ExecutionHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    scope?: boolean
    executedNodeIds?: boolean
    nodeResults?: boolean
    nodeErrors?: boolean
    nodeLogs?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerTaskIds?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    scope?: boolean
    executedNodeIds?: boolean
    nodeResults?: boolean
    nodeErrors?: boolean
    nodeLogs?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerTaskIds?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    scope?: boolean
    executedNodeIds?: boolean
    nodeResults?: boolean
    nodeErrors?: boolean
    nodeLogs?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerTaskIds?: boolean
    createdAt?: boolean
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["executionHistory"]>

  export type ExecutionHistorySelectScalar = {
    id?: boolean
    workflowId?: boolean
    userId?: boolean
    status?: boolean
    scope?: boolean
    executedNodeIds?: boolean
    nodeResults?: boolean
    nodeErrors?: boolean
    nodeLogs?: boolean
    startTime?: boolean
    endTime?: boolean
    duration?: boolean
    triggerTaskIds?: boolean
    createdAt?: boolean
  }

  export type ExecutionHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "workflowId" | "userId" | "status" | "scope" | "executedNodeIds" | "nodeResults" | "nodeErrors" | "nodeLogs" | "startTime" | "endTime" | "duration" | "triggerTaskIds" | "createdAt", ExtArgs["result"]["executionHistory"]>
  export type ExecutionHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExecutionHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type ExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workflow?: boolean | WorkflowDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $ExecutionHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ExecutionHistory"
    objects: {
      workflow: Prisma.$WorkflowPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workflowId: string
      userId: string
      status: string
      scope: string
      executedNodeIds: string[]
      nodeResults: Prisma.JsonValue
      nodeErrors: Prisma.JsonValue
      nodeLogs: Prisma.JsonValue
      startTime: Date
      endTime: Date | null
      duration: number | null
      triggerTaskIds: Prisma.JsonValue | null
      createdAt: Date
    }, ExtArgs["result"]["executionHistory"]>
    composites: {}
  }

  type ExecutionHistoryGetPayload<S extends boolean | null | undefined | ExecutionHistoryDefaultArgs> = $Result.GetResult<Prisma.$ExecutionHistoryPayload, S>

  type ExecutionHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ExecutionHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ExecutionHistoryCountAggregateInputType | true
    }

  export interface ExecutionHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ExecutionHistory'], meta: { name: 'ExecutionHistory' } }
    /**
     * Find zero or one ExecutionHistory that matches the filter.
     * @param {ExecutionHistoryFindUniqueArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExecutionHistoryFindUniqueArgs>(args: SelectSubset<T, ExecutionHistoryFindUniqueArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ExecutionHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ExecutionHistoryFindUniqueOrThrowArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExecutionHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindFirstArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExecutionHistoryFindFirstArgs>(args?: SelectSubset<T, ExecutionHistoryFindFirstArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ExecutionHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindFirstOrThrowArgs} args - Arguments to find a ExecutionHistory
     * @example
     * // Get one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExecutionHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, ExecutionHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ExecutionHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ExecutionHistories
     * const executionHistories = await prisma.executionHistory.findMany()
     * 
     * // Get first 10 ExecutionHistories
     * const executionHistories = await prisma.executionHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExecutionHistoryFindManyArgs>(args?: SelectSubset<T, ExecutionHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ExecutionHistory.
     * @param {ExecutionHistoryCreateArgs} args - Arguments to create a ExecutionHistory.
     * @example
     * // Create one ExecutionHistory
     * const ExecutionHistory = await prisma.executionHistory.create({
     *   data: {
     *     // ... data to create a ExecutionHistory
     *   }
     * })
     * 
     */
    create<T extends ExecutionHistoryCreateArgs>(args: SelectSubset<T, ExecutionHistoryCreateArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ExecutionHistories.
     * @param {ExecutionHistoryCreateManyArgs} args - Arguments to create many ExecutionHistories.
     * @example
     * // Create many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExecutionHistoryCreateManyArgs>(args?: SelectSubset<T, ExecutionHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ExecutionHistories and returns the data saved in the database.
     * @param {ExecutionHistoryCreateManyAndReturnArgs} args - Arguments to create many ExecutionHistories.
     * @example
     * // Create many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ExecutionHistories and only return the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExecutionHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, ExecutionHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ExecutionHistory.
     * @param {ExecutionHistoryDeleteArgs} args - Arguments to delete one ExecutionHistory.
     * @example
     * // Delete one ExecutionHistory
     * const ExecutionHistory = await prisma.executionHistory.delete({
     *   where: {
     *     // ... filter to delete one ExecutionHistory
     *   }
     * })
     * 
     */
    delete<T extends ExecutionHistoryDeleteArgs>(args: SelectSubset<T, ExecutionHistoryDeleteArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ExecutionHistory.
     * @param {ExecutionHistoryUpdateArgs} args - Arguments to update one ExecutionHistory.
     * @example
     * // Update one ExecutionHistory
     * const executionHistory = await prisma.executionHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExecutionHistoryUpdateArgs>(args: SelectSubset<T, ExecutionHistoryUpdateArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ExecutionHistories.
     * @param {ExecutionHistoryDeleteManyArgs} args - Arguments to filter ExecutionHistories to delete.
     * @example
     * // Delete a few ExecutionHistories
     * const { count } = await prisma.executionHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExecutionHistoryDeleteManyArgs>(args?: SelectSubset<T, ExecutionHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExecutionHistoryUpdateManyArgs>(args: SelectSubset<T, ExecutionHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ExecutionHistories and returns the data updated in the database.
     * @param {ExecutionHistoryUpdateManyAndReturnArgs} args - Arguments to update many ExecutionHistories.
     * @example
     * // Update many ExecutionHistories
     * const executionHistory = await prisma.executionHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ExecutionHistories and only return the `id`
     * const executionHistoryWithIdOnly = await prisma.executionHistory.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ExecutionHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ExecutionHistory.
     * @param {ExecutionHistoryUpsertArgs} args - Arguments to update or create a ExecutionHistory.
     * @example
     * // Update or create a ExecutionHistory
     * const executionHistory = await prisma.executionHistory.upsert({
     *   create: {
     *     // ... data to create a ExecutionHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ExecutionHistory we want to update
     *   }
     * })
     */
    upsert<T extends ExecutionHistoryUpsertArgs>(args: SelectSubset<T, ExecutionHistoryUpsertArgs<ExtArgs>>): Prisma__ExecutionHistoryClient<$Result.GetResult<Prisma.$ExecutionHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ExecutionHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryCountArgs} args - Arguments to filter ExecutionHistories to count.
     * @example
     * // Count the number of ExecutionHistories
     * const count = await prisma.executionHistory.count({
     *   where: {
     *     // ... the filter for the ExecutionHistories we want to count
     *   }
     * })
    **/
    count<T extends ExecutionHistoryCountArgs>(
      args?: Subset<T, ExecutionHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExecutionHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ExecutionHistoryAggregateArgs>(args: Subset<T, ExecutionHistoryAggregateArgs>): Prisma.PrismaPromise<GetExecutionHistoryAggregateType<T>>

    /**
     * Group by ExecutionHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExecutionHistoryGroupByArgs} args - Group by arguments.
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
      T extends ExecutionHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExecutionHistoryGroupByArgs['orderBy'] }
        : { orderBy?: ExecutionHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ExecutionHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExecutionHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ExecutionHistory model
   */
  readonly fields: ExecutionHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ExecutionHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExecutionHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workflow<T extends WorkflowDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkflowDefaultArgs<ExtArgs>>): Prisma__WorkflowClient<$Result.GetResult<Prisma.$WorkflowPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ExecutionHistory model
   */
  interface ExecutionHistoryFieldRefs {
    readonly id: FieldRef<"ExecutionHistory", 'String'>
    readonly workflowId: FieldRef<"ExecutionHistory", 'String'>
    readonly userId: FieldRef<"ExecutionHistory", 'String'>
    readonly status: FieldRef<"ExecutionHistory", 'String'>
    readonly scope: FieldRef<"ExecutionHistory", 'String'>
    readonly executedNodeIds: FieldRef<"ExecutionHistory", 'String[]'>
    readonly nodeResults: FieldRef<"ExecutionHistory", 'Json'>
    readonly nodeErrors: FieldRef<"ExecutionHistory", 'Json'>
    readonly nodeLogs: FieldRef<"ExecutionHistory", 'Json'>
    readonly startTime: FieldRef<"ExecutionHistory", 'DateTime'>
    readonly endTime: FieldRef<"ExecutionHistory", 'DateTime'>
    readonly duration: FieldRef<"ExecutionHistory", 'Int'>
    readonly triggerTaskIds: FieldRef<"ExecutionHistory", 'Json'>
    readonly createdAt: FieldRef<"ExecutionHistory", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ExecutionHistory findUnique
   */
  export type ExecutionHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory findUniqueOrThrow
   */
  export type ExecutionHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory findFirst
   */
  export type ExecutionHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory findFirstOrThrow
   */
  export type ExecutionHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistory to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory findMany
   */
  export type ExecutionHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter, which ExecutionHistories to fetch.
     */
    where?: ExecutionHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ExecutionHistories to fetch.
     */
    orderBy?: ExecutionHistoryOrderByWithRelationInput | ExecutionHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ExecutionHistories.
     */
    cursor?: ExecutionHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ExecutionHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ExecutionHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ExecutionHistories.
     */
    distinct?: ExecutionHistoryScalarFieldEnum | ExecutionHistoryScalarFieldEnum[]
  }

  /**
   * ExecutionHistory create
   */
  export type ExecutionHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a ExecutionHistory.
     */
    data: XOR<ExecutionHistoryCreateInput, ExecutionHistoryUncheckedCreateInput>
  }

  /**
   * ExecutionHistory createMany
   */
  export type ExecutionHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ExecutionHistories.
     */
    data: ExecutionHistoryCreateManyInput | ExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ExecutionHistory createManyAndReturn
   */
  export type ExecutionHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many ExecutionHistories.
     */
    data: ExecutionHistoryCreateManyInput | ExecutionHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionHistory update
   */
  export type ExecutionHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a ExecutionHistory.
     */
    data: XOR<ExecutionHistoryUpdateInput, ExecutionHistoryUncheckedUpdateInput>
    /**
     * Choose, which ExecutionHistory to update.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory updateMany
   */
  export type ExecutionHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ExecutionHistories.
     */
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionHistories to update
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to update.
     */
    limit?: number
  }

  /**
   * ExecutionHistory updateManyAndReturn
   */
  export type ExecutionHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * The data used to update ExecutionHistories.
     */
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyInput>
    /**
     * Filter which ExecutionHistories to update
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ExecutionHistory upsert
   */
  export type ExecutionHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the ExecutionHistory to update in case it exists.
     */
    where: ExecutionHistoryWhereUniqueInput
    /**
     * In case the ExecutionHistory found by the `where` argument doesn't exist, create a new ExecutionHistory with this data.
     */
    create: XOR<ExecutionHistoryCreateInput, ExecutionHistoryUncheckedCreateInput>
    /**
     * In case the ExecutionHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExecutionHistoryUpdateInput, ExecutionHistoryUncheckedUpdateInput>
  }

  /**
   * ExecutionHistory delete
   */
  export type ExecutionHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
    /**
     * Filter which ExecutionHistory to delete.
     */
    where: ExecutionHistoryWhereUniqueInput
  }

  /**
   * ExecutionHistory deleteMany
   */
  export type ExecutionHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ExecutionHistories to delete
     */
    where?: ExecutionHistoryWhereInput
    /**
     * Limit how many ExecutionHistories to delete.
     */
    limit?: number
  }

  /**
   * ExecutionHistory without action
   */
  export type ExecutionHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExecutionHistory
     */
    select?: ExecutionHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the ExecutionHistory
     */
    omit?: ExecutionHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExecutionHistoryInclude<ExtArgs> | null
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
    clerkId: 'clerkId',
    email: 'email',
    name: 'name',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const WorkflowScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    name: 'name',
    description: 'description',
    data: 'data',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkflowScalarFieldEnum = (typeof WorkflowScalarFieldEnum)[keyof typeof WorkflowScalarFieldEnum]


  export const NodeScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    type: 'type',
    data: 'data',
    position: 'position',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type NodeScalarFieldEnum = (typeof NodeScalarFieldEnum)[keyof typeof NodeScalarFieldEnum]


  export const EdgeScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    source: 'source',
    target: 'target',
    sourceHandle: 'sourceHandle',
    targetHandle: 'targetHandle',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type EdgeScalarFieldEnum = (typeof EdgeScalarFieldEnum)[keyof typeof EdgeScalarFieldEnum]


  export const ExecutionHistoryScalarFieldEnum: {
    id: 'id',
    workflowId: 'workflowId',
    userId: 'userId',
    status: 'status',
    scope: 'scope',
    executedNodeIds: 'executedNodeIds',
    nodeResults: 'nodeResults',
    nodeErrors: 'nodeErrors',
    nodeLogs: 'nodeLogs',
    startTime: 'startTime',
    endTime: 'endTime',
    duration: 'duration',
    triggerTaskIds: 'triggerTaskIds',
    createdAt: 'createdAt'
  };

  export type ExecutionHistoryScalarFieldEnum = (typeof ExecutionHistoryScalarFieldEnum)[keyof typeof ExecutionHistoryScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


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
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
    clerkId?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workflows?: WorkflowListRelationFilter
    history?: ExecutionHistoryListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflows?: WorkflowOrderByRelationAggregateInput
    history?: ExecutionHistoryOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    clerkId?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    workflows?: WorkflowListRelationFilter
    history?: ExecutionHistoryListRelationFilter
  }, "id" | "clerkId" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrderInput | SortOrder
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
    clerkId?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type WorkflowWhereInput = {
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    data?: JsonNullableFilter<"Workflow">
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: NodeListRelationFilter
    edges?: EdgeListRelationFilter
    history?: ExecutionHistoryListRelationFilter
  }

  export type WorkflowOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    nodes?: NodeOrderByRelationAggregateInput
    edges?: EdgeOrderByRelationAggregateInput
    history?: ExecutionHistoryOrderByRelationAggregateInput
  }

  export type WorkflowWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: WorkflowWhereInput | WorkflowWhereInput[]
    OR?: WorkflowWhereInput[]
    NOT?: WorkflowWhereInput | WorkflowWhereInput[]
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    data?: JsonNullableFilter<"Workflow">
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    nodes?: NodeListRelationFilter
    edges?: EdgeListRelationFilter
    history?: ExecutionHistoryListRelationFilter
  }, "id">

  export type WorkflowOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    data?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkflowCountOrderByAggregateInput
    _max?: WorkflowMaxOrderByAggregateInput
    _min?: WorkflowMinOrderByAggregateInput
  }

  export type WorkflowScalarWhereWithAggregatesInput = {
    AND?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    OR?: WorkflowScalarWhereWithAggregatesInput[]
    NOT?: WorkflowScalarWhereWithAggregatesInput | WorkflowScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workflow"> | string
    userId?: StringWithAggregatesFilter<"Workflow"> | string
    name?: StringWithAggregatesFilter<"Workflow"> | string
    description?: StringNullableWithAggregatesFilter<"Workflow"> | string | null
    data?: JsonNullableWithAggregatesFilter<"Workflow">
    createdAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workflow"> | Date | string
  }

  export type NodeWhereInput = {
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    id?: StringFilter<"Node"> | string
    workflowId?: StringFilter<"Node"> | string
    type?: StringFilter<"Node"> | string
    data?: JsonFilter<"Node">
    position?: JsonFilter<"Node">
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type NodeOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type NodeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NodeWhereInput | NodeWhereInput[]
    OR?: NodeWhereInput[]
    NOT?: NodeWhereInput | NodeWhereInput[]
    workflowId?: StringFilter<"Node"> | string
    type?: StringFilter<"Node"> | string
    data?: JsonFilter<"Node">
    position?: JsonFilter<"Node">
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type NodeOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: NodeCountOrderByAggregateInput
    _max?: NodeMaxOrderByAggregateInput
    _min?: NodeMinOrderByAggregateInput
  }

  export type NodeScalarWhereWithAggregatesInput = {
    AND?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    OR?: NodeScalarWhereWithAggregatesInput[]
    NOT?: NodeScalarWhereWithAggregatesInput | NodeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Node"> | string
    workflowId?: StringWithAggregatesFilter<"Node"> | string
    type?: StringWithAggregatesFilter<"Node"> | string
    data?: JsonWithAggregatesFilter<"Node">
    position?: JsonWithAggregatesFilter<"Node">
    createdAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Node"> | Date | string
  }

  export type EdgeWhereInput = {
    AND?: EdgeWhereInput | EdgeWhereInput[]
    OR?: EdgeWhereInput[]
    NOT?: EdgeWhereInput | EdgeWhereInput[]
    id?: StringFilter<"Edge"> | string
    workflowId?: StringFilter<"Edge"> | string
    source?: StringFilter<"Edge"> | string
    target?: StringFilter<"Edge"> | string
    sourceHandle?: StringNullableFilter<"Edge"> | string | null
    targetHandle?: StringNullableFilter<"Edge"> | string | null
    createdAt?: DateTimeFilter<"Edge"> | Date | string
    updatedAt?: DateTimeFilter<"Edge"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }

  export type EdgeOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    source?: SortOrder
    target?: SortOrder
    sourceHandle?: SortOrderInput | SortOrder
    targetHandle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
  }

  export type EdgeWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: EdgeWhereInput | EdgeWhereInput[]
    OR?: EdgeWhereInput[]
    NOT?: EdgeWhereInput | EdgeWhereInput[]
    workflowId?: StringFilter<"Edge"> | string
    source?: StringFilter<"Edge"> | string
    target?: StringFilter<"Edge"> | string
    sourceHandle?: StringNullableFilter<"Edge"> | string | null
    targetHandle?: StringNullableFilter<"Edge"> | string | null
    createdAt?: DateTimeFilter<"Edge"> | Date | string
    updatedAt?: DateTimeFilter<"Edge"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
  }, "id">

  export type EdgeOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    source?: SortOrder
    target?: SortOrder
    sourceHandle?: SortOrderInput | SortOrder
    targetHandle?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: EdgeCountOrderByAggregateInput
    _max?: EdgeMaxOrderByAggregateInput
    _min?: EdgeMinOrderByAggregateInput
  }

  export type EdgeScalarWhereWithAggregatesInput = {
    AND?: EdgeScalarWhereWithAggregatesInput | EdgeScalarWhereWithAggregatesInput[]
    OR?: EdgeScalarWhereWithAggregatesInput[]
    NOT?: EdgeScalarWhereWithAggregatesInput | EdgeScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Edge"> | string
    workflowId?: StringWithAggregatesFilter<"Edge"> | string
    source?: StringWithAggregatesFilter<"Edge"> | string
    target?: StringWithAggregatesFilter<"Edge"> | string
    sourceHandle?: StringNullableWithAggregatesFilter<"Edge"> | string | null
    targetHandle?: StringNullableWithAggregatesFilter<"Edge"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Edge"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Edge"> | Date | string
  }

  export type ExecutionHistoryWhereInput = {
    AND?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    OR?: ExecutionHistoryWhereInput[]
    NOT?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    id?: StringFilter<"ExecutionHistory"> | string
    workflowId?: StringFilter<"ExecutionHistory"> | string
    userId?: StringFilter<"ExecutionHistory"> | string
    status?: StringFilter<"ExecutionHistory"> | string
    scope?: StringFilter<"ExecutionHistory"> | string
    executedNodeIds?: StringNullableListFilter<"ExecutionHistory">
    nodeResults?: JsonFilter<"ExecutionHistory">
    nodeErrors?: JsonFilter<"ExecutionHistory">
    nodeLogs?: JsonFilter<"ExecutionHistory">
    startTime?: DateTimeFilter<"ExecutionHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"ExecutionHistory"> | Date | string | null
    duration?: IntNullableFilter<"ExecutionHistory"> | number | null
    triggerTaskIds?: JsonNullableFilter<"ExecutionHistory">
    createdAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type ExecutionHistoryOrderByWithRelationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    executedNodeIds?: SortOrder
    nodeResults?: SortOrder
    nodeErrors?: SortOrder
    nodeLogs?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    triggerTaskIds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    workflow?: WorkflowOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type ExecutionHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    OR?: ExecutionHistoryWhereInput[]
    NOT?: ExecutionHistoryWhereInput | ExecutionHistoryWhereInput[]
    workflowId?: StringFilter<"ExecutionHistory"> | string
    userId?: StringFilter<"ExecutionHistory"> | string
    status?: StringFilter<"ExecutionHistory"> | string
    scope?: StringFilter<"ExecutionHistory"> | string
    executedNodeIds?: StringNullableListFilter<"ExecutionHistory">
    nodeResults?: JsonFilter<"ExecutionHistory">
    nodeErrors?: JsonFilter<"ExecutionHistory">
    nodeLogs?: JsonFilter<"ExecutionHistory">
    startTime?: DateTimeFilter<"ExecutionHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"ExecutionHistory"> | Date | string | null
    duration?: IntNullableFilter<"ExecutionHistory"> | number | null
    triggerTaskIds?: JsonNullableFilter<"ExecutionHistory">
    createdAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
    workflow?: XOR<WorkflowScalarRelationFilter, WorkflowWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type ExecutionHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    executedNodeIds?: SortOrder
    nodeResults?: SortOrder
    nodeErrors?: SortOrder
    nodeLogs?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrderInput | SortOrder
    duration?: SortOrderInput | SortOrder
    triggerTaskIds?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ExecutionHistoryCountOrderByAggregateInput
    _avg?: ExecutionHistoryAvgOrderByAggregateInput
    _max?: ExecutionHistoryMaxOrderByAggregateInput
    _min?: ExecutionHistoryMinOrderByAggregateInput
    _sum?: ExecutionHistorySumOrderByAggregateInput
  }

  export type ExecutionHistoryScalarWhereWithAggregatesInput = {
    AND?: ExecutionHistoryScalarWhereWithAggregatesInput | ExecutionHistoryScalarWhereWithAggregatesInput[]
    OR?: ExecutionHistoryScalarWhereWithAggregatesInput[]
    NOT?: ExecutionHistoryScalarWhereWithAggregatesInput | ExecutionHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    workflowId?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    userId?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    status?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    scope?: StringWithAggregatesFilter<"ExecutionHistory"> | string
    executedNodeIds?: StringNullableListFilter<"ExecutionHistory">
    nodeResults?: JsonWithAggregatesFilter<"ExecutionHistory">
    nodeErrors?: JsonWithAggregatesFilter<"ExecutionHistory">
    nodeLogs?: JsonWithAggregatesFilter<"ExecutionHistory">
    startTime?: DateTimeWithAggregatesFilter<"ExecutionHistory"> | Date | string
    endTime?: DateTimeNullableWithAggregatesFilter<"ExecutionHistory"> | Date | string | null
    duration?: IntNullableWithAggregatesFilter<"ExecutionHistory"> | number | null
    triggerTaskIds?: JsonNullableWithAggregatesFilter<"ExecutionHistory">
    createdAt?: DateTimeWithAggregatesFilter<"ExecutionHistory"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowCreateNestedManyWithoutUserInput
    history?: ExecutionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
    history?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
    history?: ExecutionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
    history?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowCreateInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    edges?: EdgeCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateInput = {
    id?: string
    userId: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    edges?: EdgeUncheckedCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    edges?: EdgeUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    edges?: EdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateManyInput = {
    id?: string
    userId: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkflowUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkflowUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    position: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutNodesInput
  }

  export type NodeUncheckedCreateInput = {
    id?: string
    workflowId: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    position: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutNodesNestedInput
  }

  export type NodeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateManyInput = {
    id?: string
    workflowId: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    position: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EdgeCreateInput = {
    id?: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutEdgesInput
  }

  export type EdgeUncheckedCreateInput = {
    id?: string
    workflowId: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EdgeUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutEdgesNestedInput
  }

  export type EdgeUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EdgeCreateManyInput = {
    id?: string
    workflowId: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EdgeUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EdgeUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryCreateInput = {
    id?: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutHistoryInput
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateInput = {
    id?: string
    workflowId: string
    userId: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ExecutionHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutHistoryNestedInput
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryCreateManyInput = {
    id?: string
    workflowId: string
    userId: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ExecutionHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
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

  export type WorkflowListRelationFilter = {
    every?: WorkflowWhereInput
    some?: WorkflowWhereInput
    none?: WorkflowWhereInput
  }

  export type ExecutionHistoryListRelationFilter = {
    every?: ExecutionHistoryWhereInput
    some?: ExecutionHistoryWhereInput
    none?: ExecutionHistoryWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type WorkflowOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExecutionHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    clerkId?: SortOrder
    email?: SortOrder
    name?: SortOrder
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
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type NodeListRelationFilter = {
    every?: NodeWhereInput
    some?: NodeWhereInput
    none?: NodeWhereInput
  }

  export type EdgeListRelationFilter = {
    every?: EdgeWhereInput
    some?: EdgeWhereInput
    none?: EdgeWhereInput
  }

  export type NodeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EdgeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkflowCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    data?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkflowMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type WorkflowScalarRelationFilter = {
    is?: WorkflowWhereInput
    isNot?: WorkflowWhereInput
  }

  export type NodeCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    data?: SortOrder
    position?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type NodeMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedJsonFilter<$PrismaModel>
    _max?: NestedJsonFilter<$PrismaModel>
  }

  export type EdgeCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    source?: SortOrder
    target?: SortOrder
    sourceHandle?: SortOrder
    targetHandle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EdgeMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    source?: SortOrder
    target?: SortOrder
    sourceHandle?: SortOrder
    targetHandle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type EdgeMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    source?: SortOrder
    target?: SortOrder
    sourceHandle?: SortOrder
    targetHandle?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
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

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type ExecutionHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    executedNodeIds?: SortOrder
    nodeResults?: SortOrder
    nodeErrors?: SortOrder
    nodeLogs?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    triggerTaskIds?: SortOrder
    createdAt?: SortOrder
  }

  export type ExecutionHistoryAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type ExecutionHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type ExecutionHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    workflowId?: SortOrder
    userId?: SortOrder
    status?: SortOrder
    scope?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    duration?: SortOrder
    createdAt?: SortOrder
  }

  export type ExecutionHistorySumOrderByAggregateInput = {
    duration?: SortOrder
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

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type WorkflowCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type ExecutionHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type WorkflowUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
  }

  export type ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type WorkflowUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type ExecutionHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput | ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput | ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutUserInput | ExecutionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type WorkflowUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput> | WorkflowCreateWithoutUserInput[] | WorkflowUncheckedCreateWithoutUserInput[]
    connectOrCreate?: WorkflowCreateOrConnectWithoutUserInput | WorkflowCreateOrConnectWithoutUserInput[]
    upsert?: WorkflowUpsertWithWhereUniqueWithoutUserInput | WorkflowUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: WorkflowCreateManyUserInputEnvelope
    set?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    disconnect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    delete?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    connect?: WorkflowWhereUniqueInput | WorkflowWhereUniqueInput[]
    update?: WorkflowUpdateWithWhereUniqueWithoutUserInput | WorkflowUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: WorkflowUpdateManyWithWhereWithoutUserInput | WorkflowUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput> | ExecutionHistoryCreateWithoutUserInput[] | ExecutionHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutUserInput | ExecutionHistoryCreateOrConnectWithoutUserInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput | ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ExecutionHistoryCreateManyUserInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput | ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutUserInput | ExecutionHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutWorkflowsInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
  }

  export type NodeCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type EdgeCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<EdgeCreateWithoutWorkflowInput, EdgeUncheckedCreateWithoutWorkflowInput> | EdgeCreateWithoutWorkflowInput[] | EdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutWorkflowInput | EdgeCreateOrConnectWithoutWorkflowInput[]
    createMany?: EdgeCreateManyWorkflowInputEnvelope
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
  }

  export type ExecutionHistoryCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type NodeUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
  }

  export type EdgeUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<EdgeCreateWithoutWorkflowInput, EdgeUncheckedCreateWithoutWorkflowInput> | EdgeCreateWithoutWorkflowInput[] | EdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutWorkflowInput | EdgeCreateOrConnectWithoutWorkflowInput[]
    createMany?: EdgeCreateManyWorkflowInputEnvelope
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
  }

  export type ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutWorkflowsNestedInput = {
    create?: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    connectOrCreate?: UserCreateOrConnectWithoutWorkflowsInput
    upsert?: UserUpsertWithoutWorkflowsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutWorkflowsInput, UserUpdateWithoutWorkflowsInput>, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type NodeUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutWorkflowInput | NodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutWorkflowInput | NodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutWorkflowInput | NodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type EdgeUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<EdgeCreateWithoutWorkflowInput, EdgeUncheckedCreateWithoutWorkflowInput> | EdgeCreateWithoutWorkflowInput[] | EdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutWorkflowInput | EdgeCreateOrConnectWithoutWorkflowInput[]
    upsert?: EdgeUpsertWithWhereUniqueWithoutWorkflowInput | EdgeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: EdgeCreateManyWorkflowInputEnvelope
    set?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    disconnect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    delete?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    update?: EdgeUpdateWithWhereUniqueWithoutWorkflowInput | EdgeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: EdgeUpdateManyWithWhereWithoutWorkflowInput | EdgeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
  }

  export type ExecutionHistoryUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput | ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type NodeUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput> | NodeCreateWithoutWorkflowInput[] | NodeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: NodeCreateOrConnectWithoutWorkflowInput | NodeCreateOrConnectWithoutWorkflowInput[]
    upsert?: NodeUpsertWithWhereUniqueWithoutWorkflowInput | NodeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: NodeCreateManyWorkflowInputEnvelope
    set?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    disconnect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    delete?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    connect?: NodeWhereUniqueInput | NodeWhereUniqueInput[]
    update?: NodeUpdateWithWhereUniqueWithoutWorkflowInput | NodeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: NodeUpdateManyWithWhereWithoutWorkflowInput | NodeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: NodeScalarWhereInput | NodeScalarWhereInput[]
  }

  export type EdgeUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<EdgeCreateWithoutWorkflowInput, EdgeUncheckedCreateWithoutWorkflowInput> | EdgeCreateWithoutWorkflowInput[] | EdgeUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: EdgeCreateOrConnectWithoutWorkflowInput | EdgeCreateOrConnectWithoutWorkflowInput[]
    upsert?: EdgeUpsertWithWhereUniqueWithoutWorkflowInput | EdgeUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: EdgeCreateManyWorkflowInputEnvelope
    set?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    disconnect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    delete?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    connect?: EdgeWhereUniqueInput | EdgeWhereUniqueInput[]
    update?: EdgeUpdateWithWhereUniqueWithoutWorkflowInput | EdgeUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: EdgeUpdateManyWithWhereWithoutWorkflowInput | EdgeUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput = {
    create?: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput> | ExecutionHistoryCreateWithoutWorkflowInput[] | ExecutionHistoryUncheckedCreateWithoutWorkflowInput[]
    connectOrCreate?: ExecutionHistoryCreateOrConnectWithoutWorkflowInput | ExecutionHistoryCreateOrConnectWithoutWorkflowInput[]
    upsert?: ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput[]
    createMany?: ExecutionHistoryCreateManyWorkflowInputEnvelope
    set?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    disconnect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    delete?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    connect?: ExecutionHistoryWhereUniqueInput | ExecutionHistoryWhereUniqueInput[]
    update?: ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput | ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput[]
    updateMany?: ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput | ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput[]
    deleteMany?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
  }

  export type WorkflowCreateNestedOneWithoutNodesInput = {
    create?: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodesInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutNodesNestedInput = {
    create?: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutNodesInput
    upsert?: WorkflowUpsertWithoutNodesInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutNodesInput, WorkflowUpdateWithoutNodesInput>, WorkflowUncheckedUpdateWithoutNodesInput>
  }

  export type WorkflowCreateNestedOneWithoutEdgesInput = {
    create?: XOR<WorkflowCreateWithoutEdgesInput, WorkflowUncheckedCreateWithoutEdgesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutEdgesInput
    connect?: WorkflowWhereUniqueInput
  }

  export type WorkflowUpdateOneRequiredWithoutEdgesNestedInput = {
    create?: XOR<WorkflowCreateWithoutEdgesInput, WorkflowUncheckedCreateWithoutEdgesInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutEdgesInput
    upsert?: WorkflowUpsertWithoutEdgesInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutEdgesInput, WorkflowUpdateWithoutEdgesInput>, WorkflowUncheckedUpdateWithoutEdgesInput>
  }

  export type ExecutionHistoryCreateexecutedNodeIdsInput = {
    set: string[]
  }

  export type WorkflowCreateNestedOneWithoutHistoryInput = {
    create?: XOR<WorkflowCreateWithoutHistoryInput, WorkflowUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutHistoryInput
    connect?: WorkflowWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutHistoryInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    connect?: UserWhereUniqueInput
  }

  export type ExecutionHistoryUpdateexecutedNodeIdsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkflowUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<WorkflowCreateWithoutHistoryInput, WorkflowUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: WorkflowCreateOrConnectWithoutHistoryInput
    upsert?: WorkflowUpsertWithoutHistoryInput
    connect?: WorkflowWhereUniqueInput
    update?: XOR<XOR<WorkflowUpdateToOneWithWhereWithoutHistoryInput, WorkflowUpdateWithoutHistoryInput>, WorkflowUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateOneRequiredWithoutHistoryNestedInput = {
    create?: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    connectOrCreate?: UserCreateOrConnectWithoutHistoryInput
    upsert?: UserUpsertWithoutHistoryInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutHistoryInput, UserUpdateWithoutHistoryInput>, UserUncheckedUpdateWithoutHistoryInput>
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
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
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

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type WorkflowCreateWithoutUserInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    edges?: EdgeCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutUserInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    edges?: EdgeUncheckedCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowCreateManyUserInputEnvelope = {
    data: WorkflowCreateManyUserInput | WorkflowCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionHistoryCreateWithoutUserInput = {
    id?: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    workflow: WorkflowCreateNestedOneWithoutHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    workflowId: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ExecutionHistoryCreateOrConnectWithoutUserInput = {
    where: ExecutionHistoryWhereUniqueInput
    create: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ExecutionHistoryCreateManyUserInputEnvelope = {
    data: ExecutionHistoryCreateManyUserInput | ExecutionHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type WorkflowUpsertWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    update: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
    create: XOR<WorkflowCreateWithoutUserInput, WorkflowUncheckedCreateWithoutUserInput>
  }

  export type WorkflowUpdateWithWhereUniqueWithoutUserInput = {
    where: WorkflowWhereUniqueInput
    data: XOR<WorkflowUpdateWithoutUserInput, WorkflowUncheckedUpdateWithoutUserInput>
  }

  export type WorkflowUpdateManyWithWhereWithoutUserInput = {
    where: WorkflowScalarWhereInput
    data: XOR<WorkflowUpdateManyMutationInput, WorkflowUncheckedUpdateManyWithoutUserInput>
  }

  export type WorkflowScalarWhereInput = {
    AND?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    OR?: WorkflowScalarWhereInput[]
    NOT?: WorkflowScalarWhereInput | WorkflowScalarWhereInput[]
    id?: StringFilter<"Workflow"> | string
    userId?: StringFilter<"Workflow"> | string
    name?: StringFilter<"Workflow"> | string
    description?: StringNullableFilter<"Workflow"> | string | null
    data?: JsonNullableFilter<"Workflow">
    createdAt?: DateTimeFilter<"Workflow"> | Date | string
    updatedAt?: DateTimeFilter<"Workflow"> | Date | string
  }

  export type ExecutionHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: ExecutionHistoryWhereUniqueInput
    update: XOR<ExecutionHistoryUpdateWithoutUserInput, ExecutionHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<ExecutionHistoryCreateWithoutUserInput, ExecutionHistoryUncheckedCreateWithoutUserInput>
  }

  export type ExecutionHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: ExecutionHistoryWhereUniqueInput
    data: XOR<ExecutionHistoryUpdateWithoutUserInput, ExecutionHistoryUncheckedUpdateWithoutUserInput>
  }

  export type ExecutionHistoryUpdateManyWithWhereWithoutUserInput = {
    where: ExecutionHistoryScalarWhereInput
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type ExecutionHistoryScalarWhereInput = {
    AND?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
    OR?: ExecutionHistoryScalarWhereInput[]
    NOT?: ExecutionHistoryScalarWhereInput | ExecutionHistoryScalarWhereInput[]
    id?: StringFilter<"ExecutionHistory"> | string
    workflowId?: StringFilter<"ExecutionHistory"> | string
    userId?: StringFilter<"ExecutionHistory"> | string
    status?: StringFilter<"ExecutionHistory"> | string
    scope?: StringFilter<"ExecutionHistory"> | string
    executedNodeIds?: StringNullableListFilter<"ExecutionHistory">
    nodeResults?: JsonFilter<"ExecutionHistory">
    nodeErrors?: JsonFilter<"ExecutionHistory">
    nodeLogs?: JsonFilter<"ExecutionHistory">
    startTime?: DateTimeFilter<"ExecutionHistory"> | Date | string
    endTime?: DateTimeNullableFilter<"ExecutionHistory"> | Date | string | null
    duration?: IntNullableFilter<"ExecutionHistory"> | number | null
    triggerTaskIds?: JsonNullableFilter<"ExecutionHistory">
    createdAt?: DateTimeFilter<"ExecutionHistory"> | Date | string
  }

  export type UserCreateWithoutWorkflowsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ExecutionHistoryCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutWorkflowsInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    history?: ExecutionHistoryUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutWorkflowsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
  }

  export type NodeCreateWithoutWorkflowInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    position: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeUncheckedCreateWithoutWorkflowInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    position: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type NodeCreateOrConnectWithoutWorkflowInput = {
    where: NodeWhereUniqueInput
    create: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput>
  }

  export type NodeCreateManyWorkflowInputEnvelope = {
    data: NodeCreateManyWorkflowInput | NodeCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type EdgeCreateWithoutWorkflowInput = {
    id?: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EdgeUncheckedCreateWithoutWorkflowInput = {
    id?: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EdgeCreateOrConnectWithoutWorkflowInput = {
    where: EdgeWhereUniqueInput
    create: XOR<EdgeCreateWithoutWorkflowInput, EdgeUncheckedCreateWithoutWorkflowInput>
  }

  export type EdgeCreateManyWorkflowInputEnvelope = {
    data: EdgeCreateManyWorkflowInput | EdgeCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type ExecutionHistoryCreateWithoutWorkflowInput = {
    id?: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutHistoryInput
  }

  export type ExecutionHistoryUncheckedCreateWithoutWorkflowInput = {
    id?: string
    userId: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type ExecutionHistoryCreateOrConnectWithoutWorkflowInput = {
    where: ExecutionHistoryWhereUniqueInput
    create: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionHistoryCreateManyWorkflowInputEnvelope = {
    data: ExecutionHistoryCreateManyWorkflowInput | ExecutionHistoryCreateManyWorkflowInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutWorkflowsInput = {
    update: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
    create: XOR<UserCreateWithoutWorkflowsInput, UserUncheckedCreateWithoutWorkflowsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutWorkflowsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutWorkflowsInput, UserUncheckedUpdateWithoutWorkflowsInput>
  }

  export type UserUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ExecutionHistoryUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutWorkflowsInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    history?: ExecutionHistoryUncheckedUpdateManyWithoutUserNestedInput
  }

  export type NodeUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: NodeWhereUniqueInput
    update: XOR<NodeUpdateWithoutWorkflowInput, NodeUncheckedUpdateWithoutWorkflowInput>
    create: XOR<NodeCreateWithoutWorkflowInput, NodeUncheckedCreateWithoutWorkflowInput>
  }

  export type NodeUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: NodeWhereUniqueInput
    data: XOR<NodeUpdateWithoutWorkflowInput, NodeUncheckedUpdateWithoutWorkflowInput>
  }

  export type NodeUpdateManyWithWhereWithoutWorkflowInput = {
    where: NodeScalarWhereInput
    data: XOR<NodeUpdateManyMutationInput, NodeUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type NodeScalarWhereInput = {
    AND?: NodeScalarWhereInput | NodeScalarWhereInput[]
    OR?: NodeScalarWhereInput[]
    NOT?: NodeScalarWhereInput | NodeScalarWhereInput[]
    id?: StringFilter<"Node"> | string
    workflowId?: StringFilter<"Node"> | string
    type?: StringFilter<"Node"> | string
    data?: JsonFilter<"Node">
    position?: JsonFilter<"Node">
    createdAt?: DateTimeFilter<"Node"> | Date | string
    updatedAt?: DateTimeFilter<"Node"> | Date | string
  }

  export type EdgeUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: EdgeWhereUniqueInput
    update: XOR<EdgeUpdateWithoutWorkflowInput, EdgeUncheckedUpdateWithoutWorkflowInput>
    create: XOR<EdgeCreateWithoutWorkflowInput, EdgeUncheckedCreateWithoutWorkflowInput>
  }

  export type EdgeUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: EdgeWhereUniqueInput
    data: XOR<EdgeUpdateWithoutWorkflowInput, EdgeUncheckedUpdateWithoutWorkflowInput>
  }

  export type EdgeUpdateManyWithWhereWithoutWorkflowInput = {
    where: EdgeScalarWhereInput
    data: XOR<EdgeUpdateManyMutationInput, EdgeUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type EdgeScalarWhereInput = {
    AND?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
    OR?: EdgeScalarWhereInput[]
    NOT?: EdgeScalarWhereInput | EdgeScalarWhereInput[]
    id?: StringFilter<"Edge"> | string
    workflowId?: StringFilter<"Edge"> | string
    source?: StringFilter<"Edge"> | string
    target?: StringFilter<"Edge"> | string
    sourceHandle?: StringNullableFilter<"Edge"> | string | null
    targetHandle?: StringNullableFilter<"Edge"> | string | null
    createdAt?: DateTimeFilter<"Edge"> | Date | string
    updatedAt?: DateTimeFilter<"Edge"> | Date | string
  }

  export type ExecutionHistoryUpsertWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionHistoryWhereUniqueInput
    update: XOR<ExecutionHistoryUpdateWithoutWorkflowInput, ExecutionHistoryUncheckedUpdateWithoutWorkflowInput>
    create: XOR<ExecutionHistoryCreateWithoutWorkflowInput, ExecutionHistoryUncheckedCreateWithoutWorkflowInput>
  }

  export type ExecutionHistoryUpdateWithWhereUniqueWithoutWorkflowInput = {
    where: ExecutionHistoryWhereUniqueInput
    data: XOR<ExecutionHistoryUpdateWithoutWorkflowInput, ExecutionHistoryUncheckedUpdateWithoutWorkflowInput>
  }

  export type ExecutionHistoryUpdateManyWithWhereWithoutWorkflowInput = {
    where: ExecutionHistoryScalarWhereInput
    data: XOR<ExecutionHistoryUpdateManyMutationInput, ExecutionHistoryUncheckedUpdateManyWithoutWorkflowInput>
  }

  export type WorkflowCreateWithoutNodesInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    edges?: EdgeCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutNodesInput = {
    id?: string
    userId: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    edges?: EdgeUncheckedCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutNodesInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
  }

  export type WorkflowUpsertWithoutNodesInput = {
    update: XOR<WorkflowUpdateWithoutNodesInput, WorkflowUncheckedUpdateWithoutNodesInput>
    create: XOR<WorkflowCreateWithoutNodesInput, WorkflowUncheckedCreateWithoutNodesInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutNodesInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutNodesInput, WorkflowUncheckedUpdateWithoutNodesInput>
  }

  export type WorkflowUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    edges?: EdgeUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutNodesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    edges?: EdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutEdgesInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutEdgesInput = {
    id?: string
    userId: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    history?: ExecutionHistoryUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutEdgesInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutEdgesInput, WorkflowUncheckedCreateWithoutEdgesInput>
  }

  export type WorkflowUpsertWithoutEdgesInput = {
    update: XOR<WorkflowUpdateWithoutEdgesInput, WorkflowUncheckedUpdateWithoutEdgesInput>
    create: XOR<WorkflowCreateWithoutEdgesInput, WorkflowUncheckedCreateWithoutEdgesInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutEdgesInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutEdgesInput, WorkflowUncheckedUpdateWithoutEdgesInput>
  }

  export type WorkflowUpdateWithoutEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutEdgesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowCreateWithoutHistoryInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutWorkflowsInput
    nodes?: NodeCreateNestedManyWithoutWorkflowInput
    edges?: EdgeCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowUncheckedCreateWithoutHistoryInput = {
    id?: string
    userId: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
    nodes?: NodeUncheckedCreateNestedManyWithoutWorkflowInput
    edges?: EdgeUncheckedCreateNestedManyWithoutWorkflowInput
  }

  export type WorkflowCreateOrConnectWithoutHistoryInput = {
    where: WorkflowWhereUniqueInput
    create: XOR<WorkflowCreateWithoutHistoryInput, WorkflowUncheckedCreateWithoutHistoryInput>
  }

  export type UserCreateWithoutHistoryInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutHistoryInput = {
    id?: string
    clerkId: string
    email: string
    name?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workflows?: WorkflowUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutHistoryInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
  }

  export type WorkflowUpsertWithoutHistoryInput = {
    update: XOR<WorkflowUpdateWithoutHistoryInput, WorkflowUncheckedUpdateWithoutHistoryInput>
    create: XOR<WorkflowCreateWithoutHistoryInput, WorkflowUncheckedCreateWithoutHistoryInput>
    where?: WorkflowWhereInput
  }

  export type WorkflowUpdateToOneWithWhereWithoutHistoryInput = {
    where?: WorkflowWhereInput
    data: XOR<WorkflowUpdateWithoutHistoryInput, WorkflowUncheckedUpdateWithoutHistoryInput>
  }

  export type WorkflowUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutWorkflowsNestedInput
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    edges?: EdgeUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    edges?: EdgeUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type UserUpsertWithoutHistoryInput = {
    update: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
    create: XOR<UserCreateWithoutHistoryInput, UserUncheckedCreateWithoutHistoryInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutHistoryInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutHistoryInput, UserUncheckedUpdateWithoutHistoryInput>
  }

  export type UserUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutHistoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    clerkId?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflows?: WorkflowUncheckedUpdateManyWithoutUserNestedInput
  }

  export type WorkflowCreateManyUserInput = {
    id?: string
    name?: string
    description?: string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateManyUserInput = {
    id?: string
    workflowId: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type WorkflowUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUpdateManyWithoutWorkflowNestedInput
    edges?: EdgeUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    nodes?: NodeUncheckedUpdateManyWithoutWorkflowNestedInput
    edges?: EdgeUncheckedUpdateManyWithoutWorkflowNestedInput
    history?: ExecutionHistoryUncheckedUpdateManyWithoutWorkflowNestedInput
  }

  export type WorkflowUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    data?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workflow?: WorkflowUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    workflowId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeCreateManyWorkflowInput = {
    id?: string
    type: string
    data: JsonNullValueInput | InputJsonValue
    position: JsonNullValueInput | InputJsonValue
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type EdgeCreateManyWorkflowInput = {
    id?: string
    source: string
    target: string
    sourceHandle?: string | null
    targetHandle?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExecutionHistoryCreateManyWorkflowInput = {
    id?: string
    userId: string
    status: string
    scope: string
    executedNodeIds?: ExecutionHistoryCreateexecutedNodeIdsInput | string[]
    nodeResults: JsonNullValueInput | InputJsonValue
    nodeErrors: JsonNullValueInput | InputJsonValue
    nodeLogs: JsonNullValueInput | InputJsonValue
    startTime: Date | string
    endTime?: Date | string | null
    duration?: number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: Date | string
  }

  export type NodeUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NodeUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    data?: JsonNullValueInput | InputJsonValue
    position?: JsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EdgeUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EdgeUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EdgeUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    target?: StringFieldUpdateOperationsInput | string
    sourceHandle?: NullableStringFieldUpdateOperationsInput | string | null
    targetHandle?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutHistoryNestedInput
  }

  export type ExecutionHistoryUncheckedUpdateWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExecutionHistoryUncheckedUpdateManyWithoutWorkflowInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    executedNodeIds?: ExecutionHistoryUpdateexecutedNodeIdsInput | string[]
    nodeResults?: JsonNullValueInput | InputJsonValue
    nodeErrors?: JsonNullValueInput | InputJsonValue
    nodeLogs?: JsonNullValueInput | InputJsonValue
    startTime?: DateTimeFieldUpdateOperationsInput | Date | string
    endTime?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    duration?: NullableIntFieldUpdateOperationsInput | number | null
    triggerTaskIds?: NullableJsonNullValueInput | InputJsonValue
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



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