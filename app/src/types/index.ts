export interface IUser {
    card_number: string,
    type: string,
    cardholder_name: string,
    valid: string,
    balance: number,
    transaction_history: ITransactionHistory[],
}

export interface ITransactionHistory {
    title: string,
    icon_url: string,
    date: string,
    amount: string,
}

export interface ICurrencyRate {
    CharCode: string,
    ID: string,
    Name: string,
    Nominal: number,
    NumCode: string,
    Previous: number,
    Value: number,
}

export interface IMainState {
    currencyRate: any,
    currentUser: IUser | null,
    selectedCurrancy: string,
    isLoading: boolean,
}

export interface ICurrencyList {
    value: string,
    title: string,
    sign: string,
}