import { Directive, ElementRef, inject, input } from "@angular/core";

@Directive({
  selector : 'a[appSafeLink]',
  host: {
    '(click)':'onConfirmLeavePage($event)'
  }
})
export class SafeLinkDirective {
 private hostElement = inject<ElementRef<HTMLAnchorElement>>(ElementRef);
 quiryParam = input('myapp',{alias:'appSafeLink'});
 onConfirmLeavePage(event:MouseEvent){
  const wantsToLeave = window.confirm("Do you want to leave the app?");
  if(wantsToLeave){
    const address = this.hostElement.nativeElement.href;
    this.hostElement.nativeElement.href = address + "?from="+this.quiryParam();
    return;
  }
  event.preventDefault();
 }
}
