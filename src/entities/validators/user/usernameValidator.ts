export function usernameValidator(username: string) {
    if (username.length < 3 || username.length > 32) return false;
    return true;
}
