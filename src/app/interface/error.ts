
type TErrorSources={
    path:string|number,
    message:string
}[]

export type TGeneraleErrorResponse={
    statusCode:number,
    message:string,
     errorSources:TErrorSources
}