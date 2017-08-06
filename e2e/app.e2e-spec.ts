import { ColmenaClonePage } from './app.po';

describe('colmena-clone App', () => {
  let page: ColmenaClonePage;

  beforeEach(() => {
    page = new ColmenaClonePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
