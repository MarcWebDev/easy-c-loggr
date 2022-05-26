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

export class Logger {
  formattedDate = false;
  formatLanguage = 'EN';

  constructor(formattedDate, formatLanguage) {
    this.formattedDate = formattedDate;
    this.formatLanguage = formatLanguage;
  }

  error(msg) {
    console.log(
      color.gray(
        `[${
          this.formattedDate
            ? formatString(this.formatLanguage)
            : formatString()
        }] `
      ),
      color.red(msg)
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
      color.white(msg)
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
      color.green(msg)
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
      color.yellow(msg)
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
      color.blueBright(msg)
    );
  }
}
