// Type definitions for easy-c-loggr
// Definitions by: MarcDev

export = Logger;

declare interface LoggerOptions {
  formattedDate?: boolean;
  formatLanguage?: string;
}

declare interface PrefixOptions {
  error?: string;
  log?: string;
  success?: string;
  warn?: string;
  hint?: string;
}

declare class Logger {
  constructor(options: LoggerOptions);

  error(msg: string): void;
  log(msg: string): void;
  success(msg: string): void;
  warn(msg: string): void;
  hint(msg: string): void;

  setPrefixes(options: PrefixOptions): void;
}
