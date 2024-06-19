import { Injectable } from '@angular/core';
import { environment} from "./environments/environment";

@Injectable({
  providedIn: 'root',
})
export class ApplicationConfigService {
  private endpointPrefix = '';
  private microfrontend = false;
  private apiUrl = environment.apiUrl;

  setEndpointPrefix(endpointPrefix: string): void {
    this.endpointPrefix = endpointPrefix;
  }

  setMicrofrontend(microfrontend = true): void {
    this.microfrontend = microfrontend;
  }

  isMicrofrontend(): boolean {
    return this.microfrontend;
  }
  /*
  getEndpointFor(api: string, microservice?: string): string {
    if (microservice) {
      return `${this.endpointPrefix}services/${microservice}/${api}`;
    }
    return `${this.endpointPrefix}${api}`;
  }*/
  getEndpointFor(endpoint: string): string {
    return `${this.apiUrl}/${endpoint}`;
  }

}

