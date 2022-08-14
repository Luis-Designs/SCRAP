import esbuild from 'esbuild';

esbuild.build({
    entryPoints: ['src/sw.js', 'src/scripts/scrapper.js'],
    watch: true,
    bundle: true,
    outdir: 'dist',
    // target: 'CHROME',
    minify: true,
    allowOverwrite: true,
}).then(res => console.log(JSON.stringify(res)))
    .catch(err => console.log(err))

    // JSON.stringify(res))