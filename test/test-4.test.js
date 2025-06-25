const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Semantic tags: header, section, and footer exist', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Semantic tags
  expect(document.querySelector('header')).not.toBeNull();
  expect(document.querySelector('section')).not.toBeNull();
  expect(document.querySelector('footer')).not.toBeNull();
});
