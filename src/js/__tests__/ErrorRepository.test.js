/* eslint linebreak-style: ["error", "windows"] */

import ErrorRepository from '../ErrorRepository';

describe('ErrorRepository class', () => {
  let errorRepo;

  beforeEach(() => {
    errorRepo = new ErrorRepository();
    errorRepo.addError(404, 'Page not found');
    errorRepo.addError(500, 'Internal server error');
  });

  it('Должен переводить код ошибки в описание', () => {
    expect(errorRepo.translate(404)).toEqual('Page not found');
    expect(errorRepo.translate(500)).toEqual('Internal server error');
  });

  it('должен возвращать "Unknown error" для неизвестного кода ошибки', () => {
    expect(errorRepo.translate(403)).toEqual('Unknown error');
  });
});
