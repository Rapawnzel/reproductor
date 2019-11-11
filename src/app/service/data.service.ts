import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }
  playlistOne = [
      {
        "id": 1,
        "name": "Hurt Again",
        "artist": "Julia Michaels",
        "cover": "/assets/images/hurt-again.png",
        "src": "/assets/songs/hurt-again.mp3"
      },
      {
        "id": 2,
        "name": "We Are ...",
        "artist": "Noah Cyrus, MØ",
        "cover": "/assets/images/we-are.jpg",
        "src": "/assets/songs/we-are.mp3"
      },
      {
        "id": 3,
        "name": "Older",
        "artist": "Sasha Sloan",
        "cover": "/assets/images/older.jpg",
        "src": "/assets/songs/older.mp3"
      },
      {
        "id": 4,
        "name": "Worst In Me",
        "artist": "Julia Michaels",
        "cover": "/assets/images/worst-in-me.jpg",
        "src": "/assets/songs/worst-in-me.mp3"
      },
      {
        "id": 5,
        "name": "Memories",
        "artist": "Maroon 5",
        "cover": "/assets/images/memories.jpg",
        "src": "/assets/songs/memories.mp3"
      },
      {
        "id": 6,
        "name": "July",
        "artist": "Noah Cyrus",
        "cover": "/assets/images/july.jpg",
        "src": "/assets/songs/july.mp3"
      }
    ]
  }
