import { Injectable } from '@angular/core';
import { NgbModal, NgbModalOptions, NgbActiveModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Component, Input, OnInit, ApplicationRef, ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css']
})
export class DialogComponent implements OnInit {
  @Input() title;
  @Input() message;

  constructor(public activeModal: NgbActiveModal, public changeRef: ChangeDetectorRef) {
    console.log("DialogComponent construct");
  }

  ngOnInit() {
    console.log("DialogComponent init");
  }
}

@Injectable()
export class DialogService {
  constructor(private modalService: NgbModal) { }

  public confirm() {
    const modalRef = this.modalService.open(DialogComponent);
    modalRef.componentInstance.name = "Discard Changes?";
    modalRef.componentInstance.message = "Are you sure you want to discard your changes?";
    modalRef.componentInstance.changeRef.markForCheck();
    return modalRef.result;
  }
}
