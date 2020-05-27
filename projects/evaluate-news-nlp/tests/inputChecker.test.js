const checkForUrl = require('../src/client/js/inputChecker')

test('send misformed url which should result in an alert', () => {
    expect(checkForUrl.checkForUrl("www")).toBe(false);
});