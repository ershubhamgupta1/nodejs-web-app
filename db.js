// const sql = require('mssql');
// require('dotenv').config(); // Load .env file

// // Database configuration
// const config = {
//     user: process.env.DB_USER,
//     password: process.env.DB_PASSWORD,
//     server: process.env.DB_SERVER,
//     database: process.env.DB_NAME,
//     options: {
//         encrypt: true, // Use encryption
//         trustServerCertificate: false // Set to true if you are using self-signed certificates
//     }
// };

// // Function to connect to the database
// async function connectToDatabase() {
//   try {
//     // Create a connection pool
//     const pool = await sql.connect(config);

//     console.log('Connected to SQL Database');

//     // Use the pool to execute queries, etc.
//     // Example query
//     const result = await pool.request().query('SELECT * FROM Persons');
//     console.log(result.recordset);

//   } catch (err) {
//     console.error('Database connection failed:', err);
//   } finally {
//     // Close the connection
//     sql.close();
//   }
// }

// module.exports = {connectToDatabase}

// // Call the function
