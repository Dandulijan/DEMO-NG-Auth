import { Component, effect, signal } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { Router, RouterLink } from '@angular/router';
import { note } from '../../../interfaces/notes/note';
import { NoteService } from '../../../services/notes/note.service';

@Component({
  selector: 'app-notes-component',
  imports: [RouterLink],
  templateUrl: './notes-component.component.html',
  styleUrl: './notes-component.component.css',
})
export class NotesComponentComponent {
  $NoteList = signal<note[]>([]);
  constructor(
    private _auth: AuthService,
    private router: Router,
    private note: NoteService
  ) {
    effect(() => {
      this.note.getAllNotes().subscribe({
        next: (res) => {
          console.log('im retrieving notes');
          this.$NoteList.set(res);
        },
        error: () => {
          console.error('Failed to load users');
        },
      });
    });
  }

  // goToNote(noteId: string) {
  //   this.note.getNoteById(noteId).subscribe({
  //     next: (res) => {
  //       this.router.navigate(['/notes/', noteId]);
  //     },
  //     error: () => {
  //       console.error('Failed to load note');
  //     },
  //   });
  // }
}
