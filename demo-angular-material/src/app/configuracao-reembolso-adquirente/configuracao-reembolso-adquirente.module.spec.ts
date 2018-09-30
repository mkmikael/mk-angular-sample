import { ConfiguracaoReembolsoAdquirenteModule } from './configuracao-reembolso-adquirente.module';

describe('ConfiguracaoReembolsoAdquirenteModule', () => {
  let configuracaoReembolsoAdquirenteModule: ConfiguracaoReembolsoAdquirenteModule;

  beforeEach(() => {
    configuracaoReembolsoAdquirenteModule = new ConfiguracaoReembolsoAdquirenteModule();
  });

  it('should create an instance', () => {
    expect(configuracaoReembolsoAdquirenteModule).toBeTruthy();
  });
});
