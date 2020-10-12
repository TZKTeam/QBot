export const environment = {
    production: false,
    apiBaseUrl: "https://mthazinademoqbot.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "cab2f6ad-c37f-48f6-bb53-3bb35a150091",
        clientId: "386e13d8-0f7c-4226-a122-446901e4fa84",
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
};
