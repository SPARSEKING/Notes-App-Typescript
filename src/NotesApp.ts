import { Note } from './Note';
import { Message } from './Message';
import { Grid } from './Grid'; 

export interface NotesApp {
  title: string
  message: Message
  grid: Grid
  search: string
  note: Note
  notes: Note[]
}