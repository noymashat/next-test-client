import { Injectable, SecurityContext } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class TextSanitizerService {
  constructor(private sanitizer: DomSanitizer) {}

  sanitizeHtml(htmlContent: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(htmlContent);
  }

  sanitizeString(str: string): string {
    const tempDiv = document.createElement('div');
    tempDiv.innerHTML =
      this.sanitizer.sanitize(SecurityContext.HTML, str) ?? '';
    return tempDiv.textContent || tempDiv.innerText || '';
  }
}
