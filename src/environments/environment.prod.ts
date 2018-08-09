import { EnviromentVariable } from '@env/environment.model';

declare let window: any;

export const environment: EnviromentVariable = {
    window: window,
    isCordova: typeof window.cordova !== 'undefined',
    cordova: typeof window.cordova !== 'undefined' ? window.cordova : null,
    envName: `production`,
    endpoint: ``
}