import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [{
  path: 'auth',
  loadChildren: () => import('./components/auth-module/auth-module.module').then(m => m.AuthModuleModule)
},
  {
    path: 'master-room',
    loadChildren: () => import('./components/master-room/master-room.module').then(m => m.MasterRoomModule)
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
