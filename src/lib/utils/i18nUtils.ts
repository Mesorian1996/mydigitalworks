import trailingSlashChecker from "./trailingSlashChecker";
import menu from "../../config/menu.json";
import dictionary from "../../i18n/de.json";

// Single-language setup (de) with content stored under "de" directory
export const supportedLanguages = [
  {
    languageCode: "de",
    contentDir: "de",
  },
];

export const enabledLanguages = supportedLanguages;

// Simple translator: use merged menu + dictionary without locale switching
const translations = {
  ...menu,
  ...dictionary,
  contentDir: "de",
};

type NestedObject = Record<string, any>;
type DotNotationKeys<T> = T extends NestedObject
  ? {
      [K in keyof T & string]: T[K] extends NestedObject
        ? `${K}` | `${K}.${DotNotationKeys<T[K]>}`
        : `${K}`;
    }[keyof T & string]
  : never;

export const useTranslations = async (_lang?: string): Promise<Function> => {
  const t = <T extends NestedObject>(key: DotNotationKeys<T>): string | any => {
    const keys = key.split(".");
    let value: any = translations;
    for (const k of keys) {
      if (value && typeof value === "object" && k in value) {
        value = value[k];
      } else {
        return "Not Found";
      }
    }
    return value;
  };

  return Object.assign(t, translations);
};

// Paths: single root only
export function generatePaths(): Array<{ params: Record<string, string> }> {
  return [{ params: {} }];
}

// Locale-less URL helper: keep trailing slash handling, allow external/mailto/tel untouched
export const getLocaleUrlCTM = (
  url: string,
  _lang?: string,
  _prependValue?: string,
): string => {
  if (url.startsWith("http")) return url;
  if (url.startsWith("mailto:") || url.startsWith("tel:")) return url;
  return trailingSlashChecker(url);
};
