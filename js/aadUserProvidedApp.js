// This file is auto generated by Teams Toolkit to provide you instructions and reference code to call your api.

/*
Your next steps:
1. Run npm install. If your project did not install @microsoft/teamsfx package before, we have added it to package.json for you.
   You need to run the command under "bot" folder instead of project's root folder.
2. Replace "<your-api-scope>" in this file with actual scope required by the API.
3. Add your client secret to TEAMSFX_API_AADANOTHERAPP_CLIENT_SECRET in "bot/.env.teamsfx.local".

You can now import the API client (an Axios instance) in another file and call aadAnotherApp APIs without worrying about authentication.
Here is an example for a GET request to "relative_path_of_target_api":
```
const { aadAnotherAppClient } = require("relative_path_to_this_file");

const response = await aadAnotherAppClient.get("relative_path_of_target_api");
// You only need to enter the relative path for your API.
// For example, if you want to call api https://my-api-endpoint/test, and inputted https://my-api-endpoint as API endpoint,
// the code will looks like: const response = await aadAnotherAppClient.get("test");

const responseBody = response.data;
```

If you added this API while local debugging, please stop local debugging and start again because local debugging will not hot reload changes to .env.teamsfx.local


You can refer https://aka.ms/teamsfx-connect-api to learn more.
*/
const teamsfxSdk = require("@microsoft/teamsfx");

// Loads current app's configuration, the sample uses client credential flow to acquire token for your API.
const teamsFx = new teamsfxSdk.TeamsFx(teamsfxSdk.IdentityType.App, {
  // You can replace the default authorityHost url with actual value per your requirement.
  authorityHost: "https://login.microsoftonline.com",
  tenantId: process.env.TEAMSFX_API_AADANOTHERAPP_TENANT_ID,
  clientId: process.env.TEAMSFX_API_AADANOTHERAPP_CLIENT_ID,
  // Please add your client secret to .env.teamsfx.local before local debugging.
  clientSecret: process.env.TEAMSFX_API_AADANOTHERAPP_CLIENT_SECRET,
});
// Initializes a new axios instance to call aadAnotherApp API.
const appCredential = teamsFx.getCredential();
const authProvider = new teamsfxSdk.BearerTokenAuthProvider(
  // TODO: Please replace '<your-api-scope>' with actual api scope value.
  async () => (await appCredential.getToken("<your-api-scope>")).token
);
const aadAnotherAppClient = teamsfxSdk.createApiClient(
  teamsFx.getConfig("TEAMSFX_API_AADANOTHERAPP_ENDPOINT"),
  authProvider
);
module.exports.aadAnotherAppClient = aadAnotherAppClient;

/* 
Setting API configuration for cloud environment: 
We have already set the configuration to .env.teamsfx.local based on your answers. 
Before you deploy your code to cloud using TeamsFx, please follow https://aka.ms/teamsfx-add-appsettings to add following app settings with appropriate value to your Azure environment: 
TEAMSFX_API_AADANOTHERAPP_ENDPOINT
TEAMSFX_API_AADANOTHERAPP_TENANT_ID
TEAMSFX_API_AADANOTHERAPP_CLIENT_ID
TEAMSFX_API_AADANOTHERAPP_CLIENT_SECRET

You can refer https://aka.ms/teamsfx-connect-api to learn more. 
*/