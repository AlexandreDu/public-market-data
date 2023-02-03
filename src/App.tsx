import { Layout } from './components/layout';
import { ClientRoutes } from './components/clientRoutes';
import { ThemesProvider } from './components/themesProvider';

function App() {
  return (
    <>
      <ThemesProvider>
        <Layout>
          <ClientRoutes />
        </Layout>
      </ThemesProvider>
    </>
  );
}

export default App;
