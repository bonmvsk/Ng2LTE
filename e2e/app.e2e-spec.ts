import { Ng2LTEPage } from './app.po';

describe('ng2-lte App', () => {
  let page: Ng2LTEPage;

  beforeEach(() => {
    page = new Ng2LTEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
