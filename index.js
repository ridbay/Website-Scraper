const scrape = require('website-scraper');

scrape({
    urls: [
        'http://balogunridwa.com/index.html', // Will be saved with default filename 'index.html'
        {
            url: 'http://balogunridwa.com/about.html',
            filename: 'about.html'
        },
        {
            url: 'http://balogunridwa.com/services.html',
            filename: 'services.html'
        },
        {
            url: 'http://balogunridwa.com/services-details.html',
            filename: 'farm.html'
        },
        {
            url: 'http://balogunridwa.com/contact.html',
            filename: 'contact.html'
        }
    ],
    directory: './scraped-website',
    subdirectories: [
        {
            directory: 'img',
            extensions: ['.jpg', '.png', '.svg']
        },
        {
            directory: 'js',
            extensions: ['.js']
        },
        {
            directory: 'css',
            extensions: ['.css']
        },
        {
            directory: 'fonts',
            extensions: ['.woff','.ttf']
        }
    ],
    sources: [
        {
            selector: 'img',
            attr: 'src'
        },
        {
            selector: 'link[rel="stylesheet"]',
            attr: 'href'
        },
        {
            selector: 'script',
            attr: 'src'
        }
    ]
}).then(function (result) {
    // Outputs HTML 
    // console.log(result);
    console.log("Content succesfully downloaded");
}).catch(function (err) {
    console.log(err);
});