import { Predicate } from "tiny-types";

export const NotEmptyStringP = Predicate.to(
  'not tobe emty ',
  (value) => value !== ''
);

export const LengthMaxStringP = (limit: number) =>
  Predicate.to(
    `not exexx ${limit} character `,
    (value: string) => value.length <= limit
  );
export const LengthMinStringP = (limit: number) =>
  Predicate.to(
    `not exexx ${limit} character `,
    (value: string) => value.length >= limit
  );
