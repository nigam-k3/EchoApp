import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetInToComponent } from './get-in-to.component';

describe('GetInToComponent', () => {
  let component: GetInToComponent;
  let fixture: ComponentFixture<GetInToComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetInToComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GetInToComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
