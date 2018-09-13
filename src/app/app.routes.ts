import { DirectoryComponent } from './directory/directory.component';
import { HomeComponent } from './home/home.component';
import { provideRoutes } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


const appRoutes = [
  { path: 'directory', component: DirectoryComponent }, //from export class in directory.component.ts
  { path: '', component: HomeComponent }
];


export const appRoutesProvider = [
  provideRoutes(appRoutes)
]
//passes to the bootstrap method.
