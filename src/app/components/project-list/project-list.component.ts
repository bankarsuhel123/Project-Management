import { Component, OnInit } from '@angular/core';
import { Object } from 'src/app/modules/data';
import { UserServiceService } from 'src/app/services/user-service.service';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.scss']
})
export class ProjectListComponent implements OnInit {
  userData: Object[] = []
  start: string | undefined
  close: string | undefined
  cancel: string | undefined
  constructor(private uService: UserServiceService) { }

  ngOnInit(): void {
    this.getUserData()
  }
  getUserData() {
    this.uService.getUserdata().subscribe((result) => {
      this.userData = result;
    })
  }
  // startButton() {
  //   this.uService.getUserdata().subscribe((data) => {
  //     this.start = 
  //   })
  // }
  closeButton() {

  }
  cancelButton() {

  }

}
