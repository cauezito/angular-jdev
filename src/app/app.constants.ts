export class Constants{
    public static get server() : string {
        return "http://localhost:7789/";
    }

    public static get login() : string {
        return this.server + "rest/login";
    }

    public static get url() : string {
        return this.server + "rest/user/";
    }

    public static get path(): string {
        return this.server + "rest/";
    }
}