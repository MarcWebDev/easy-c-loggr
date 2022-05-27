// Type definitions for easy-c-loggr
// Definitions by: MarcDev

export = Logger;

declare class Logger {
  constructor(formattedDate?: boolean, formatLanguage?: string);

  error(msg: string): void;
  log(msg: string): void;
  success(msg: string): void;
  warn(msg: string): void;
  hint(msg: string): void;
}
