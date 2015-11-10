var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix
        .copy([
        ], config.get('public.font.outputFolder'))
        .copy([
        ], config.get('public.img.outputFolder'))
        .copy([
        ], config.get('public.css.outputFolder'))
        .copy([
        ], config.get('public.js.outputFolder'))
        .scripts([
            "jquery/dist/jquery.js",
            "jquery-mousewheel/jquery.mousewheel.js",
            "jquery.terminal/js/jquery.terminal-0.8.8.js",
        ], config.get('public.js.outputFolder') + '/plugins.js', 'resources/assets/vendor')
        .sass([
            'app.scss'
        ], config.get('public.css.outputFolder') + '/app.css')
        .coffee([
            '**/*.coffee'
        ], config.get('public.js.outputFolder') + '/app.js')
        .browserSync({
            files: [
                 'src/**/*.php',
                 'resources/views/**/*.php',
                 config.get('public.css.outputFolder')+'/**/*.css',
                 config.get('public.js.outputFolder')+'/**/*.js',
            ],
            proxy: 'http://127.0.0.1/laravel/'
        });
});
