import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingupExpertComponent } from './singup-expert.component';

describe('SingupExpertComponent', () => {
  let component: SingupExpertComponent;
  let fixture: ComponentFixture<SingupExpertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingupExpertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingupExpertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
