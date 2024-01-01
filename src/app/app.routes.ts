import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'hello-world',
    pathMatch: 'full',
  },
  {
    path: 'folder/:id',
    loadComponent: () =>
      import('./folder/folder.page').then((m) => m.FolderPage),
  },
  {
    path: 'hello-world',
    loadComponent: () => import('./pages/hello-world/hello-world.page').then( m => m.HelloWorldPage)
  },

];
