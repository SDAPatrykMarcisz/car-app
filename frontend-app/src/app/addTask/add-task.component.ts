import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component(
  {
    selector: 'add-task',
    templateUrl: 'add-task.component.html',
    styleUrls: ['add-task.component.scss']
  }
)
export class AddTaskComponent implements OnInit {
  userDataForm: FormGroup;
  carDataForm: FormGroup;
  interviewForm: FormGroup;
  descriptionForm: FormGroup;

  submitted: boolean;
  error: string;

  constructor(
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.userDataForm = this.formBuilder.group({
        firstName: ['', Validators.required],
        lastName: ['', Validators.required],
        personalId: ['', Validators.required],
        phoneNumber: ['', Validators.required]
      }
    );

    this.carDataForm = this.formBuilder.group({
        registerNumber: ['', Validators.required],
        model: ['', Validators.required],
        mark: ['', Validators.required],
        vinNumber: ['', Validators.required]
      }
    );

    this.interviewForm = this.formBuilder.group({
        interviewTaskDescription: ['', Validators.required]
      }
    );

    this.descriptionForm = this.formBuilder.group({
        doneTaskDescription: ['', Validators.required]
      }
    );
  }


  close() {
    this.modal.close();
  }

  get form() {
    return this.userDataForm.controls;
  }

}
