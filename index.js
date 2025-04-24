// // const scrape = require("website-scraper");
// import scrape from "website-scraper";

// const base_url = "https://modinatheme.com/html/quantech-html/";
// scrape({
//   urls: [
//     `${base_url}`, // Will be saved with default filename 'index.html'
//     // {
//     //   url: `${base_url}/history-of-dpr/`,
//     //   filename: "history-of-dpr.html",
//     // },
//     // {
//     //   url: `${base_url}/value-statement/`,
//     //   filename: "value-statement.html",
//     // },
//   ],
//   // urls: ["https://www.nuprc.gov.ng/index.php"],
//   directory: "./scraped-website",
//   subdirectories: [
//     {
//       directory: "img",
//       extensions: [".jpg", ".png", ".svg"],
//     },
//     {
//       directory: "js",
//       extensions: [".js"],
//     },
//     {
//       directory: "css",
//       extensions: [".css"],
//     },
//     {
//       directory: "fonts",
//       extensions: [".woff", ".ttf"],
//     },
//   ],
//   sources: [
//     {
//       selector: "img",
//       attr: "src",
//     },
//     {
//       selector: 'link[rel="stylesheet"]',
//       attr: "href",
//     },
//     {
//       selector: "script",
//       attr: "src",
//     },
//   ],
// })
//   .then(function (result) {
//     // Outputs HTML
//     // console.log(result);
//     console.log("Content succesfully downloaded");
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

import Cloudflare from "cloudflare";

// Automatically fetches more pages as needed.
// for await (const databaseRawResponse of client.d1.database.raw(
//   "14d5d10d-843c-419b-bb71-0bbb2829b696",
//   {
//     account_id: "023e105f4ecef8ad9ca31a8372d0c353",
//     sql: "SELECT * FROM Customers;",
//   }
// )) {
//   console.log(databaseRawResponse.meta);
// }
// const databaseRawResponse = await client.d1.database.raw(
//   "14d5d10d-843c-419b-bb71-0bbb2829b696",
//   {
//     account_id: "023e105f4ecef8ad9ca31a8372d0c353",
//     sql: "SELECT * FROM Customers;",
//   }
// );
// console.log(databaseRawResponse.meta);
// console.log(databaseRawResponse.result);
// console.log(databaseRawResponse.result[0].rows);
// console.log(databaseRawResponse.result[0].rows[0]);
// console.log(databaseRawResponse.result[0].rows[0].length);
// console.log(databaseRawResponse.result[0].rows[0][0]);
// console.log(databaseRawResponse.result[0].rows[0][1]);

const client = new Cloudflare({
  apiToken: "AoN-Yf6InClh2Y-A8y9iYvyRARcdyykCu9RgUKWN", // Replace with your actual API token from Cloudflare dashboard
});

const zones = await client.d1.database.list({
  account_id: "023e105f4ecef8ad9ca31a8372d0c353",
});

console.log(zones);
