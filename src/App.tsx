import GlobalStyles from 'styles/GlobalStyles';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { Layout } from 'layouts';
import { Main } from 'pages';

const App = () => {
  const client = new QueryClient();
  return (
    <Layout>
      <GlobalStyles />
      <QueryClientProvider client={client}>
        <Main />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </Layout>
  );
};

export default App;
