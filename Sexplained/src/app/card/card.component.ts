import { Component, OnInit, Input } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    closeResult: string;

    @Input() id = "0";
    @Input() banner = "https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg";
    @Input() title = "Cargando...";
    @Input() text = "Cargando...";
    @Input() date = "Fecha";
    @Input() authorId = "0";
    @Input() price = 0;
    @Input() people = "";
    @Input() authorName = "Nombre";
    @Input() authorAvatar = "https://i1.wp.com/ggrmlawfirm.com/wp-content/uploads/avatar-placeholder.png?fit=256%2C256&ssl=1";

    constructor(private modalService: NgbModal) {}

    ngOnInit() {}


    goToUser() {
        //@ts-ignore
        window.open("autor/" + this.authorId, '_blank');
    }

    open(content) {
        if (this.price > 0) {
            this.modalService.open(content, {
                ariaLabelledBy: 'modal-basic-title'
            }).result.then((result) => {
                this.closeResult = `Closed with: ${result}`;
            }, (reason) => {
                console.log(`Dismissed ${this.getDismissReason(reason)}`);
            });
        }else{
            if(this.people!=''){
                window.open("encuestas/" + this.id,'_blank');
            }else{
                window.open("modulos/" + this.id,'_blank');

            }
            
        }
    }


    private getDismissReason(reason: any): string {
        if (reason === ModalDismissReasons.ESC) {
            return 'by pressing ESC';
        } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
            return 'by clicking on a backdrop';
        } else {
            return `with: ${reason}`;
        }
    }


}