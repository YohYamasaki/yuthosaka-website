import { LANGUAGES } from "../i18n/ui.ts";

/**
 * Remove trailing slash from the given string.
 * @param str - string to remove trailing slash
 * @return trailing slash removed string
 */
export function removeTrailingSlash(str: string): string {
  return str.endsWith("/") ? str.slice(0, -1) : str;
}

/**
 * Remove language from the given slug.
 * @param slug - slug of content collection
 * @return lang removed slug
 */
export function removeLangFromContentSlug(slug: string): string {
  if (Object.keys(LANGUAGES).some((lang) => slug.startsWith(lang))) {
    return slug.slice(3);
  } else {
    return slug;
  }
}

/**
 * Remove language from the given pathname.
 * @param pathname - pathname with lang prefix
 * @return lang removed pathname
 */
export function removeLangFromContentPath(pathname: string): string {
  if (Object.keys(LANGUAGES).some((lang) => pathname.startsWith(`/${lang}`))) {
    return pathname.slice(3);
  } else {
    return pathname;
  }
}

/**
 * Make the first letter of a given string uppercase.
 * @param str - Original string
 * @return Updated string with capitalized first letter
 */
export function capitalizeFirstLetter(str: string): string {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
