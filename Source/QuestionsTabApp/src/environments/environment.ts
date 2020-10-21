export const environment = {
    production: false,
    apiBaseUrl: "https://okissqbot.azurewebsites.net/api/Request/",
    selfUrl: "https://okissqbot-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "cab2f6ad-c37f-48f6-bb53-3bb35a150091",
        clientId: "b27dd14b-2fd8-430e-8461-e2b857d76a7a",
        redirectUri: "/app-silent-end",
        cacheLocation: "localStorage",
        navigateToLoginRequestUrl: false,
        extraQueryParameters: "",
        popUp: true,
        popUpUri: "/app-silent-start",
        popUpWidth: 600,
        popUpHeight: 535
    },

    // do not populate the following:
    upn: "",
    tid: "",
    gid: "",
    cname: ""
};
