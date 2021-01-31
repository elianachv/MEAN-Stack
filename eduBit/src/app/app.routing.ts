import { Routes, RouterModule } from '@angular/router';
import { RegistroComponent } from './components/registro/registro.component';
import { ListaComponent } from './components/lista/lista.component';
import { ActualizacionComponent } from './components/actualizacion/actualizacion.component';


const routes: Routes = [
    { path: '', component: RegistroComponent },
    { path: 'registro', component: RegistroComponent },
    { path: 'listado', component: ListaComponent },
    { path: 'eliminacion', component: ListaComponent },
    { path: 'actualizacion', component: ActualizacionComponent }

];

export const routing = RouterModule.forRoot(routes);