import { build } from 'esbuild'
import esbuildPluginPino from 'esbuild-plugin-pino'
import glob from 'tiny-glob'

async function serve() {
  try {
    const entryPoints = await glob('src/**/*.ts')
    const pinoPlugin = esbuildPluginPino({ transports: ['pino-pretty'] })

    await build({
      entryPoints,
      logLevel: 'info',
      outdir: 'build',
      banner: {
        js: `import {createRequire} from 'module'; const require = createRequire(import.meta.url);`
      },
      bundle: true,
      minify: true,
      platform: 'node',
      format: 'esm',
      sourcemap: true,
      plugins: [pinoPlugin]
    })
  } catch (e) {
    console.error(e instanceof Error ? e.message : e)
  }
}

await serve()
