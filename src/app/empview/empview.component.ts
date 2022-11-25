import { Component } from '@angular/core';

@Component({
  selector: 'app-empview',
  templateUrl: './empview.component.html',
  styleUrls: ['./empview.component.css']
})
export class EmpviewComponent {
  data:any=[
    {
      "name":"alvin",
      "designation":"engineer",
      "salary":100000
    },
    {
      "name":"akku",
      "designation":"engineer",
      "salary":20000
    },
    {
      "name":"arun",
      "designation":"analyst",
      "salary":50000
    },
    {
      "name":"aiswarya",
      "designation":"engineer",
      "salary":40000
    },
    {
      "name":"shon",
      "designation":"engineer",
      "salary":20000
    }
  ]


}
