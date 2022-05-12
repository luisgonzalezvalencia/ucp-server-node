const { test, expect } = require('@playwright/test');

test('Obtener el titulo h1 y verificar que sea Todo List', async ({ page }) => {
  await page.goto('http://localhost:3000/todos');
  const title = page.locator('h1');
  await expect(title).toHaveText('Todo List');
});


test('Verificar que se exista el formulario y que su ruta sea addtodo', async ({ page }) => {
  await page.goto('http://localhost:3000/todos');
  const title = page.locator('form');
  await expect(title).toHaveAttribute('action', '/addtodo');
});


test('Verificar que esté el boton submit y que el value sea Add', async ({ page }) => {
  await page.goto('http://localhost:3000/todos');
  const title = page.locator('input[type="submit"]');
  await expect(title).toHaveValue('Add');
});