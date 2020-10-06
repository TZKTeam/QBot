export const environment = {
    production: false,
    apiBaseUrl: "https://qbotdemotzchay.azurewebsites.net/api/Request/",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "aa81ea33-cf73-444b-b305-006b188a8fb4",
        clientId: "2c35d24f-b159-4fc4-b9cd-ec85ff557330",
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
