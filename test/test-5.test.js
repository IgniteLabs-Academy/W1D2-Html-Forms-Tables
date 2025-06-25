const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');


test('Each form field has a corresponding label', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  const form = document.querySelector('form');
  // This test checks: Each form field has a corresponding label
  if (form) {
    const inputs = form.querySelectorAll('input, textarea, select');
    inputs.forEach(input => {
      const id = input.getAttribute('id');
      // Look for a label with for attribute matching input id
      const label = id ? form.querySelector(`label[for="${id}"]`) : null;
      expect(label).not.toBeNull();
    });
  }
});
