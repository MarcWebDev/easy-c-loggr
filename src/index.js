import color from 'ansi-colors';
import dayjs from 'dayjs';

function formatString(type) {
  switch (type) {
    case 'EN': {
      return dayjs().format('HH:MM:ss - MM/DD/YYYY');
    }
    case 'DE': {
      return dayjs().format('HH:MM:ss - DD.MM.YYYY');
    }
    default: {
      return dayjs().format();
    }
  }
}

export default class Logger {
  formattedDate = false;
  formatLanguage = 'EN';
  prefixes = {
    error: '',
    log: '',
    success: '',
    warn: '',
    hint: '',
  };

  constructor(options) {
    this.formattedDate = options.formattedDate;
    this.formatLanguage = options.formatLanguage;
  }

  // Color methods
  error(msg) {
    console.log(
      color.gray(
        `[${
          this.formattedDate
            ? formatString(this.formatLanguage)
            : formatString()
        }] `
      ),
      color.red(
        `${this.prefixes.error != '' ? this.prefixes.error + ' ' : ''}${msg}`
      )
    );
  }

  log(msg) {
    console.log(
      color.gray(
        `[${
          this.formattedDate
            ? formatString(this.formatLanguage)
            : formatString()
        }] `
      ),
      color.white(
        `${this.prefixes.log != '' ? this.prefixes.log + ' ' : ''}${msg}`
      )
    );
  }

  success(msg) {
    console.log(
      color.gray(
        `[${
          this.formattedDate
            ? formatString(this.formatLanguage)
            : formatString()
        }] `
      ),
      color.green(
        `${
          this.prefixes.success != '' ? this.prefixes.success + ' ' : ''
        }${msg}`
      )
    );
  }

  warn(msg) {
    console.log(
      color.gray(
        `[${
          this.formattedDate
            ? formatString(this.formatLanguage)
            : formatString()
        }] `
      ),
      color.yellow(
        `${this.prefixes.warn != '' ? this.prefixes.warn + ' ' : ''}${msg}`
      )
    );
  }

  hint(msg) {
    console.log(
      color.gray(
        `[${
          this.formattedDate
            ? formatString(this.formatLanguage)
            : formatString()
        }] `
      ),
      color.blueBright(
        `${this.prefixes.hint != '' ? this.prefixes.hint + ' ' : ''}${msg}`
      )
    );
  }

  // Configuration methods
  setPrefixes(options) {
    this.prefixes.error = options.error;
    this.prefixes.log = options.log;
    this.prefixes.success = options.success;
    this.prefixes.warn = options.warn;
    this.prefixes.hint = options.hint;
  }
}
