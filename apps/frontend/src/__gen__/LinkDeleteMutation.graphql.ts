/**
 * @generated SignedSource<<31a9f1a34ee9ffa4f311ff0e8d93e618>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type LinkDeleteMutation$variables = {
  connections: ReadonlyArray<string>;
  id: string;
};
export type LinkDeleteMutation$data = {
  readonly deleteOneLink: {
    readonly id: string | null;
  };
};
export type LinkDeleteMutation = {
  response: LinkDeleteMutation$data;
  variables: LinkDeleteMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "id"
  }
],
v1 = [
  {
    "fields": [
      {
        "kind": "Variable",
        "name": "id",
        "variableName": "id"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v2 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "LinkDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LinkDeleteResponse",
        "kind": "LinkedField",
        "name": "deleteOneLink",
        "plural": false,
        "selections": [
          (v2/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "LinkDeleteMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "LinkDeleteResponse",
        "kind": "LinkedField",
        "name": "deleteOneLink",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "id",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "21ff037dcc3c1a8bba89a58c04663969",
    "id": null,
    "metadata": {},
    "name": "LinkDeleteMutation",
    "operationKind": "mutation",
    "text": "mutation LinkDeleteMutation(\n  $id: ID!\n) {\n  deleteOneLink(input: {id: $id}) {\n    id\n  }\n}\n"
  }
};
})();

(node as any).hash = "a489e48c22fe52b2fa452e9203fa351a";

export default node;
