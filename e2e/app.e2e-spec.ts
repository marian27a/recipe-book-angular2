import { Angular4SPAPage } from './app.po';

describe('angular4-spa App', function() {
  let page: Angular4SPAPage;

  beforeEach(() => {
    page = new Angular4SPAPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
