import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideClientHydration(),
    provideAnimationsAsync(), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"simple-crm-11d00","appId":"1:1032018249669:web:aaca0b18fbe59a50f1edac","storageBucket":"simple-crm-11d00.appspot.com","apiKey":"AIzaSyBF43o27XarXWHjxnqmXZSsB_ghraeBMUU","authDomain":"simple-crm-11d00.firebaseapp.com","messagingSenderId":"1032018249669"}))), importProvidersFrom(provideFirestore(() => getFirestore())),
  ],
};
