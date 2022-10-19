//boiler plate for pupeeter
const puppeteer = require('puppeteer');

(async () => {
    //ask for username 
    const username = await prompt('Enter username: ');
    console.log("Scraping: " + username);
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(`https://neo-letter.web.app/profile/${username}`);


    try {
        await page.waitForSelector('h1', { timeout: 3000 });
        const headlines = await page.evaluate(() => Array.from(document.querySelectorAll('h1'), element => element.textContent));
        headlines.pop();
        headlines.pop();

        var dict = {};
        for (var i = 0; i < headlines.length; i++) {
            if (i % 2 == 0) {
                dict[headlines[i]] = headlines[i + 1];
            }
        }
        console.log(dict);
        await browser.close();
        process.exit();

    } catch (error) {
        //add red text to console
        console.log('\x1b[31m%s\x1b[0m', 'User not found');
        await browser.close();
        process.exit();
    }
})();

function prompt(question) {
    var stdin = process.stdin, stdout = process.stdout;

    stdin.resume();
    stdout.write(question);

    return new Promise(resolve => stdin.once('data', data => resolve(data.toString().trim())));
}