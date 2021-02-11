import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-documentos',
  templateUrl: './documentos.component.html',
  styleUrls: ['./documentos.component.css']
})
export class DocumentosComponent implements OnInit {

  logo = 'assets/images/pdflogo.png';
  constructor() { }

  ngOnInit(): void {
  }

}
