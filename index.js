const SitemapGenerator = require('sitemap-generator');
const parser = require('xml2json')
const fs = require('fs')

// url of the website that you want to crawl
const websiteURL = 'https://eml.berkeley.edu';

// filetypes that you want to look for
const fileTypes = ['.pdf'];

let siteMapGenerator = SitemapGenerator(websiteURL, {stripQuerystring: false});

siteMapGenerator.on('done', () => {
    let jsonData = JSON.parse(parser.toJson(fs.readFileSync( 'sitemap.xml', 'utf8'), {}))['urlset']['url'];

    let urlList = [];
    jsonData.forEach(url => {if (fileTypes.some(type => url['loc'].includes(type))){urlList.push(url['loc'])}});

    const file = fs.createWriteStream('url-list.txt');
    urlList.forEach(url => { file.write(url + '\n'); });
    file.end();

    fs.unlinkSync('sitemap.xml');
});

siteMapGenerator.start();