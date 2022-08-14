import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessgeServiceService {
  public message: string = '';
  constructor() {}
}
