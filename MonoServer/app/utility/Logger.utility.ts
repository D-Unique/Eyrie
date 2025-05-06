// app/utility/Logger.ts
import fs from 'fs';
import path from 'path';
import chalk from 'chalk';

enum LogLevel {
  INFO = 'INFO',
  WARNING = 'WARNING',
  ERROR = 'ERROR',
  CRITICAL = 'CRITICAL',
}

const logDir = path.join('./app/logs');
if (!fs.existsSync(logDir)) {
  fs.mkdirSync(logDir, { recursive: true });
}

const logFile = path.join(logDir, 'app.log');

function formatMessage(level: LogLevel, message: string): string {
  const timestamp = new Date().toISOString();
  return `[${timestamp}] [${level}] ${message}`;
}

function colorize(level: LogLevel, message: string): string {
  switch (level) {
    case LogLevel.INFO:
      return chalk.blue(message);
    case LogLevel.WARNING:
      return chalk.yellow(message);
    case LogLevel.ERROR:
      return chalk.red(message);
    case LogLevel.CRITICAL:
      return chalk.bgRed.white.bold(message);
    default:
      return message;
  }
}

function writeLog(level: LogLevel, message: string): void {
  const formatted = formatMessage(level, message);
  console.log(colorize(level, formatted)); // Colored console log
  fs.appendFile(logFile, formatted + '\n', err => {
    if (err) console.error(chalk.red('Failed to write to log file:'), err);
  });
}

export const Logger = {
  info: (msg: string) => writeLog(LogLevel.INFO, msg),
  warning: (msg: string) => writeLog(LogLevel.WARNING, msg),
  error: (msg: string) => writeLog(LogLevel.ERROR, msg),
  critical: (msg: string) => writeLog(LogLevel.CRITICAL, msg),
};
