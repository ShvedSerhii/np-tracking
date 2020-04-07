import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import NewDocumentForm from './new-document.form';
import { DocumentModel } from 'src/app/models/document.model';

@Component({
  selector: 'app-new-document',
  templateUrl: './new-document.component.html',
  styleUrls: ['./new-document.component.scss']
})
export class NewDocumentComponent {
  public form: NewDocumentForm;
  constructor(
    public dialogRef: MatDialogRef<NewDocumentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DocumentModel
  ) {
    this.form = new NewDocumentForm(data);
  }

  public cancel(): void {
    this.dialogRef.close();
  }
}
