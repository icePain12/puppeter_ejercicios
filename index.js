const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.amazon.com.mx/');

  // Realizar la busqueda
  await page.type('#twotabsearchtextbox', 'intel core i7 11700k');
  await page.click('.nav-search-submit input');
  await page.waitForSelector('[data-component-type=s-search-result]');

  // Seleccionar el primer producto 
  const productLink = await page.evaluate(() => 
  document.querySelector('[data-component-type=s-search-result] h2 a').href
);
await page.goto(productLink);
  
  // Tomar captura de pantalla
  await page.screenshot({path: 'captura.png', fullPage: true});
  
  // exportar a pdf
  await page.pdf({path: 'procesador.pdf', format: 'A4'});
  
  await browser.close();
})();