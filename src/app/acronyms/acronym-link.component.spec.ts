import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AcronymLinkComponent } from './acronym-link.component';

describe('AcronymLinkComponent', () => {
  let component: AcronymLinkComponent;
  let fixture: ComponentFixture<AcronymLinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AcronymLinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcronymLinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
