import { mask, unMask } from "remask";

export function cellphone(value: string) {
  const originalValue = unMask(value);
  const maskedValue = mask(originalValue, ["(99) 9 9999-9999"]);
  return maskedValue;
}
