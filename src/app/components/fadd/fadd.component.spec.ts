import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaddComponent } from './fadd.component';

describe('FaddComponent', () => {
  let component: FaddComponent;
  let fixture: ComponentFixture<FaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaddComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
