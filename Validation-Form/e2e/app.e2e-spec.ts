import { CustomValidationFormPage } from './app.po';

describe('custom-validation-form App', function() {
  let page: CustomValidationFormPage;

  beforeEach(() => {
    page = new CustomValidationFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
