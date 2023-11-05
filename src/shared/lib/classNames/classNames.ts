export type IMods = Record<string, string | boolean>;

export function classNames(
  cls: string,
  mods: IMods = {},
  additional: string[] = []
): string {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([_, value]) => Boolean(value))
      .map(([clsNm, _]) => clsNm),
    ...additional.filter(Boolean),
  ]
    .filter(Boolean)
    .join(' ');
}
