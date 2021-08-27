import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CanlederComponent } from './canleder.component';

describe('CanlederComponent', () => {
  let component: CanlederComponent;
  let fixture: ComponentFixture<CanlederComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CanlederComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CanlederComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
