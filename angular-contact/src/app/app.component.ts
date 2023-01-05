import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Subscription } from 'rxjs';
import windowStore from '../../../share/store/store';
import { baseConfig } from './config';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['../styles.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit, OnDestroy {
  angularIcon = baseConfig.resolveImagePath('angular.png');
  webpackIcon = baseConfig.resolveImagePath('webpack.png');
  counter$ = windowStore.counter$;
  counterSubscription = new Subscription();
  constructor(private cdr: ChangeDetectorRef) {}

  increase() {
    windowStore.increaseCounter();
  }

  decrease() {
    windowStore.decreaseCounter();
  }

  ngOnInit(): void {
    this.cdr.detectChanges();
    this.counterSubscription.add(
      windowStore.counter$.subscribe(() => {
        this.cdr.detectChanges();
      })
    );
  }
  ngOnDestroy(): void {
    this.counterSubscription.unsubscribe();
  }
}
