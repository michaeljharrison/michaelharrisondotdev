describe('Example test', () => {
  test('open app correctly', (browser) => {
    const main = browser.page.main()
    main.navigate()
    browser.end()
  })
})
