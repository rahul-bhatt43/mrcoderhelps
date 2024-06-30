export type DebounceProps = {
  func: (...args: any[]) => void;
  wait: number;
};

export type ThrottleProps = {
  func: (...args: any[]) => void;
  limit: number;
};

export type DeepCloneProps<T> = {
  obj: T;
};

export type MergeObjectsProps = {
  target: object;
  source: object;
};

export type CapitalizeProps = {
  str: string;
};

export type IsEmptyProps = {
  value: any;
};

export type RandomIntProps = {
  min: number;
  max: number;
};

export type FormatDateProps = {
  date: Date;
  format: string;
};

export type GetQueryParamsProps = {
  url: string;
};

export type IsEmailProps = {
  email: string;
};

export type FlattenArrayProps<T> = {
  arr: T[][];
};

export type UniqueArrayProps<T> = {
  arr: T[];
};

export type DelayProps = {
  ms: number;
};

export type CamelCaseProps = {
  str: string;
};

export type FormatNumberProps = {
  number: number;
  decimals?: number;
  decPoint?: string;
  thousandsSep?: string;
};

export type GeneratePasswordProps = {
  length: number;
  includeNumbers?: boolean;
  includeSymbols?: boolean;
  includeUppercase?: boolean;
};
