import { useEffect, useState, useCallback } from "react";
import { ICreateTransactionInput, ITransaction, ITransactionProviderProps, TransactionsContext } from "./types";
import { api } from "../lib/axios";

export function TransactionProvider({ children }: ITransactionProviderProps) {
    const [transactions, setTransactions] = useState<ITransaction[]>([])

    const fetchTransactions = useCallback(async (query?: string) => {
        const response = await api.get('/transactions', {
            params: {
                _sort: 'createdAt',
                _order: 'desc',
                q: query,
            }
        })

        setTransactions(response.data);
    }, [])

    const createTransaction = useCallback(async  (data: ICreateTransactionInput) => {
        const { description, price, category, type} = data

        const response = await api.post('/transactions', {
            description,
            price,
            category,
            type,
            createdAt: new Date()
        })

        setTransactions(state => [response.data, ...state])
    }, [])

    useEffect(() => {
        fetchTransactions()
    }, [fetchTransactions])

    return (
        <TransactionsContext.Provider value={{ transactions, fetchTransactions, createTransaction}}>
            {children}
        </TransactionsContext.Provider>
    )
}