import { Component } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    title = 'AngularTask1';

    constructor(private modalService: NgbModal,) {}
    closeResult ?: string;
    filterBlur ?: boolean;

    public modalOpen(content: any) {
        this.blurClass(true);
        this.modalService.open(content).result.then((result) => {
            this.closeResult = `Closed with: ${
                this.blurClass(false)
            }`;
        }, (reason) => {
            this.closeResult = `Dismissed ${
                this.getDismissReason(reason)
            }`;
        });
    }
    
    private getDismissReason(reason: any): string {
        this.blurClass(false);
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return  `with: ${reason}`;
        }
    }
    private blurClass(condition: boolean) {
        this.filterBlur = condition;
    }
}