import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent {
  fontSize = 'medium';

  @ViewChild('editorContent') editorContent: ElementRef | undefined;

  formatText(command: string) {
    document.execCommand(command, false, '');
  }

  setFontSize(size: string) {
    this.fontSize = size === 'small' ? '12px' : '20px';
  }
}
