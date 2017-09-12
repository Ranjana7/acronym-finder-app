import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcronymsComponent } from './acronyms.component';

describe('AcronymsComponent', () => {
  let component: AcronymsComponent;
  let fixture: ComponentFixture<AcronymsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcronymsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
