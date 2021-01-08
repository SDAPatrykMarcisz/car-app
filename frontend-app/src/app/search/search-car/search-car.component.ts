import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {CarService} from "@app/_services/car.service";
import {Car} from "@app/_models/task/car";

@Component(
  {
    selector: 'search-car',
    templateUrl: 'search-car.component.html',
    styleUrls: ['search-car.component.scss']
  }
)
export class SearchCarComponent implements OnInit {

  searchForm: FormGroup;
  searchResults: Array<Car>;

  constructor(
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private carService: CarService) {
  }

  ngOnInit(): void {
    this.initForms();
  }

  close() {
    this.modal.close();
  }

  get form() {
    return this.searchForm.controls;
  }

  private initForms() {
    this.searchForm = this.formBuilder.group({
        searchInput: ['', Validators.required],
      }
    );
  }

  search(input: any) {
    this.carService.search(input).subscribe(
      response => {
        this.searchResults = response.carList;
      }
    )
    console.log(input);
  }

  selectCar(car: Car) {
    this.modal.close(car);
  }
}
