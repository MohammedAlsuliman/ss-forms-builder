
export interface ToastParams {
    message: string | {default: string},
    value?:any,
    actionName?: string,
    duration?: number
}
