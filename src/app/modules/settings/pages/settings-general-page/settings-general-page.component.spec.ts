import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsGeneralPageComponent } from './settings-general-page.component';

describe('SettingsGeneralPageComponent', () => {
  let component: SettingsGeneralPageComponent;
  let fixture: ComponentFixture<SettingsGeneralPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SettingsGeneralPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsGeneralPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
