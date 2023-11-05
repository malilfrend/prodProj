import { classNames } from '../classNames';

describe('classNames', () => {
  it('return string with all params which was given', () => {
    const result = 'foo bar john fooBar';
    expect(classNames('foo', { bar: 'true', john: true }, ['fooBar'])).toEqual(
      result
    );
  });

  it('return class name without mod which has false value', () => {
    const result = 'foo john fooBar';
    expect(classNames('foo', { bar: false, john: true }, ['fooBar'])).toEqual(
      result
    );
  });

  it('return empty class name when all props empty', () => {
    const result = '';
    expect(classNames('', {}, [])).toEqual(result);
  });

  it('return class name without mod which has false value', () => {
    const result = 'fooBar';
    expect(classNames(undefined, { bar: undefined }, ['fooBar'])).toEqual(
      result
    );
  });
});
