import { Component, OnInit ,HostListener} from '@angular/core';
import { CardService } from '../card.service';
import { UserService } from '../user.service';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
@Component({
    selector: 'app-carrito',
    templateUrl: './carrito.component.html',
    styleUrls: ['./carrito.component.scss']
})

export class CarritoComponent implements OnInit {
    user
    side;
    innerWidth
    paymentOpen = true;
    totalPrice = 0;
    currentId = 0;
    currentProduct = "";
    closeResult;
    cart;
    size;
    cards = [];
    constructor(private modalService: NgbModal, private userService: UserService, private cardService: CardService) {}

    ngOnInit() {
        this.innerWidth = window.innerWidth;
        if (innerWidth <= 950) {
            this.paymentOpen = false
            this.side = "-75vw"
        } else {
            this.paymentOpen = true
            this.side = "-35vw"
        }
        this.userService.getUser(localStorage.getItem('token')).subscribe((user: any[]) => {
            this.user = user;
            this.cart = this.user.cart;
            this.size = this.cart.length;
            for (var i = 0; i < this.cart.length; i++) {
                console.log(this.cart[i])
                this.cardService.getCard(this.cart[i]).subscribe((card) => {
                    this.cards.push(card)
                    var c
                    c = card
                    this.totalPrice = c.price + this.totalPrice
                });

            }
        });
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        this.innerWidth = window.innerWidth;
        if (innerWidth <= 950) {
            this.paymentOpen = false
            this.side = "-75vw"
        } else {
            this.paymentOpen = true
            this.side = "-35vw"
        }
    }

    open(content, card) {
        this.currentId = card.id;
        this.currentProduct = card.title;
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            console.log(this.closeResult);
            if (reason == "remove") {
                this.cards = this.cards.filter(function (e) {
                    return e.id !== card.id;
                });
                this.size--;
                this.totalPrice -= card.price
                this.user.cart = this.cards
                console.log(this.user.cart)
                this.userService.updateUser(this.user).subscribe((user: any[]) => {});

            }
        });
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

    toggle() {
        if (this.innerWidth <= 950) {
            this.paymentOpen = !this.paymentOpen
        }
    }
}