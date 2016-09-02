import 'core-js';
import 'reflect-metadata';
import 'zone.js/dist/zone';

// Required for component testing:
import { setBaseTestProviders } from '@angular/core/testing';
import { TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, 
    TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS } from '@angular/platform-browser-dynamic/testing';
import 'zone.js/dist/jasmine-patch';
import 'zone.js/dist/async-test';
import 'zone.js/dist/fake-async-test';

// import all files ending in .spec.ts:
function requireAll(requireContext) {
    return requireContext.keys().map(requireContext);
}



// Required for component testing:
setBaseTestProviders(TEST_BROWSER_DYNAMIC_PLATFORM_PROVIDERS, TEST_BROWSER_DYNAMIC_APPLICATION_PROVIDERS);


requireAll(require.context('./app', true, /\.spec\.ts$/));



