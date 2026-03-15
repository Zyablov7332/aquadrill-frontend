export function setCookie(name, value, options = {}) {
    if (typeof document === 'undefined')
        return;
    const { days = 180, path = '/', sameSite = 'Lax', secure = window.location.protocol === 'https:', } = options;
    const expires = new Date(Date.now() + days * 24 * 60 * 60 * 1000).toUTCString();
    document.cookie = [
        `${encodeURIComponent(name)}=${encodeURIComponent(value)}`,
        `expires=${expires}`,
        `path=${path}`,
        `SameSite=${sameSite}`,
        secure ? 'Secure' : '',
    ]
        .filter(Boolean)
        .join('; ');
}
export function getCookie(name) {
    if (typeof document === 'undefined')
        return null;
    const encodedName = `${encodeURIComponent(name)}=`;
    const cookies = document.cookie.split('; ');
    for (const cookie of cookies) {
        if (cookie.startsWith(encodedName)) {
            return decodeURIComponent(cookie.slice(encodedName.length));
        }
    }
    return null;
}
export function deleteCookie(name, path = '/') {
    if (typeof document === 'undefined')
        return;
    document.cookie = [
        `${encodeURIComponent(name)}=`,
        'expires=Thu, 01 Jan 1970 00:00:00 GMT',
        `path=${path}`,
        'SameSite=Lax',
    ].join('; ');
}
