import { Routes } from '@angular/router';
import { EmailGeneratorComponent } from './components/email-generator/email-generator.component';

export const routes: Routes = [
    { path: '', redirectTo: 'generate', pathMatch: 'full' },
    { path: 'generate', component: EmailGeneratorComponent },
    { path: '**', redirectTo: 'generate' }
];
