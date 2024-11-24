import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FformComponent } from './fform.component';

describe('FformComponent', () => {
  let component: FformComponent;
  let fixture: ComponentFixture<FformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FformComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
