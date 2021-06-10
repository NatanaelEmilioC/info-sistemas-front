import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoListFormComponent } from './veiculo-list-form.component';

describe('VeiculoListFormComponent', () => {
  let component: VeiculoListFormComponent;
  let fixture: ComponentFixture<VeiculoListFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoListFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoListFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
