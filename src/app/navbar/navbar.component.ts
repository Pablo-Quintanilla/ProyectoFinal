import { SpeechService } from '../speech.service';
import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() public sidenavToggle = new EventEmitter();

  index: number;
  v: number = this.getVolume();
  speechData: any;
  html: string;
  constructor(private spk: SpeechService) { }

  ngOnInit(): void {
  }

  public onToggleSidenav = () => {
    this.sidenavToggle.emit();
  }

  start(){
    this.html = document.getElementById('toRead').textContent;
    this.spk.start(this.html);
  }
  pause(){
    this.spk.pause();
  }
  resume(){
    this.spk.resume();
  }

  getSpeechData(){    
    this.speechData = this.spk.speechData;
    //this.index = this.speechData.findIndex();
    console.log(this.speechData);
  }

  setVolume(v){
    this.spk.setVolume(v);
  }

  getVolume(){
    return this.spk.getVolume();
  }

  setLanguage(lang){
    this.spk.setLanguage(lang);
  }
}
