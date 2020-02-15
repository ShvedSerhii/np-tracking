import { TestBed } from '@angular/core/testing';

import { TrackDocumentsControllerService } from './track-documents-controller.service';

describe('TrackDocumentsControllerService', () => {
  let service: TrackDocumentsControllerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrackDocumentsControllerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
