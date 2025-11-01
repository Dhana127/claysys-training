import { RouterModule, Routes } from '@angular/router';
import { Mainarea } from './component/mainarea/mainarea';
import { Inventoryaddpage } from './component/inventoryaddpage/inventoryaddpage';
import { Loginpage } from './component/loginpage/loginpage';

export const routes: Routes = [
    { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
    { path: 'loginpage', component: Loginpage },
    {path:"order", loadComponent: () => import('./component/mainarea/mainarea').then(m => m.Mainarea)},
    {path:"inventory",component:Inventoryaddpage}
];
RouterModule.forRoot(routes, {
  onSameUrlNavigation: 'reload'
})
