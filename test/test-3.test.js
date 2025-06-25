const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

test('Table exists with at least 3 rows', () => {
  const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
  const dom = new JSDOM(html);
  const document = dom.window.document;
  // This test checks: Table exists with at least 3 rows
  const table = document.querySelector('table');
  expect(table).not.toBeNull();
  if (table) {
    const rows = table.querySelectorAll('tr');
    expect(rows.length).toBeGreaterThanOrEqual(3);
  }
});