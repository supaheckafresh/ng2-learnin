import { Injectable } from '@angular/core';

@Injectable()
export class Tool {

  /**
   * String normalization
   *
   * @param {string} str
   * @param {string} delimiter
   * @returns {string}
   */
  static normalize(str: string, delimiter: string): string {

    if (!str) {
      return '';
    }

    return str
      .toString()
      .trim()
      .replace(/\s\s+|[^a-zA-Z0-9]+/g, delimiter ? delimiter : ' ')
      .toLowerCase();
  }

  /**
   * Return a promisified function which will invoke the resolve callback on the return value,
   * or invoke the reject callback on an error.
   *
   * @param {Function} func
   * @return {Function}
   */
  static promisify(func: Function): () => any {
    return function (...args) {
      return new Promise((resolve, reject) => {
        try {
          return resolve(func(...args));
        } catch (err) {
          return reject(err);
        }
      });
    };
  }

  /**
   * Return a 0 or 1-based array of numbers for a range.
   *
   * @param length
   * @param zeroBased
   * @return {Array<number>}
   */
  static range(length: number, zeroBased: boolean = true): Array<number> {
    const arr = Array.from({ length }, (val, key) => key);

    // for 1-based array:
    if (!zeroBased) {
      arr.shift();
      arr.push(length);
    }

    return arr;
  }
}
