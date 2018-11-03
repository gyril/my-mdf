import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MdfFooterComponent } from './mdf-footer.component';

describe('MdfFooterComponent', () => {
  let component: MdfFooterComponent;
  let fixture: ComponentFixture<MdfFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MdfFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MdfFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
