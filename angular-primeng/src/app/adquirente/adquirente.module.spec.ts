import { AdquirenteModule } from './adquirente.module';

describe('AdquirenteModule', () => {
  let adquirenteModule: AdquirenteModule;

  beforeEach(() => {
    adquirenteModule = new AdquirenteModule();
  });

  it('should create an instance', () => {
    expect(adquirenteModule).toBeTruthy();
  });
});
