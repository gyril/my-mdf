import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfPresentationComponent } from './mdf-presentation.component';

describe('MdfPresentationComponent', () => {
  let component: MdfPresentationComponent;
  let fixture: ComponentFixture<MdfPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
