import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdquirenteShowComponent } from './adquirente-show.component';

describe('AdquirenteShowComponent', () => {
  let component: AdquirenteShowComponent;
  let fixture: ComponentFixture<AdquirenteShowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdquirenteShowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdquirenteShowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
