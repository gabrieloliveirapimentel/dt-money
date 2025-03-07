import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from "phosphor-react";
import { SummaryCard, SummaryContainer } from "./styles";
import { useTheme } from "styled-components";
import { useContext } from "react";
import { TransactionsContext } from "../../contexts/TransactionsContext";

export function Summary() {
    const { transactions } = useContext(TransactionsContext)
    const theme = useTheme()

    console.log(transactions)

    return (
        <SummaryContainer>
            <SummaryCard>
                <header>
                    <span>Entradas</span>
                    <ArrowCircleUp size={32} color={theme["green-300"]}/>
                </header>
                <strong>R$1000,00</strong>
            </SummaryCard>
            <SummaryCard>
                <header>
                    <span>Saídas</span>
                    <ArrowCircleDown size={32} color={theme["red-300"]} />
                </header>
                <strong>R$1000,00</strong>
            </SummaryCard>
            <SummaryCard variant="green">
                <header>
                    <span>Total</span>
                    <CurrencyDollar size={32} color={theme.white}/>
                </header>
                <strong>R$1000,00</strong>
            </SummaryCard>
        </SummaryContainer>
    )
}