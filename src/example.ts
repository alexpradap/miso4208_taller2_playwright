const { firefox } = require('playwright');

(async () => {
  const browser = await firefox.launch({headless: true});
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto('https://www.example.com/');
  await page.screenshot({ path: `example.png` });
  const dimensions = await page.evaluate(() => {
    return {
      width: document.documentElement.clientWidth,
      height: document.documentElement.clientHeight,
      deviceScaleFactor: window.devicePixelRatio
    }
  });
  console.log(dimensions);

  await browser.close();
})();