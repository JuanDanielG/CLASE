import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DerechaComponent } from './derecha.component';

describe('DerechaComponent', () => {
  let component: DerechaComponent;
  let fixture: ComponentFixture<DerechaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DerechaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DerechaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
