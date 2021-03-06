import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatRippleModule } from '@angular/material/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { TranslocoModule } from '@ngneat/transloco';
import { NgApexchartsModule } from 'ng-apexcharts';
import { SharedModule } from 'app/shared/shared.module';
import { TickerComponent } from 'app/modules/ticker/ticker.component';
import { tickerRoutes } from 'app/modules/ticker/ticker.routing';
import { MatTooltipModule } from '@angular/material/tooltip';
import { PipeModule } from 'app/shared/pipe.module';
import { ProgressModule } from 'app/modules/progress/progress.module';

@NgModule({
    declarations: [
        TickerComponent
    ],
    imports     : [
        RouterModule.forChild(tickerRoutes),
        MatButtonModule,
        MatButtonToggleModule,
        MatDividerModule,
        MatIconModule,
        MatMenuModule,
        MatProgressBarModule,
        MatRippleModule,
        MatSidenavModule,
        MatSortModule,
        MatTableModule,
        MatTabsModule,
        NgApexchartsModule,
        TranslocoModule,
        SharedModule,
        MatTooltipModule,
        PipeModule,
        ProgressModule
    ]
})
export class TickerModule
{
}
