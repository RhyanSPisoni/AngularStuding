import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibraryClientPageComponent } from './library-client-page.component';

describe('LibraryClientPageComponent', () => {
  let component: LibraryClientPageComponent;
  let fixture: ComponentFixture<LibraryClientPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibraryClientPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LibraryClientPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
