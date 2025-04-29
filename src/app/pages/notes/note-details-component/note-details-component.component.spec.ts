import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoteDetailsComponentComponent } from './note-details-component.component';

describe('NoteDetailsComponentComponent', () => {
  let component: NoteDetailsComponentComponent;
  let fixture: ComponentFixture<NoteDetailsComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NoteDetailsComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoteDetailsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
