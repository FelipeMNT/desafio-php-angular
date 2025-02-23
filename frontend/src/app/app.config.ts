import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MatOptionModule } from '@angular/material/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// ✅ Importando os módulos do Angular Material
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';  // Importando MatCardModule
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';  // Importa o MatDialogModule


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    provideAnimationsAsync(),
    importProvidersFrom(
      HttpClientModule,
      MatInputModule,
      MatButtonModule,
      MatSelectModule,
      MatFormFieldModule,
      MatCardModule,  // Incluindo o MatCardModule aqui
      MatOptionModule, 
      BrowserAnimationsModule,
      FormsModule,
      MatDialogModule  // Adiciona o MatDialogModule
    )
  ]
};
