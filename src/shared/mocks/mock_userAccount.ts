import { BalanceProps } from "shared/types/balance"

export const mock_user_fields = {
    short: [
        {
            label: "User name",
            type: "text",
            name: "username"
        },
        {
            label: "First name",
            type: "text",
            name: "firstname"
        },
        {
            label: "Last name",
            type: "text",
            name: "lastname"
        },
        {
            label: "Email",
            type: "email",
            name: "email"
        },
        {
            label: "Phone",
            type: "phone",
            name: "phone"
        }
    ],
    flex: [
        {
            label: "Avanza AF kontonummer (Akite & Fondkonto) obs!",
            type: "text",
            name: "avanza"
        },
        {
            label: "Nordnet AF kontonummer (Akite & Fondkonto) obs!",
            type: "text",
            name: "nordnet"
        }
    ]
}

export const mock_user_balance: BalanceProps[] = [
    {
        title: "balance",
        count: "135,44",
        currency: "sek"
    },
    {
        title: "profitability",
        count: "8.983,66",
        currency: "sek",
        profit: "+5.63%"
    },
    {
        title: "rating",
        count: "387",
        profit: "+4"
    }
]

export const mock_user_icons = {
    avatar: "/assets/image/bigUser.png",
    camera: "/assets/icons/Camera.svg"
}