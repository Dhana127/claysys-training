import { Routes } from '@angular/router';
import { Mainarea } from './component/mainarea/mainarea';
import { Inventoryaddpage } from './component/inventoryaddpage/inventoryaddpage';
import { Loginpage } from './component/loginpage/loginpage';

export const routes: Routes = [
    { path: '', redirectTo: 'loginpage', pathMatch: 'full' },
    { path: 'loginpage', component: Loginpage },
    {path:"",component:Mainarea},
    {path:"order",component:Mainarea},
    {path:"inventory",component:Inventoryaddpage}
];
