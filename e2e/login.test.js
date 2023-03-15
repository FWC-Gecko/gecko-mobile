describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  beforeEach(async () => {
    await device.reloadReactNative();
  });

  it('Should be login screen', async () => {
    await expect(element(by.id('signInLabel'))).toBeVisible();
    await expect(element(by.id('emailInput'))).toBeVisible();
    await expect(element(by.id('passwordInput'))).toBeVisible();
    await expect(element(by.id('loginButton'))).toBeVisible();
  });

  it('Should be home screen', async () => {
    await element(by.id('emailInput')).typeText('umamlikeyou@gmail.com');
    await element(by.id('passwordInput')).typeText('asdfasdf');
    // await element(by.id('loginButton')).tap({x: 5, y: 10});
    // await expect(element(by.text('Coins'))).toBeVisible();
    // await expect(element(by.text('Watchlists'))).toBeVisible();
  });
});
