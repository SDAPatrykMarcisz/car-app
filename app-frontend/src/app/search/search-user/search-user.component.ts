import {Component, OnInit} from '@angular/core';
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Car} from "@app/_models/task/car";
import {ClientService} from "@app/_services/client.service";
import {PersonDetails} from "@app/_models/task";

@Component(
  {
    selector: 'search-user',
    templateUrl: 'search-user.component.html',
    styleUrls: ['search-user.component.scss']
  }
)
export class SearchUserComponent implements OnInit {

  searchForm: FormGroup;
  searchResults: Array<PersonDetails>;

  constructor(
    private modal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private clientService: ClientService) {
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
    this.clientService.search(input).subscribe(
      response => {
        this.searchResults = response.clientsList;
      }
    )
  }

  selectClient(client: PersonDetails) {
    this.modal.close(client);
  }
}
