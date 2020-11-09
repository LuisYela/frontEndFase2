import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablaPuestosComponent } from './tabla-puestos.component';

describe('TablaPuestosComponent', () => {
  let component: TablaPuestosComponent;
  let fixture: ComponentFixture<TablaPuestosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablaPuestosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablaPuestosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
