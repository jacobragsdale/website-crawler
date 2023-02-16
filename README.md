# How to run on your machine
## Make sure git is installed on your machine
- open a terminal and run `git -v`
- if not installed, download git from their website `https://git-scm.com/downloads`
## Make sure nodejs is installed on your machine
- open a terminal and run `node -v`
- if not installed, download nodejs from their website `https://nodejs.org/en/download/`
## Run the following commands in your terminal
- `git clone https://github.com/jacobragsdale/website-crawler.git`
- `cd website-crawler`
- `npm install`
### Open up the index.js file. Here you can set the url of the website you want to crawl and the filetypes that you want to look for. Once that is set, save the file can go back to your terminal.
### Run the following command in your terminal (make sure you are still in the same directory as index.js)
- `node index.js`
### It will take a few minutes to crawl the website. Once it is done, there should be a new file called 'url-list.txt' that will contain the list of webpages that you searched for.