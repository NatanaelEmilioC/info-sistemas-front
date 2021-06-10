import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VeiculoListItemComponent } from './veiculo-list-item.component';

describe('VeiculoListItemComponent', () => {
  let component: VeiculoListItemComponent;
  let fixture: ComponentFixture<VeiculoListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VeiculoListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VeiculoListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
