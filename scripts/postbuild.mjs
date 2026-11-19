// Static hosts need a fallback so client-side routes (e.g. /services) resolve on refresh.
import { copyFileSync } from 'node:fs'
copyFileSync('dist/index.html', 'dist/404.html')
console.log('postbuild: created dist/404.html SPA fallback')
