import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UimenuComponent } from './uimenu.component';

describe('UimenuComponent', () => {
  let component: UimenuComponent;
  let fixture: ComponentFixture<UimenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UimenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UimenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
