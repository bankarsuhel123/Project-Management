import { Component, OnInit } from '@angular/core';
import { category, department, divison, location, priority, project, status, type } from 'src/app/modules/project';
import { UserServiceService } from 'src/app/services/user-service.service';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { Object } from 'src/app/modules/data';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  reasonData: project[] = []
  typeData: type[] = []
  divisionData: divison[] = []
  categoryData: category[] = []
  priorityData: priority[] = []
  departmentData: department[] = []
  locationData: location[] = []
  statusData: status[] = []
  projectFrom!: FormGroup
  constructor(private uService: UserServiceService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.projectFrom = this.fb.group({
      projectName: [],
      reason: [],
      type: [],
      category: [],
      department: [],
      division: [],
      prioprity: [],
      location: [],
      startDate: [],
      endDate: [],
      status: []
    })
    this.getReasonData();
    this.gettypeData();
    this.getcategoryData();
    this.getdepartmentData();
    this.getdivisionData();
    this.getpriorityData();
    this.getlocationData()
  }
  gettypeData() {
    this.uService.gettypeData().subscribe((data) => {
      this.typeData = data
    })
  }
  getdivisionData() {
    this.uService.getDivisonData().subscribe((data) => {
      this.divisionData = data
    })
  }
  getcategoryData() {
    this.uService.getcategoryData().subscribe((data) => {
      this.categoryData = data
    })
  }
  getpriorityData() {
    this.uService.getPriorityData().subscribe((data) => {
      this.priorityData = data
    })
  }
  getdepartmentData() {
    this.uService.getDepartmentData().subscribe((data) => {
      this.departmentData = data
    })
  }
  getlocationData() {
    this.uService.getlocationData().subscribe((data) => {
      this.locationData = data
    })
  }
  getReasonData() {
    this.uService.getReasonData().subscribe((data) => {
      this.reasonData = data
    })
  }
  getStatusData() {
    this.uService.getStatusData().subscribe((data) => {
      this.statusData = data
    })
  }
  onSubmit(data: Object) {
    console.log(this.projectFrom.value)
    this.uService.saveProjectData(data).subscribe((result) => {
      console.log(result)
    })
  }

}
