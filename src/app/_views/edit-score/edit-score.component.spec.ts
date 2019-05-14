import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditScoreComponent } from './edit-score.component';

describe('EditScoreComponent', () => {
  let component: EditScoreComponent;
  let fixture: ComponentFixture<EditScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
