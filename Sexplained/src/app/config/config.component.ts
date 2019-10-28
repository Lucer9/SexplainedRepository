import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-config',
  templateUrl: './config.component.html',
  styleUrls: ['./config.component.scss']
})
export class ConfigComponent implements OnInit {

  public lenguaje = 'en';

  constructor( private translate: TranslateService ) {
    this.translate.setDefaultLang(this.lenguaje);
  }

  ngOnInit() {
  }
    
    public cambiarLenguaje(lang){
    this.lenguaje = lang;
    this.translate.use(lang);
  }

}
