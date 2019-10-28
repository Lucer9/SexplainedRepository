import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {
    HttpClient
} from '@angular/common/http';
import {
    AdminService
} from '../admin.service';

import {
    NgbModal,
    ModalDismissReasons
} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-module-add',
    templateUrl: './module-add.component.html',
    styleUrls: ['./module-add.component.scss']
})

export class ModuleAddComponent implements OnInit {
    id = 13;
    closeResult

    date
    admin = {
        "avatar": 'https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?v=1530129081',
        "banner": 'https://201758-624029-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2017/03/img-placeholder.png'
    };
    cards = []
    content = []
    sub;

    constructor(private adminService: AdminService, private modalService: NgbModal) {}

    ngOnInit() {
        //@ts-ignore
        this.adminService.getAdmin(this.id).subscribe((admin) => {
            //@ts-ignore
            this.admin = admin;
        })

        var d = new Date();
        this.date = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear()

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
        this.content.splice(i, 0, object)
        console.log(this.content)
    }

    open(content, i) {
        this.modalService.open(content, {
            ariaLabelledBy: 'modal-basic-title'
        }).result.then((result) => {
            this.closeResult = `Closed with: ${result}`;
        }, (reason) => {
            this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
            if (reason == 'remove') {
                this.content.splice(i, 1)
                console.log(this.content)
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