export const dateFormatter = new Intl.DateTimeFormat('pt-BR');

export const priceFormatter = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value);
};