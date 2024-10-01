import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPageComponent } from './pages/main-page.components';
import { ListComponent } from './components/list/ListComponent';
import { addCharacterComponent} from './components/add-character/add.character.component';
import { FormsModule } from '@angular/forms';




@NgModule({
  declarations: [MainPageComponent, ListComponent , addCharacterComponent],

  exports:[MainPageComponent],

      imports: [
    CommonModule,FormsModule,

  ]
})
export class DbzModule { }
