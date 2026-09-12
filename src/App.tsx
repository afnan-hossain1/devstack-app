
import { Suspense } from 'react';
import './App.css'
import Banner from './components/banner'
import Nav from './components/Nav'
import Program from './components/program/Program';
import type { Iprogram } from "./types/programType"

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
      <Suspense fallback={<h2>Loading...</h2>}>
        <Program programPromise={programPromise} />
      </Suspense>
    </>
  )
}

export default App
