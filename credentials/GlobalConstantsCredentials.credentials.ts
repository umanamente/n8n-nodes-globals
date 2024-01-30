import { ICredentialType, INodeProperties } from "n8n-workflow";

export const GLOBAL_CONSTANTS_CREDENTIALS_NAME = 'globalConstantsApi';

// eslint-disable-next-line n8n-nodes-base/cred-class-name-unsuffixed
export class GlobalConstantsCredentials implements ICredentialType {
	name = GLOBAL_CONSTANTS_CREDENTIALS_NAME;
	// eslint-disable-next-line n8n-nodes-base/cred-class-field-display-name-missing-api
	displayName = 'Global Constants';

	properties: INodeProperties[] = [
		{
			displayName: 'Global Constants',
			name: 'globalConstants',
			type: 'string',
			default: '',
			placeholder: 'name1=value1\nname2=value2',
			hint: 'Use "name=value" format. Separate multiple constants with a new line.',
			typeOptions: {
				rows: 10,
			},
		},
	];
}

export interface GlobalConstantsCredentialsData {
	globalConstants: string;
}
