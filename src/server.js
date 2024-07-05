import 'dotenv/config';
import app from './app.js';

const server = app.listen(process.env.PORT, () => {
  console.log(
    'Server is running on http://localhost:' + process.env.PORT || 8800
  );
});

// Uncaught Exception
process.on('uncaughtException', err => {
  console.log(`Error : ${err.message}`);
  console.log(`Shutting down the server due to uncaught exception!`);
  process.exit(1);
});

// Unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
  console.log('Unhandled Rejection at:', promise, 'reason:', reason);
  console.log(`Shutting down the server due to unhandled promise rejection!`);

  server.close(() => {
    process.exit(1);
  });
});

// Warning
process.on('warning', warning => {
  console.warn(
    'Name: ',
    warning.name,
    'Message: ',
    warning.message,
    'Stack: ',
    warning.stack
  ); // Print the warning name
});
