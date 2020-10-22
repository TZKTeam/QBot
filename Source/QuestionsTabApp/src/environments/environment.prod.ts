export const environment = {
    production: false,
     apiBaseUrl: "https:/qbottesting.azurewebsites.net/api/Request/",
     selfUrl: "https:/qbottesting-questions.azurewebsites.net",

    authConfig: {
        instance: "https://login.microsoftonline.com/",
        tenantId: "6b022901-4576-4f52-bac4-71fbe4e58816",
        clientId: "958433db-ff72-4487-8fc9-293fff1267ce",
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
