import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IzquierdaComponent } from './izquierda.component';

describe('IzquierdaComponent', () => {
  let component: IzquierdaComponent;
  let fixture: ComponentFixture<IzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IzquierdaComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(IzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
