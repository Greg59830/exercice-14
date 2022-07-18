import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  projectForm: FormGroup = new FormGroup({
    'projectName': new FormControl(null, [Validators.required, this.forbiddenNames.bind(this)]),
    'userMail': new FormControl(null, [Validators.email, Validators.required]),
    'projectStatus': new FormControl("critical", Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log(this.projectForm)
  }

  forbiddenNames(control: FormControl): { [s: string]: boolean } | null {
    if (control.value === "Test") return { 'forbiddenName': true };
    return null;
  }

}
