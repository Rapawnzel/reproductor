import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { PlayerBarComponent } from './player/player.component';
import { SongListComponent } from './song-list/song-list.component';
import { DataService } from './service/data.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ PlayerBarComponent, SongListComponent],
  providers: [DataService],
  bootstrap:    [ PlayerBarComponent ]
})
export class AppModule { }
