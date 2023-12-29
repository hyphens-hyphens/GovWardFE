import { Component, EventEmitter, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-confirm-dialog',
    templateUrl: './confirm-dialog.component.html',
    styleUrls: ['./confirm-dialog.component.scss']
})
export class ConfirmDialogComponent {
    constructor(public dialogRef: MatDialogRef<ConfirmDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: DialogData) { }
    confirmEvent: EventEmitter<boolean> = new EventEmitter<boolean>();

    submit(confirm: boolean): void {
        if (confirm) {
            this.data?.confirmFunction?.();
        }
        else {
            this.data?.rejectFunction?.();
        }
    }
}

export interface DialogData {
    confirmFunction: Function | undefined;
    rejectFunction: Function | undefined;
}