import useSWR from "swr";



const fetcher = (...args) => fetch(...args).then(res => res.json())

export const useFetch = (path) => {
    const { data, error, isLoading } = useSWR(path, fetcher);

    return { data, error, isLoading };
}



export const useMessage = () => {
    const { data, error, isLoading } = useFetch('/api/message');

    return { message:data, error, isLoading };
}