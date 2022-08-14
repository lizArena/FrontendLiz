import { NgModule } from '@angular/core';
import { HomeComponent } from './components/home/home.component';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { EditAboutNewComponent } from './components/about-new/edit-about-new.component';



const routes: Routes=[
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  { path: 'nuevaexp', component:NewExperienciaComponent},
  { path: 'editexp/:id', component: EditExperienciaComponent},
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'nuevapro', component:NewProyectosComponent},
  { path: 'editpro/:id', component:EditProyectosComponent},
  { path: 'nuevaskill', component:NewSkillsComponent},
  { path: 'editskill/:id', component:EditSkillsComponent},
  { path: 'editpersona/:id', component: EditAboutNewComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports:[RouterModule]
})
export class AppRoutingModule { }
