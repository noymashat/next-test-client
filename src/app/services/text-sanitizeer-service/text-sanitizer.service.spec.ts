import { TestBed } from '@angular/core/testing';

import { TextSanitizerService } from './text-sanitizer.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

describe('TextSanitizerService', () => {
  let service: TextSanitizerService;
  let sanitizer: DomSanitizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextSanitizerService);
    sanitizer = TestBed.inject(DomSanitizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should sanitize HTML entities', () => {
    const htmlContent = 'Assassin&#39;s Creed';
    const safeHtml: SafeHtml = service.sanitizeHtml(htmlContent);
    const sanitizedContent = sanitizer.bypassSecurityTrustHtml(htmlContent);
    expect(safeHtml.toString()).toEqual(sanitizedContent.toString());
  });

  it('should sanitize HTML tags', () => {
    const htmlContent = '<p>Hello, <br>World!</p>';
    const safeHtml: SafeHtml = service.sanitizeHtml(htmlContent);
    const sanitizedContent = sanitizer.bypassSecurityTrustHtml(htmlContent);
    expect(safeHtml.toString()).toEqual(sanitizedContent.toString());
  });

  it('should sanitize HTML entities and return string', () => {
    const htmlContent = 'Assassin&#39;s Creed';
    const expectedString = "Assassin's Creed";
    const safeString: string = service.sanitizeString(htmlContent);
    expect(safeString).toEqual(expectedString);
  });

  it('should sanitize HTML tags and return string 2', () => {
    const htmlContent = '<p>Hello, <br>World!</p>';
    const expectedString = "Hello, World!";
    const safeString: string = service.sanitizeString(htmlContent);
    expect(safeString).toEqual(expectedString);
  });
});
