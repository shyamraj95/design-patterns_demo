import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({
    selector: '[appHasRole]',
    standalone: true
})
export class HasRoleDirective {
    allowedRoles: Array<string> = [];
    @Input()
    set appHasRole(allowedRoles: any) {
        this.allowedRoles = allowedRoles;
        this.showIfUserAllowed();
    }
    constructor(
        private viewContainer: ViewContainerRef,
        private templateRef: TemplateRef<any>,
        private jwtHelperService: JwtHelperService,
        private loginService: LoginService) {
        this.showIfUserAllowed()
    }
    roles(): boolean {
        const userRoles = this.loginService.securityObject.role as Array<string>
        return this.allowedRoles.some(a => userRoles.some(m => a === m));
    }
    showIfUserAllowed() {
        if (this.loginService.isAuthenticated()) {
            if (this.roles() !== true) {
                this.viewContainer.clear();
                return;
            } else if (this.roles()) {
                this.viewContainer.createEmbeddedView(this.templateRef);
            } else {
                this.viewContainer.clear();
            }
        }
    }
}

