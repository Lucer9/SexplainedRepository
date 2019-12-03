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
    date = ""
    card = {
        "number": "4242424242424242",
        "name": "Nombre Usuario",
        "exp_year": "2020",
        "exp_month": "12",
        "cvc": "123",
    }
    constructor(private modalService: NgbModal, private userService: UserService, private cardService: CardService) {}

    ngOnInit() {
        this.loadStripe();
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



    pay() {
        var amount = this.totalPrice
        var cards = this.cards
        var card = this.cardService
        var user = this.userService
        var myUser = this.user
        var handler = ( < any > window).StripeCheckout.configure({
            key: 'pk_test_fS8v5RNY9nOp4biiV60i1WkJ000jX1HOYC',
            locale: 'auto',
            token: function (token: any) {
                // You can access the token ID with `token.id`.
                // Get the token ID to your server-side code for use.
                console.log(cards)
                console.log(myUser)
                for (var i = 0; i < cards.length; i++) {
                    cards[i].sales=cards[i].sales+cards[i].price
                    card.updateCard(cards[i]).subscribe((res: any[]) => {
                        console.log(res)                        
                    });
                }
                
                myUser.bought_modules=myUser.cart
                myUser.cart=[]
                user.updateUser(myUser).subscribe((res: any[]) => {
                    console.log(res)
                    location.replace("http://localhost:4200/modulos");
                });

            }
        });

        handler.open({
            name: 'Sexplained',
            amount: amount * 100,

        });
    }

    loadStripe() {
        if (!window.document.getElementById('stripe-script')) {
            var s = window.document.createElement("script");
            s.id = "stripe-script";
            s.type = "text/javascript";
            s.src = "https://checkout.stripe.com/checkout.js";
            s.onload = () => {
                //@ts-ignore
                this.handler = ( < any > window).StripeCheckout.configure({
                    key: 'pk_test_fS8v5RNY9nOp4biiV60i1WkJ000jX1HOYC',
                    locale: 'auto',
                    token: function (token: any) {
                        // You can access the token ID with `token.id`.
                        // Get the token ID to your server-side code for use.
                        console.log(token)
                    }
                });
            }

            window.document.body.appendChild(s);
        }
    }
}