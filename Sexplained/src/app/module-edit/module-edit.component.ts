import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    Router,
    ActivatedRoute
} from '@angular/router';
import {
    AdminService
} from '../admin.service';
import {
    CardService
} from '../card.service';
import {
    NgbModal,
    ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-module-edit',
  templateUrl: './module-edit.component.html',
  styleUrls: ['./module-edit.component.scss']
})
export class ModuleEditComponent implements OnInit {
   id = "13";
    closeResult

    date
    card = {
        "author":{
        "avatar": 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081'},
        "banner": 'https://201758-624029-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/03/img-placeholder.png',
        "content": []

    };
    sub;

    constructor(private activateRoute: ActivatedRoute, private router: Router, private adminService: AdminService, private cardService: CardService, private modalService: NgbModal) {
        this.sub = this.activateRoute.paramMap.subscribe(params => {
            this.id = params.get('id');
        });
    }
                
                
    ngOnInit() {
        //@ts-ignore
        this.cardService.getCard(this.id).subscribe((card) => {
            //@ts-ignore
            this.card = card;
            console.log(card)
        })

    }

    prepend(item, i) {
        var object
        switch (item) {
            case 'title':
                object = {
                    'type': 'title',
                    'data': ''
                }
                break;
            case 'text':
                object = {
                    'type': 'text',
                    'data': ''
                }
                break;

            case 'list':
                object = {
                    'type': 'list',
                    'data': ['', '', '']
                }
                break;

            case 'image':
                object = {
                    'type': 'image',
                    'data': ['', '', '']
                }
                break;
        }
        this.card.content.splice(i, 0, object)
    }

    open(content, i) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (reason == 'remove') {
                this.card.content.splice(i, 1)
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
}
