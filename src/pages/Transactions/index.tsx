import { useContext } from "react"
import { 
    PriceHighlight, 
    TransactionContainer, 
    TransactionTable 
} from "./styles"

import { Header } from "../../components/Header"
import { Summary } from "../../components/Summary"
import { SearchForm } from "./components/SearchForm"
import { TransactionsContext } from "../../contexts/types"
import { dateFormatter, priceFormatter } from "../../utils/formatter"

export function Transactions() {
    const { transactions } = useContext(TransactionsContext)

    return (
        <div>
            <Header  />
            <Summary  />
            <TransactionContainer>
            <SearchForm />
            <TransactionTable>
                <tbody>
                    {transactions.map(transaction => {
                        return (
                            <tr key={transaction.id}>
                                <td width="50%">{transaction.description}</td>
                                <td>
                                    <PriceHighlight variant={transaction.type}>
                                        {transaction.type === 'outcome' && '- '}
                                        {priceFormatter(transaction.price)}
                                    </PriceHighlight>
                                </td>
                                <td>{transaction.category}</td>
                                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
                        </tr>
                        )}
                    )}
                </tbody>
            </TransactionTable>
            </TransactionContainer>
        </div>
    )
}