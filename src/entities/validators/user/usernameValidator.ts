export function usernameValidator(username: string) {
    if (username.length < 3 || username.length > 32) return false;
    if (username.startsWith(".") || username.startsWith("_")) return false;
    if (username.includes(" ")) return false;
    if (username.match(/[^a-zA-Z0-9._]/)) return false;
    return true;
}
