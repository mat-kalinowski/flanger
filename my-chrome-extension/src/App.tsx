import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import { analyze } from 'web-audio-beat-detector';
import ytdl from "@distube/ytdl-core";


function YTDownloader() {
  // const ytLink = "https://www.youtube.com/watch?v=C6MOKXm8x50"
  return(<></>)
}


function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log("heyoo")
    const videoStream = ytdl("http://www.youtube.com/watch?v=aqz-KE-bpKQ")
    // videoStream.pipe()
    console.log(videoStream)
  })

  return (
    <>
      <div>
        <YTDownloader></YTDownloader>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
