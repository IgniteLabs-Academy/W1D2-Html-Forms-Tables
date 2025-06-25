const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('At least 6 labeled fields in the form', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const form = document.querySelector('form');
  // This test checks: At least 6 labeled fields in the form
  const labels = form ? form.querySelectorAll('label') : [];
  expect(labels.length).toBeGreaterThanOrEqual(6);
});