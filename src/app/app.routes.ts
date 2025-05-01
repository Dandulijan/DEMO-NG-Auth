import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { RegisterComponent } from './pages/auth/register/register.component';
import { NotesComponentComponent } from './pages/notes/notes-component/notes-component.component';
import { NoteDetailsComponentComponent } from './pages/notes/note-details-component/note-details-component.component';
import { NewNoteComponent } from './pages/notes/new-note/new-note.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'notes', component: NotesComponentComponent },
  { path: 'notes/:id', component: NoteDetailsComponentComponent },
  { path: 'new', component: NewNoteComponent },

  { path: '**', redirectTo: '' },
];
