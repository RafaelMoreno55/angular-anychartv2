import { AnychartAngular4Page } from './app.po';

describe('anychart-angular4 App', () => {
  let page: AnychartAngular4Page;

  beforeEach(() => {
    page = new AnychartAngular4Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
