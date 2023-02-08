export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type BaseUserOut = {
  __typename?: 'BaseUserOut';
  avatar?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  id: Scalars['ID'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  authLogin: UserOutput;
  authRegister: UserOutput;
  shortenUrl: UrlOutput;
};


export type MutationAuthLoginArgs = {
  input: LoginUserInput;
};


export type MutationAuthRegisterArgs = {
  input: RegisterUserInput;
};


export type MutationShortenUrlArgs = {
  input: UrlInputDto;
};

export type Query = {
  __typename?: 'Query';
  getShorUrls: Array<UrlOutput>;
};

export type RegisterUserInput = {
  avatar?: InputMaybe<Scalars['String']>;
  email: Scalars['String'];
  firstName: Scalars['String'];
  lastName: Scalars['String'];
  password: Scalars['String'];
};

export type UrlInputDto = {
  longUrl: Scalars['String'];
};

export type UrlOutput = {
  __typename?: 'UrlOutput';
  id: Scalars['ID'];
  shortUrl: Scalars['String'];
};

export type UserOutput = {
  __typename?: 'UserOutput';
  accessToken: Scalars['String'];
  user: BaseUserOut;
};
