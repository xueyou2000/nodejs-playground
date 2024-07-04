/**
 * 打印日志
 * @param message 
 */
export function print(message: string) {
    console.log(`[${new Date().toLocaleString()}] ${message}`);
}