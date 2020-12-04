import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestFunComponent } from './test-fun.component';

describe('TestFunComponent', () => {
  let component: TestFunComponent;
  let fixture: ComponentFixture<TestFunComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestFunComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestFunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
