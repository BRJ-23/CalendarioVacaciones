const { test, expect } = require('@playwright/test');

test('La vista web carga sin errores de consola', async ({ page }) => {
  const consoleErrors = [];

  // 1. Escuchar los errores comunes
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(`[Error de Consola]: ${msg.text()}`);
    }
  });

  // 2. Escuchar excepciones graves
  page.on('pageerror', exception => {
    consoleErrors.push(`[Excepción de Página]: ${exception.message}`);
  });

  // 3. NAVEGAR DIRECTAMENTE A ARCHIVO HTML
  const response = await page.goto('/index.html');

  // 4. Comprobar que el archivo existe y cargó bien
  expect(response.status()).toBe(200);

  // 5. Comprobar que no hubo errores en la consola
  expect(consoleErrors).toHaveLength(0);
});