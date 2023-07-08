import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query';

const queryClient = new QueryClient();

const Example: React.FC = () => {
    const { isLoading, error, data } = useQuery({
        queryKey: ['index'],
        queryFn: () => fetch('/api').then((res) => res.json()),
    });

    console.log(data);

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {JSON.stringify(error)}</div>;
    return <h1>Data: {JSON.stringify(data)}</h1>;
};

const App: React.FC = () => (
    <QueryClientProvider client={queryClient}>
        <Example />
    </QueryClientProvider>
);

export default App;
