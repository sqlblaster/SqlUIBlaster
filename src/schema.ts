export type Variable = {
  readonly id: Scalars["Primary"];
  readonly name: Scalars["String"];
  readonly order: Scalars["Int"];
  readonly type: VariableType;
  readonly model?: Maybe<Scalars["String"]>;
  readonly field?: Maybe<Scalars["String"]>;
  readonly value?: Maybe<Scalars["String"]>;
  readonly defaultValue?: Maybe<Scalars["String"]>;
//   readonly record?: Maybe<NavigationSearchResultItem>;
//   readonly defaultRecord?: Maybe<NavigationSearchResultItem>;
  readonly enums?: Maybe<ReadonlyArray<Scalars["String"]>>;
//   readonly widgets: ReadonlyArray<Widget>;
};

export enum VariableType {
  String = "STRING",
  Enum = "ENUM",
  Integer = "INTEGER",
  Float = "FLOAT",
  Date = "DATE",
  Record = "RECORD",
  Boolean = "BOOLEAN",
}

export type Maybe<T> = T | null | undefined;

export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** Primary type */
  Primary: string;
  /** Timestamp type */
  Timestamp: Date;
  /** Foreign type */
  Foreign: string;
  /** Natural number type */
  Nat: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { [key: string]: any };
  /** Date type */
  Date: Date;
  /** Colour type */
  Colour: string;
  /** Uuid type */
  Uuid: string;
  DateTime: Date;
};

export type GraphNode = {
  readonly id: Scalars["Primary"];
  readonly rawId: Scalars["String"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly type: Scalars["String"];
  readonly through: Scalars["Boolean"];
  readonly glyph?: Maybe<Scalars["String"]>;
};

export type NavigationSearchResultItem = {
  readonly id: Scalars["String"];
  readonly url: Scalars["String"];
  readonly type: Scalars["String"];
  readonly title?: Maybe<Scalars["String"]>;
  readonly model: Scalars["String"];
  readonly headline: Scalars["String"];
  readonly rank: Scalars["Float"];
  readonly glyph?: Maybe<Scalars["String"]>;
};
