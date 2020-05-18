import {AxiosInstance, AxiosResponse} from "axios";

// @ts-ignore
export async function getSessionId(chosenPlanId: string, axios: AxiosInstance) {
    return axios.get(`stripe/session?chosenPlanId=${chosenPlanId}`)
}

// @ts-ignore
export function checkoutImmediate(saleId?: string, productColorId: string, quantity: number, axios: AxiosInstance) {
    return axios.post(`stripe/checkout-immediate`, [{saleId, productColorId, quantity}])
}

// @ts-ignore
export function checkoutFuture(saleId?: string, productColorId: string, quantity: number, teamOrder?: any, axios: AxiosInstance) {
    if (teamOrder) {
        return axios.post(`stripe/checkout-existing-future`, {
            items: [{saleId, productColorId: productColorId, quantity}],
            teamOrderId: teamOrder.id
        })
    } else {
        return axios.post(`stripe/checkout-future`, [{saleId, productColorId: productColorId, quantity}])
    }
}

// @ts-ignore
export function upsell(chosenPlanId: string, axios: AxiosInstance) {
    return axios.post(`stripe/upsell`, {chosenPlanId})
}

// @ts-ignore
export function downsell(chosenPlanId: string, axios: AxiosInstance) {
    return axios.post(`stripe/downsell`, {chosenPlanId})
}

// @ts-ignore
export function churn(axios: AxiosInstance) {
    return axios.post(`stripe/downsell`, {})
}

export async function getInvoices(axios: AxiosInstance): Promise<AxiosResponse> {
    return axios.get(`stripe/invoices/past`)
}

export async function getUpcomingInvoices(axios: AxiosInstance): Promise<AxiosResponse> {
    return axios.get(`stripe/invoices/upcoming`)
}
