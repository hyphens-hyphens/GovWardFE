import { Component, EventEmitter } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>) { }
    confirmEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    submit(confirm: boolean): void {
        this.confirmEvent.emit(confirm);
    }
}