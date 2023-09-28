/*
 * @Author: Ayan
 * @Date: 2023-09-28 11:29:23
 * @LastEditors: Ayan
 * @LastEditTime: 2023-09-28 11:46:51
 * @Description: file not
 */
export const moduleFileExtensions = ['vue', 'js', 'ts'];
export const preset = 'ts-jest';
export const testEnvironment = 'jsdom';
export const transform = {
  '^.+\\.vue$': 'vue-jest',
  '^.+\\.ts$': 'ts-jest' // ts 文件用 ts-jest 转换
};
export const testRegex = '(/__tests__/.*|(\\.|/)(test|spec))\\.(ts)$';
