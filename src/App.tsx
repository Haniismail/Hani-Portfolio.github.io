import { LanguageProvider } from "./context/LanguageContext";
import Index from "./pages/Index";

function App() {
  return (
    <LanguageProvider>
      <Index />
    </LanguageProvider>
  );
}

export default App;
