import { Note } from './Note';
import { Message } from './Message';

export interface NotesApp {
  title: string
  message: Message
  grid: boolean
  search: string
  note: Note
  notes: Note[]
}