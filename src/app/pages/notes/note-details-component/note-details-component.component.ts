import { Component, computed, inject } from '@angular/core';
import { note } from '../../../interfaces/notes/note';
import { ActivatedRoute } from '@angular/router';
import { toSignal } from '@angular/core/rxjs-interop';
import { NoteService } from '../../../services/notes/note.service';

@Component({
  selector: 'app-note-details-component',
  imports: [],
  templateUrl: './note-details-component.component.html',
  styleUrl: './note-details-component.component.css',
})
export class NoteDetailsComponentComponent {
  // note$ = signal<note | undefined>(undefined);
  //noteDetails: note | undefined;
  _note = inject(NoteService);
  route = inject(ActivatedRoute);

  readonly id = computed(() => this.route.snapshot.paramMap.get('id'));
  // note = toSignal(this._note.getNoteById(this.id()));

  noteDetails = toSignal(this._note.getNoteById(this.id()));
}
