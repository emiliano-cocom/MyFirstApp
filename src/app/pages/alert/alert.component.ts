import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.css']
})
export class AlertComponent implements OnInit {

  @Input('text') message: string;
  @Input() subTitle: string;

  @Output() clickAlert: EventEmitter<string>;

  constructor() {
    this.message = 'Mensaje de la alerta por defecto';
    this.subTitle = 'Valor del subtitulo';

    this.clickAlert = new EventEmitter();
  }

  ngOnInit(): void {
    console.log(this.message);
  }

  onClick() {
    this.clickAlert.emit('La alerta ha sido pulsada');
  }

}
