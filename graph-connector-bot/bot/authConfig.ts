import { AppCredentialAuthConfig, OnBehalfOfCredentialAuthConfig } from "@microsoft/teamsfx";

const authConfig: OnBehalfOfCredentialAuthConfig | AppCredentialAuthConfig = {
  authorityHost: process.env.M365_AUTHORITY_HOST,
  clientId: process.env.M365_CLIENT_ID,
  tenantId: process.env.M365_TENANT_ID,
  clientSecret: process.env.M365_CLIENT_SECRET,
};

export default authConfig;