const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({headless:false});
  const page = await browser.newPage();
  await page.goto('https://www.mercadolibre.com.mx/');
  

  // Escribe un texto en la barra de búsqueda
  
  const barra_de_Busqueda = await page.$('input[id="cb1-edit"]');
   // o tambien podria ser
   //  por clase
   // usando input class:
  // const barra_de_Busqueda = await page.$('input[class="nav-search-input"]');
   // o
   // por nombre
   // usando input name
  // const barra_de_Busqueda = await page.$('input[name="as_word"]');
  await barra_de_Busqueda.type('iPhone');

  // Toma una captura de pantalla
  await page.screenshot({ path: './3_captura_escribirBarraBusqueda/mercadolibre.png' });
  await page.pdf({path:'./3_captura_escribirBarraBusqueda/mercadolibre.pdf'});
  await browser.close();
})();