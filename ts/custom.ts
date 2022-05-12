// This file is auto generated by Teams Toolkit to provide you instructions and reference code to call your api.

/*
Your next steps:
1. Run npm install. If your project did not install @microsoft/teamsfx package before, we have added it to package.json for you.
   You need to run the command under "bot" folder instead of project's root folder.
2. Refer sample code and comments in this file to implement your auth provider.

You can now import the API client (an Axios instance) in another file and call custom APIs without worrying about authentication.
Here is an example for a GET request to "relative_path_of_target_api":
```
import { customClient } from "relative_path_to_this_file";

const response = await customClient.get("relative_path_of_target_api");
// You only need to enter the relative path for your API.
// For example, if you want to call api https://my-api-endpoint/test, and inputted https://my-api-endpoint as API endpoint,
// the code will looks like: const response = await customClient.get("test");

const responseBody = response.data;
```

You can refer https://aka.ms/teamsfx-connect-api to learn more.
*/
import { TeamsFx, createApiClient, AuthProvider } from "@microsoft/teamsfx";
import { AxiosRequestConfig } from "axios";

// The custom authProvider should implement the AuthProvider interface.
// Here is a sample authProvider class. It will set custom property in the request header
class CustomAuthProvider implements AuthProvider {
  customProperty: string;
  customValue: string;

  constructor(customProperty: string, customValue: string) {
    this.customProperty = customProperty;
    this.customValue = customValue;
  }

  // TODO: Replace the sample code with your own logic.
  AddAuthenticationInfo: (config: AxiosRequestConfig) => Promise<AxiosRequestConfig> = async (
    config
  ) => {
    if (!config.headers) {
      config.headers = {};
    }
    config.headers[this.customProperty] = this.customValue;
    return config;
  };
}

// Loads current app's configuration.
const teamsFx = new TeamsFx();

const authProvider = new CustomAuthProvider(
  // You can also add customized settings to .env.teamsfx.local and use TeamsFx.getConfig("{setting_name}") to read the settings. For example:
  //  teamsFx.getConfig("TEAMSFX_API_CUSTOM_CUSTOM_PROPERTY"),
  //  teamsFx.getConfig("TEAMSFX_API_CUSTOM_CUSTOM_VALUE")
  "customPropery",
  "customValue"
);
// Initializes a new axios instance to call custom API.
const customClient = createApiClient(
  teamsFx.getConfig("TEAMSFX_API_CUSTOM_ENDPOINT"),
  authProvider
);
export { customClient };

/* 
Setting API configuration for cloud environment: 
We have already set the configuration to .env.teamsfx.local based on your answers. 
Before you deploy your code to cloud using TeamsFx, please follow https://aka.ms/teamsfx-add-appsettings to add following app settings with appropriate value to your Azure environment: 
TEAMSFX_API_CUSTOM_ENDPOINT

You can refer https://aka.ms/teamsfx-connect-api to learn more. 
*/