import { useEffect, useState } from "react";
import { ITransaction, ITransactionProviderProps, TransactionsContext } from "./types";

export function TransactionProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function fetchTransactions(query?: string) {
        const url = new URL('http://localhost:3333/transactions');

        if (query) {
            url.searchParams.append('q', query);
        }
        
        const response = await fetch(url);
        const data = await response.json();

        setTransactions(data);
    }

    useEffect(() => {
        fetchTransactions()
    }, [])

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions}}>
            {children}
        </TransactionsContext.Provider>
    )
}