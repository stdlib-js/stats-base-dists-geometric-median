<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# Median

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> [Geometric][geometric-distribution] distribution [median][median].

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

The [median][median] for a [geometric][geometric-distribution] random variable is

<!-- <equation class="equation" label="eq:geometric_median" align="center" raw="\operatorname{Median}\left( X \right) = \left\lceil {\frac {-1}{\log _{2}(1-p)}}\right\rceil \!-1" alt="Median for a geometric distribution."> -->

```math
\mathop{\mathrm{Median}}\left( X \right) = \left\lceil {\frac {-1}{\log _{2}(1-p)}}\right\rceil \!-1
```

<!-- <div class="equation" align="center" data-raw-text="\operatorname{Median}\left( X \right) = \left\lceil {\frac {-1}{\log _{2}(1-p)}}\right\rceil \!-1" data-equation="eq:geometric_median">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@51534079fef45e990850102147e8945fb023d1d0/lib/node_modules/@stdlib/stats/base/dists/geometric/median/docs/img/equation_geometric_median.svg" alt="Median for a geometric distribution.">
    <br>
</div> -->

<!-- </equation> -->

where `p` is the success probability.

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import median from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-median@esm/index.mjs';
```

#### median( p )

Returns the [median][median] of a [geometric][geometric-distribution] distribution with success probability `p`.

```javascript
var v = median( 0.1 );
// returns 6

v = median( 0.5 );
// returns 0
```

If provided a success probability `p` outside of `[0,1]`, the function returns `NaN`.

```javascript
var v = median( NaN );
// returns NaN

v = median( 1.5 );
// returns NaN

v = median( -1.0 );
// returns NaN
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-randu@esm/index.mjs';
import round from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-round@esm/index.mjs';
import median from 'https://cdn.jsdelivr.net/gh/stdlib-js/stats-base-dists-geometric-median@esm/index.mjs';

var v;
var i;
var p;

for ( i = 0; i < 10; i++ ) {
    p = randu();
    v = median( p );
    console.log( 'p: %d, Median(X;p): %d', p.toFixed( 4 ), v.toFixed( 4 ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/stats-base-dists-geometric-median.svg
[npm-url]: https://npmjs.org/package/@stdlib/stats-base-dists-geometric-median

[test-image]: https://github.com/stdlib-js/stats-base-dists-geometric-median/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/stats-base-dists-geometric-median/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/stats-base-dists-geometric-median/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/stats-base-dists-geometric-median?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/stats-base-dists-geometric-median.svg
[dependencies-url]: https://david-dm.org/stdlib-js/stats-base-dists-geometric-median/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/stats-base-dists-geometric-median/tree/deno
[umd-url]: https://github.com/stdlib-js/stats-base-dists-geometric-median/tree/umd
[esm-url]: https://github.com/stdlib-js/stats-base-dists-geometric-median/tree/esm
[branches-url]: https://github.com/stdlib-js/stats-base-dists-geometric-median/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/stats-base-dists-geometric-median/main/LICENSE

[geometric-distribution]: https://en.wikipedia.org/wiki/Geometric_distribution

[median]: https://en.wikipedia.org/wiki/Median

</section>

<!-- /.links -->
