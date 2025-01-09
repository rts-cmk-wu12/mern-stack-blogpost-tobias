import { Suspense } from "react"
import { useRoutes } from "react-router"
import routes from '~react-pages';
import Header from "./components/Header";

function App() {

  return (
    <>
      <Header />
      <Suspense>{useRoutes(routes)}</Suspense>
    </>
  )
}

export default App
