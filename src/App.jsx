import Header from "./Header";
import MainBody from "./MainBody";
import Footer from "./Footer";

function App() {
  return (
    <div className="app min-h-screen bg-slate-50 dark:bg-black dark:text-white">
      <Header />
      <MainBody />
      <Footer />
    </div>
  );
}

export default App;
