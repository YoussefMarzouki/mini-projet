import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FmenuComponent } from './fmenu.component';

describe('FmenuComponent', () => {
  let component: FmenuComponent;
  let fixture: ComponentFixture<FmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FmenuComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
