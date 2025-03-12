import { ReactNode } from "react";
import { createContext } from "use-context-selector";

export interface ITransaction {
    id: number;
    description: string;
    type: 'income' | 'outcome';
    price: number;
    category: string;
    createdAt: string;
}

export interface ICreateTransactionInput {
    description: string;
    price: number;
    category: string;
    type: 'income' | 'outcome';
}

export interface ITransactionContextType {
    transactions: ITransaction[];
    fetchTransactions: (query?: string) => Promise<void>;
    createTransaction: (data: ICreateTransactionInput) => Promise<void>;
}

export interface ITransactionProviderProps {
    children: ReactNode;
}

export const TransactionsContext = createContext({} as ITransactionContextType)