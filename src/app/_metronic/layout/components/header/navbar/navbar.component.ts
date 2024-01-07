import { Component, Input, OnInit } from '@angular/core';
import { tap } from 'rxjs';
import { AuthService, UserModel } from 'src/app/modules/auth';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
    @Input() appHeaderDefaulMenuDisplay: boolean;
    @Input() isRtl: boolean;

    itemClass: string = 'ms-1 ms-lg-3';
    btnClass: string = 'btn btn-icon btn-custom btn-icon-muted btn-active-light btn-active-color-primary w-35px h-35px w-md-40px h-md-40px';
    userAvatarClass: string = 'symbol-35px symbol-md-40px';
    btnIconClass: string = 'fs-2 fs-md-1';
    isLogin: boolean = false;
    constructor(private userService: AuthService) { }

    ngOnInit(): void {
        this.userService.currentUser$.pipe(
            tap((user: UserModel) => {
                this.isLogin = user?.isLogin ?? false;
            })
        ).subscribe();
    }
}
