// a //
let orderStatus: "pending"| "shipped"| "delivered"
orderStatus = "delivered"

// b //
enum LogLevel {
    Info,
    Warning,
    Error,
}

const logMessage = (argument:LogLevel, message: string ) => {
    console.log(argument + message)
}

logMessage(LogLevel.Warning, " Mensaje")