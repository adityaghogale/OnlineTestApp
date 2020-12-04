import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueDisplayComponent } from './que-display.component';

describe('QueDisplayComponent', () => {
  let component: QueDisplayComponent;
  let fixture: ComponentFixture<QueDisplayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueDisplayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueDisplayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
