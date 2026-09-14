
import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner'
import Nav from './components/Nav'
import Program from './components/program/Program';
import type { Iprogram } from "./types/programType"
import Footer from './components/Footer';

const programFetch = async():Promise<Iprogram[]> => {
  const response = await fetch('/data.json');
  const data = await response.json();
  return data;
}

function App() {
  const programPromise = programFetch();

  return (
    <>
      <Nav />
      <Banner />
      <Suspense fallback={<h2 className="text-center text-3xl font-bold">Loading...</h2>}>
        <Program programPromise={programPromise} />
      </Suspense>
      <footer>
        <Footer />
      </footer>
    </>
  )
}

export default App
