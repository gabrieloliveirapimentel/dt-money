import { useEffect, useState } from "react";
import { ITransaction, ITransactionProviderProps, TransactionsContext } from "./types";
import { api } from "../lib/axios";

export function TransactionProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    async function fetchTransactions(query?: string) {
        const response = await api.get('/transactions', {
            params: {
                q: query,
            }
        })

        setTransactions(response.data);
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