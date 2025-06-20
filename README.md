# <img src="nodes/GlobalConstants/globals-icon-60px.png"  height="60" style="margin-bottom: -20px;"> n8n-nodes-globals

This is an n8n community node. It lets you create global constants that can be used in any workflow.

* [Installation](#installation)  
* [Usage](#usage)
* [Version history](CHANGELOG.md)  

## Installation

Follow the [installation guide](https://docs.n8n.io/integrations/community-nodes/installation/) in the n8n community nodes documentation.

## Usage

This node uses N8N Credential to store the global variables.

1. Add "`Global Constants`" node to your workflow.
   ![Global Constants node](./docs/images/usage/1_select_node.png)
2. In the node configuration, either select an existing credential or create a new one.
3. Select the format for your global constants:
   - Key-value pairs format: Use "name=value" pairs, one per line
   - JSON format: Provide constants as a JSON object
4. Add your constants according to the chosen format:
   
   KeyKey-value pairs
   ![Define constants String](./docs/images/usage/2_define_constants_string.png)

   JSON
   ![Define constants](./docs/images/usage/2_define_constants_json.png)
5. Use the global constants in your workflow
   ![Use constants](./docs/images/usage/3_use_node.png)

