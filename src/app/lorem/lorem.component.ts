import { Component, OnInit } from '@angular/core';

declare var $: any

@Component({
  selector: 'lorem',
  templateUrl: './lorem.component.html',
  styleUrls: ['./lorem.component.scss']
})
export class LoremComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    openModal(name: string) {
        var name = '#' + name
        $(name).modal({
            keyboard: false,
            backdrop: 'static'
        })
        $(name).modal('show')
    }

}
