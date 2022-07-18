import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WelcomeOverlayComponent } from './header.component';

describe('HeaderComponent', () => {
  let component: WelcomeOverlayComponent;
  let fixture: ComponentFixture<WelcomeOverlayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WelcomeOverlayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WelcomeOverlayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
