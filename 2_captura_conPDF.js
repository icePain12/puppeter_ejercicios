// el primer paso para trabajar con puppeteer es crear una constante donde requeriremos puppeteer
const puppeteer = require('puppeteer');
// hay que crear una funcion asincrona con el formato
// (async () => { *tu_codigo* })();
(async () => {
  // este código crea una constante llamada navegador en donde estaremos abriendo nuestro navegador.
  // headless: false hará que el navegador sea visible, true lo hara invisible
  const navegador = await puppeteer.launch({headless:false});
  // este codigo crea una constante ventanilla donde crearemos la ventana de nuestro navegador.
  const ventanilla = await navegador.newPage();
  // ahora vamos a usar la funcion goto para indicarle a puppeter a que sitio ira nuestra ventanilla
  await ventanilla.goto('https://www.mercadolibre.com.mx/');
 
  // codigo para esperar 3 segundos antes de que se tome la captura de pantalla.
  await ventanilla.waitForTimeout(3000);
  // este código toma una captura de pantalla de la pagina principal de mercadolibre
  await ventanilla.screenshot({ path: './2_captura_conPDF/mercadolibre.jpg'});
  await ventanilla.pdf({path:'./2_captura_conPDF/mercadolibre.pdf',format:'A4'});
  // este codigo cierra el navegador
  await navegador.close();
})();