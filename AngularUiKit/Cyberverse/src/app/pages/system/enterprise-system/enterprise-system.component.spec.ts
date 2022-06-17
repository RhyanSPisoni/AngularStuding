import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterpriseSystemComponent } from './enterprise-system.component';

describe('EnterpriseSystemComponent', () => {
  let component: EnterpriseSystemComponent;
  let fixture: ComponentFixture<EnterpriseSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnterpriseSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterpriseSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
