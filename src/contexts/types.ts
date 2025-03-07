import { createContext, ReactNode } from "react";

export interface ITransaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createAt: string;
}

export interface ITransactionContextType {
    transactions: ITransaction[];
    fetchTransactions: (query?: string) => Promise<void>;
}

export interface ITransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionContextType)