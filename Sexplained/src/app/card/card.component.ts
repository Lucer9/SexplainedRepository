import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {UserService} from '../user.service';
@Component({
    selector: 'app-card',
    templateUrl: './card.component.html',
    styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
    closeResult: string;
    user
    cart = false;
    @Input() id = 0;
    @Input() banner = "https://images.homedepot-static.com/productImages/0b10f2de-892e-42b7-aed4-6fa738027a16/svn/storm-matte-formica-laminate-sheets-009121258512000-64_400_compressed.jpg";
    @Input() title = "Cargando...";
    @Input() text = "Cargando...";
    @Input() date = "Fecha";
    @Input() authorId = "0";
    @Input() price = 0;
    @Input() people = "";
    @Input() authorName = "Nombre";
    @Input() authorAvatar = "https://i1.wp.com/ggrmlawfirm.com/wp-content/uploads/avatar-placeholder.png?fit=256%2C256&ssl=1";

    @Input() userId;
    @Input() isUser;

    @Output() valueChange = new EventEmitter();
    counter = 0;

    constructor(private modalService: NgbModal, private userService: UserService) {

    }

    ngOnInit() {
        this.userId=localStorage.getItem('token')
        if (this.isUser != '1') {
            this.userService.getUser(this.userId).subscribe((user) => {
                this.user = user
                console.log(user)
                if (this.user.bought_modules.includes(+this.id)) {
                    this.price = 0;
                }

                if (this.user.cart.includes(+this.id)) {
                    this.price = 0;
                    this.cart = true;;
                    this.counter = this.counter + 1;
                    this.valueChange.emit(this.counter);
                }
            });
        }
    }


    goToUser() {
        //@ts-ignore
        window.open("autor/" + this.authorId, '_blank');
    }

    open(content) {
        if (this.isUser == '0') {
            console.log(this.price)
            if (this.people == "") {
                window.open("edit/modulos/" + this.id, '_blank');
            }else{
                 window.open("edit/survey/" + this.id, '_blank');
            }
        } else {
            if (this.price > 0) {
                this.modalService.open(content, {
                    ariaLabelledBy: 'modal-basic-title'
                }).result.then((result) => {
                    this.closeResult = `Closed with: ${result}`;
                }, (reason) => {
                    this.closeResult = this.getDismissReason(reason);
                    if (this.closeResult == 'with: add') {
                        this.addProduct();
                    } else if (this.closeResult == 'with: buy') {
                        console.log("buy")
                        this.addProduct();
                        location.replace("http://localhost:4200/carrito");
                    }
                });
            } else {
                if (!this.cart) {
                    if (this.people != '') {
                        window.open("encuestas/" + this.id, '_blank');
                    } else {
                        window.open("modulos/" + this.id, '_blank');
                    }
                }
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

    addProduct() {
        console.log(this.counter)
        if (!this.user.cart.includes(this.id)) {
            this.user.cart.push(this.id)
            this.userService.updateUser(this.user).subscribe((ret) => {});

            this.counter = this.user.cart.length;
            this.valueChange.emit(this.counter);



            this.cart = true;
            this.price = 0;
        }
    }

}