import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptor-service';
import { AboutNewComponent } from './components/about-new/about-new.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { NewProyectosComponent } from './components/proyectos/new-proyectos.component';
import { NewSkillsComponent } from './components/skills/new-skills.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { EditProyectosComponent } from './components/proyectos/edit-proyectos.component';
import { EditSkillsComponent } from './components/skills/edit-skills.component';
import { EditAboutNewComponent } from './components/about-new/edit-about-new.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    SkillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    
    LoginComponent,
    AboutNewComponent,
    NewExperienciaComponent,
    NewEducacionComponent,
    NewProyectosComponent,
    NewSkillsComponent,
    EditExperienciaComponent,
    EditEducacionComponent,
    EditProyectosComponent,
    EditSkillsComponent,
    EditAboutNewComponent,
   
   
  
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({})
  ],
  providers: [
    interceptorProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
