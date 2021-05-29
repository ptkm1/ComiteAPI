"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rollup_plugin_svelte_1 = __importDefault(require("rollup-plugin-svelte"));
const plugin_commonjs_1 = __importDefault(require("@rollup/plugin-commonjs"));
const plugin_node_resolve_1 = __importDefault(require("@rollup/plugin-node-resolve"));
const rollup_plugin_livereload_1 = __importDefault(require("rollup-plugin-livereload"));
const rollup_plugin_terser_1 = require("rollup-plugin-terser");
const svelte_preprocess_1 = __importDefault(require("svelte-preprocess"));
const plugin_typescript_1 = __importDefault(require("@rollup/plugin-typescript"));
const rollup_plugin_css_only_1 = __importDefault(require("rollup-plugin-css-only"));
const production = !process.env.ROLLUP_WATCH;
function serve() {
    let server;
    function toExit() {
        if (server)
            server.kill(0);
    }
    return {
        writeBundle() {
            if (server)
                return;
            server = require('child_process').spawn('npm', ['run', 'start', '--', '--dev'], {
                stdio: ['ignore', 'inherit', 'inherit'],
                shell: true
            });
            process.on('SIGTERM', toExit);
            process.on('exit', toExit);
        }
    };
}
exports.default = {
    input: 'src/main.ts',
    output: {
        sourcemap: true,
        format: 'iife',
        name: 'app',
        file: 'public/build/bundle.js'
    },
    plugins: [
        rollup_plugin_svelte_1.default({
            preprocess: svelte_preprocess_1.default({ sourceMap: !production }),
            compilerOptions: {
                // enable run-time checks when not in production
                dev: !production
            }
        }),
        // we'll extract any component CSS out into
        // a separate file - better for performance
        rollup_plugin_css_only_1.default({ output: 'bundle.css' }),
        // If you have external dependencies installed from
        // npm, you'll most likely need these plugins. In
        // some cases you'll need additional configuration -
        // consult the documentation for details:
        // https://github.com/rollup/plugins/tree/master/packages/commonjs
        plugin_node_resolve_1.default({
            browser: true,
            dedupe: ['svelte']
        }),
        plugin_commonjs_1.default(),
        plugin_typescript_1.default({
            sourceMap: !production,
            inlineSources: !production
        }),
        // In dev mode, call `npm run start` once
        // the bundle has been generated
        !production && serve(),
        // Watch the `public` directory and refresh the
        // browser on changes when not in production
        !production && rollup_plugin_livereload_1.default('public'),
        // If we're building for production (npm run build
        // instead of npm run dev), minify
        production && rollup_plugin_terser_1.terser()
    ],
    watch: {
        clearScreen: false
    }
};
