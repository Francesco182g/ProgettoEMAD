import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'tabs', loadChildren: './tabs/tabs.module#TabsPageModule' },
  /*
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  */
 {
  path: 'tab1',
  loadChildren: () => import('./tab1/tab1.module').then(m => m.Tab1PageModule)
},
{
  path: 'tab2',
  loadChildren: () => import('./tab2/tab2.module').then(m => m.Tab2PageModule)
},
{
  path: 'tab3',
  loadChildren: () => import('./tab3/tab3.module').then(m => m.Tab3PageModule)
},
{
  path: 'tab4',
  loadChildren: () => import('./tab4/tab4.module').then(m => m.Tab4PageModule)
},
{
  path: 'tab5',
  loadChildren: () => import('./tab5/tab5.module').then(m => m.Tab5PageModule)
},
{
  path: 'settings',
  loadChildren: () => import('./settings/settings.module').then(m => m.SettingsPageModule)
},
  { path: 'suggestion', loadChildren: './suggestion/suggestion.module#SuggestionPageModule' },
  { path: 'calendar', loadChildren: './calendar/calendar.module#CalendarPageModule' },
  { path: 'guide', loadChildren: './guide/guide.module#GuidePageModule' },
  { path: 'record', loadChildren: './record/record.module#RecordPageModule' },
  { path: 'mail', loadChildren: './mail/mail.module#MailPageModule' },
  { path: 'forum', loadChildren: './forum/forum.module#ForumPageModule' },
  { path: 'games', loadChildren: './games/games.module#GamesPageModule' },  { path: 'badge', loadChildren: './badge/badge.module#BadgePageModule' },



];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
