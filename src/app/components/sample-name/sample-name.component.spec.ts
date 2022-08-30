import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleNameComponent } from './sample-name.component';

describe('SampleNameComponent', () => {
  let component: SampleNameComponent;
  let fixture: ComponentFixture<SampleNameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleNameComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SampleNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
