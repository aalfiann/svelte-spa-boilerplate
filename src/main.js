import { routes } from 'svelte-hash-router'
import App from './App.svelte'
import Home from './routes/Home.svelte'
import About from './routes/About.svelte'
import NotFound from './routes/NotFound.svelte'

routes.set({
  '/': Home,
  '/about': About,
  '*': NotFound
})

const app = new App({
  target: document.body
})

export default app
