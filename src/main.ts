//when you wish to start the lite-server version, recompile the main-jit version
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from '../dist/src/app/app.module.ngfactory';

console.log('Running AOT compiled');
platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
