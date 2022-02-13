import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  public social_networks = [
    {
      name :"LinkedIn",
      icon : "linkedin",
      link: "https://www.linkedin.com/in/raveloswaldo/"
    },
    {
      name :"Facebook",
      icon : "facebook",
      link: "https://www.facebook.com/ozzy217"

    },
    {
      name :"GitHub",
      icon : "github",
      link: "https://github.com/Ravelos"
    }

  ]


  constructor() { }

  ngOnInit(): void {
  }

}
