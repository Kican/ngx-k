export class UrlUtils {
	public static jsonToQueryString(json: {}): string {
		return '?' + Object.keys(json).filter(x => x != null && json[x] != null).map(key => `${key}=${json[key].toString()}`).join('&');
	}
}
