/**
 * System configuration for Angular samples
 * Adjust as necessary for your application needs.
 */
(function(global) {
  System.config({
    paths: {
      // paths serve as alias
      'npm:': 'node_modules/'
    },
    // map tells the System loader where to look for things
    map: {
      // our app is within the app folder
      'app': 'app',

      // angular bundles
      '@angular/core': 'npm:@angular/core/bundles/core.umd.js',
      '@angular/common': 'npm:@angular/common/bundles/common.umd.js',
      '@angular/compiler': 'npm:@angular/compiler/bundles/compiler.umd.js',
      '@angular/platform-browser': 'npm:@angular/platform-browser/bundles/platform-browser.umd.js',
      '@angular/platform-browser-dynamic': 'npm:@angular/platform-browser-dynamic/bundles/platform-browser-dynamic.umd.js',
      '@angular/http': 'npm:@angular/http/bundles/http.umd.js',
      '@angular/router': 'npm:@angular/router/bundles/router.umd.js',
      '@angular/forms': 'npm:@angular/forms/bundles/forms.umd.js',

      // other libraries
      'rxjs':                      'npm:rxjs',
      'angular-in-memory-web-api': 'npm:angular-in-memory-web-api/bundles/in-memory-web-api.umd.js',
      'mathjs': 'npm:mathjs'
    },
    // packages tells the System loader how to load when no filename and/or no extension
    packages: {
      'app': {
        defaultExtension: 'js',
        meta: {
          './*.js': {
            loader: 'systemjs-angular-loader.js'
          }
        }
      },
      'rxjs': {
        defaultExtension: 'js'
      },
      'mathjs': {
        main: 'index',
        map: {
          'decimal.js': '../decimal.js/decimal.min.js',
          'complex.js': '../complex.js/complex.min.js',
          'fraction.js': '../fraction.js/fraction.min.js',
          'typed-function': '../typed-function/typed-function.min.js',
          'tiny-emitter': '../tiny-emitter/index.js',
          'seed-random': '../seed-random/index.js',
          './lib': './lib/index.js',
          './lib/type': './lib/type/index.js',
          './lib/function': './lib/function/index.js',
          './lib/json': './lib/json/index.js',
          './lib/error': './lib/error/index.js',
          './lib/expression': './lib/expression/index.js',
          './lib/type/bignumber': './lib/type/bignumber/index.js',
          './lib/type/chain': './lib/type/chain/index.js',
          './lib/type/complex': './lib/type/complex/index.js',
          './lib/type/fraction': './lib/type/fraction/index.js',
          './lib/type/matrix': './lib/type/matrix/index.js',
          './lib/type/resultset': './lib/type/resultset/index.js',
          './lib/type/unit': './lib/type/unit/index.js',
          './lib/expression/docs': './lib/expression/docs/index.js',
          './lib/expression/function': './lib/expression/function/index.js',
          './lib/expression/node': './lib/expression/node/index.js',
          './lib/expression/transform': './lib/expression/transform/index.js',
          './lib/function/algebra': './lib/function/algebra/index.js',
          './lib/function/arithmetic': './lib/function/arithmetic/index.js',
          './lib/function/bitwise': './lib/function/bitwise/index.js',
          './lib/function/combinatorics': './lib/function/combinatorics/index.js',
          './lib/function/complex': './lib/function/complex/index.js',
          './lib/function/geometry': './lib/function/geometry/index.js',
          './lib/function/logical': './lib/function/logical/index.js',
          './lib/function/matrix': './lib/function/matrix/index.js',
          './lib/function/probability': './lib/function/probability/index.js',
          './lib/function/relational': './lib/function/relational/index.js',
          './lib/function/special': './lib/function/special/index.js',
          './lib/function/statistics': './lib/function/statistics/index.js',
          './lib/function/string': './lib/function/string/index.js',
          './lib/function/trigonometry': './lib/function/trigonometry/index.js',
          './lib/function/unit': './lib/function/unit/index.js',
          './lib/function/utils': './lib/function/utils/index.js',
        }
      }

    }
  });
})(this);
