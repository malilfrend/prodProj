export type IMods = Record<string, string | boolean>

export function classNames(cls: string, mods: IMods, additional: string[]): string {
  return [
    cls,
    ...Object.entries(mods).filter(([clsNm, value]) => Boolean(value)).map(([clsNm, value]) => clsNm),
    ...additional,
  ].join(' ');
}
