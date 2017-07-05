import { SteelKIWIPage } from './app.po';

describe('steel-kiwi App', () => {
  let page: SteelKIWIPage;

  beforeEach(() => {
    page = new SteelKIWIPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
