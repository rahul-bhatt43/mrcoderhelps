import {
  DebounceProps,
  ThrottleProps,
  DeepCloneProps,
  MergeObjectsProps,
  CapitalizeProps,
  IsEmailProps,
  GetQueryParamsProps,
  FormatDateProps,
  RandomIntProps,
  IsEmptyProps,
  CamelCaseProps,
  DelayProps,
  UniqueArrayProps,
  FlattenArrayProps,
  FormatNumberProps,
  GeneratePasswordProps,
} from "./types";

export function debounce({
  func,
  wait,
}: DebounceProps): (...args: any[]) => void {
  let timeout: ReturnType<typeof setTimeout> | null = null;

  return (...args: any[]): void => {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

export function throttle({
  func,
  limit,
}: ThrottleProps): (...args: any[]) => void {
  let lastFunc: ReturnType<typeof setTimeout> | null;
  let lastRan: number;

  return function (...args: any[]): void {
    if (!lastRan) {
      func(...args);
      lastRan = Date.now();
    } else {
      if (lastFunc) clearTimeout(lastFunc);
      lastFunc = setTimeout(() => {
        if (Date.now() - lastRan >= limit) {
          func(...args);
          lastRan = Date.now();
        }
      }, limit - (Date.now() - lastRan));
    }
  };
}

export function deepClone<T>({ obj }: DeepCloneProps<T>): T {
  return JSON.parse(JSON.stringify(obj));
}

export function mergeObjects({ target, source }: MergeObjectsProps): object {
  return { ...target, ...source };
}

export function capitalize({ str }: CapitalizeProps): string {
  if (!str) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

export function isEmpty({ value }: IsEmptyProps): boolean {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  if (value && typeof value === "object") {
    return Object.keys(value).length === 0;
  }
  return !value;
}

export function randomInt({ min, max }: RandomIntProps): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function formatDate({ date, format }: FormatDateProps): string {
  const map: { [key: string]: string } = {
    MM: ("0" + (date.getMonth() + 1)).slice(-2),
    DD: ("0" + date.getDate()).slice(-2),
    YYYY: date.getFullYear().toString(),
    HH: ("0" + date.getHours()).slice(-2),
    mm: ("0" + date.getMinutes()).slice(-2),
    ss: ("0" + date.getSeconds()).slice(-2),
  };

  return format.replace(/MM|DD|YYYY|HH|mm|ss/gi, (matched) => map[matched]);
}

export function getQueryParams({ url }: GetQueryParamsProps): {
  [key: string]: string;
} {
  const params: { [key: string]: string } = {};
  const queryString = url.split("?")[1];
  if (queryString) {
    const pairs = queryString.split("&");
    for (const pair of pairs) {
      const [key, value] = pair.split("=");
      params[decodeURIComponent(key)] = decodeURIComponent(value || "");
    }
  }
  return params;
}

export function isEmail({ email }: IsEmailProps): boolean {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

export function flattenArray<T>({ arr }: FlattenArrayProps<T>): T[] {
  return arr.reduce((flat, next) => flat.concat(next), []);
}

export function uniqueArray<T>({ arr }: UniqueArrayProps<T>): T[] {
  return Array.from(new Set(arr));
}

export function delay({ ms }: DelayProps): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function camelCase({ str }: CamelCaseProps): string {
  return str.replace(/-./g, (match) => match.charAt(1).toUpperCase());
}

export function formatNumber({
  number,
  decimals = 2,
  decPoint = ".",
  thousandsSep = ",",
}: FormatNumberProps): string {
  const fixedNumber = number.toFixed(decimals);
  const [integerPart, fractionalPart] = fixedNumber.split(".");

  const formattedIntegerPart = integerPart.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    thousandsSep
  );

  return fractionalPart
    ? `${formattedIntegerPart}${decPoint}${fractionalPart}`
    : formattedIntegerPart;
}

export function generatePassword({
  length,
  includeNumbers = true,
  includeSymbols = true,
  includeUppercase = true,
}: GeneratePasswordProps): string {
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const symbols = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

  let characterSet = lowercase;
  if (includeUppercase) characterSet += uppercase;
  if (includeNumbers) characterSet += numbers;
  if (includeSymbols) characterSet += symbols;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characterSet.length);
    password += characterSet[randomIndex];
  }

  return password;
}
