import MainContainer from "./components/MainContainer"


if(window.location.pathname === "/reset"){
  window.localStorage.clear();
  window.open(window.location.host, "_self")
}

function App() {
  

  return (
    <div className="w-screen h-screen">
      <MainContainer />
    </div>
  )
}

export default App
