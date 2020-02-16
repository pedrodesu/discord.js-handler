import { red, green } from 'chalk';

/**
 * Specify the error log method for accessibility
 * @param message Message that will be formatted by chalk
 * @returns Coloured error message
 */
export const errorLog = (message: string): string => red(message);

/**
 * Specify the success log method for accessibility
 * @param message Message that will be formatted by chalk
 * @returns Coloured success message
 */
export const successLog = (message: string): string => green(message);
