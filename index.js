// const scrape = require("website-scraper");
import scrape from "website-scraper";

const base_url = "https://modinatheme.com/html/quantech-html/";
scrape({
  urls: [
    `${base_url}`, // Will be saved with default filename 'index.html'
    // {
    //   url: `${base_url}/history-of-dpr/`,
    //   filename: "history-of-dpr.html",
    // },
    // {
    //   url: `${base_url}/value-statement/`,
    //   filename: "value-statement.html",
    // },
  ],
  // urls: ["https://www.nuprc.gov.ng/index.php"],
  directory: "./scraped-website",
  subdirectories: [
    {
      directory: "img",
      extensions: [".jpg", ".png", ".svg"],
    },
    {
      directory: "js",
      extensions: [".js"],
    },
    {
      directory: "css",
      extensions: [".css"],
    },
    {
      directory: "fonts",
      extensions: [".woff", ".ttf"],
    },
  ],
  sources: [
    {
      selector: "img",
      attr: "src",
    },
    {
      selector: 'link[rel="stylesheet"]',
      attr: "href",
    },
    {
      selector: "script",
      attr: "src",
    },
  ],
})
  .then(function (result) {
    // Outputs HTML
    // console.log(result);
    console.log("Content succesfully downloaded");
  })
  .catch(function (err) {
    console.log(err);
  });
