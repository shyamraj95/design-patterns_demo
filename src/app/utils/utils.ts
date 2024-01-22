export class Utils {
    static isMobile() {
        return window && window.matchMedia('(max-width: 767px)').matches;
    }
    
    static scrollToTop(selector: string) {
        if (document) {
            const element = <HTMLElement>document.querySelector(selector);
            element.scrollTop = 0;
        }
    }
    static genId() {
        let text = '';
        const possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (let i = 0; i < 5; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
}
