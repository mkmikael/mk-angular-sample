import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracaoReembolsoAdquirenteShowComponent } from './configuracao-reembolso-adquirente-show.component';

describe('ConfiguracaoReembolsoAdquirenteShowComponent', () => {
  let component: ConfiguracaoReembolsoAdquirenteShowComponent;
  let fixture: ComponentFixture<ConfiguracaoReembolsoAdquirenteShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfiguracaoReembolsoAdquirenteShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracaoReembolsoAdquirenteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
