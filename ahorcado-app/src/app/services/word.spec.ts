import { TestBed } from '@angular/core/testing';
import { WordService } from './word';

describe('WordService', () => {
  let service: WordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a random word', () => {
    const word = service.getRandomWord();
    expect(word).toBeTruthy();
    expect(typeof word).toBe('string');
  });
});
