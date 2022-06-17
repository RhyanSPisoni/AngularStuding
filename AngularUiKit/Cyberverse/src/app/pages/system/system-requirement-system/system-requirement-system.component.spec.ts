import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SystemRequirementSystemComponent } from './system-requirement-system.component';

describe('SystemRequirementSystemComponent', () => {
  let component: SystemRequirementSystemComponent;
  let fixture: ComponentFixture<SystemRequirementSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SystemRequirementSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SystemRequirementSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
