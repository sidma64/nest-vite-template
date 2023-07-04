import useSWR from 'swr';

class API {
    url: string;
    constructor(url: string) {
        this.url = url;
    }
    async get() {
        const response = await fetch(this.url);
        const data = await response.json();
        return data;
    }

    use(path: string) {
        return useSWR(path, this.get);
    }
}

const api = new API('http://localhost:3000');

function App() {
    const { data, error, isLoading } = api.use('/');
    if (isLoading) return <h1>Loading...</h1>;
    if (error) return <h1>{`Error: ${error}`}</h1>;
    return <h1>{data}</h1>;
}

export default App;
