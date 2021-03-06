// This file is auto generated by Teams Toolkit to provide you instructions and reference code to call your api.

/*
Your next steps:
1. Run npm install. If your project did not install @microsoft/teamsfx package before, we have added it to package.json for you.
   You need to run the command under "bot" folder instead of project's root folder.
2. Add your API Key to TEAMSFX_API_APIKEYHEADER_API_KEY in "bot/.env.teamsfx.local".

You can now import the API client (an Axios instance) in another file and call apiKeyHeader APIs without worrying about authentication.
Here is an example for a GET request to "relative_path_of_target_api":
```
import { apiKeyHeaderClient } from "relative_path_to_this_file";

const response = await apiKeyHeaderClient.get("relative_path_of_target_api");
// You only need to enter the relative path for your API.
// For example, if you want to call api https://my-api-endpoint/test, and inputted https://my-api-endpoint as API endpoint,
// the code will looks like: const response = await apiKeyHeaderClient.get("test");

const responseBody = response.data;
```

You can refer https://aka.ms/teamsfx-connect-api to learn more.
*/
import { TeamsFx, createApiClient, ApiKeyProvider, ApiKeyLocation } from "@microsoft/teamsfx";

// Loads current app's configuration.
const teamsFx = new TeamsFx();
// Initializes a new axios instance to call apiKeyHeader API.
const authProvider = new ApiKeyProvider(
  "user_inputted_request_header",
  teamsFx.getConfig("TEAMSFX_API_APIKEYHEADER_API_KEY"),
  ApiKeyLocation.Header
);
const apiKeyHeaderClient = createApiClient(teamsFx.getConfig("TEAMSFX_API_APIKEYHEADER_ENDPOINT"), authProvider);
export { apiKeyHeaderClient };

/* 
Setting API configuration for cloud environment: 
We have already set the configuration to .env.teamsfx.local based on your answers. 
Before you deploy your code to cloud using TeamsFx, please follow https://aka.ms/teamsfx-add-appsettings to add following app settings with appropriate value to your Azure environment: 
TEAMSFX_API_APIKEYHEADER_ENDPOINT
TEAMSFX_API_APIKEYHEADER_API_KEY

You can refer https://aka.ms/teamsfx-connect-api to learn more. 
*/