/**
 * @generated SignedSource<<d49c82c1f0515cd7f26593f86a78198c>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type AddLinkMutation$variables = {
  actualUrl: string;
  connections: ReadonlyArray<string>;
  entityId: string;
  name: string;
  redirectUrl: string;
};
export type AddLinkMutation$data = {
  readonly createOneLink: {
    readonly actualUrl: string;
    readonly approved: boolean;
    readonly createdAt: any;
    readonly createdBy: string;
    readonly entity: {
      readonly name: string;
    } | null;
    readonly id: string;
    readonly name: string;
    readonly redirectUrl: string;
    readonly updatedAt: any;
  };
};
export type AddLinkMutation = {
  response: AddLinkMutation$data;
  variables: AddLinkMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "actualUrl"
},
v1 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "connections"
},
v2 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "entityId"
},
v3 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "name"
},
v4 = {
  "defaultValue": null,
  "kind": "LocalArgument",
  "name": "redirectUrl"
},
v5 = [
  {
    "fields": [
      {
        "fields": [
          {
            "kind": "Variable",
            "name": "actualUrl",
            "variableName": "actualUrl"
          },
          {
            "kind": "Variable",
            "name": "entityId",
            "variableName": "entityId"
          },
          {
            "kind": "Variable",
            "name": "name",
            "variableName": "name"
          },
          {
            "kind": "Variable",
            "name": "redirectUrl",
            "variableName": "redirectUrl"
          }
        ],
        "kind": "ObjectValue",
        "name": "link"
      }
    ],
    "kind": "ObjectValue",
    "name": "input"
  }
],
v6 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v7 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdAt",
  "storageKey": null
},
v8 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "updatedAt",
  "storageKey": null
},
v9 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "name",
  "storageKey": null
},
v10 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "actualUrl",
  "storageKey": null
},
v11 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "redirectUrl",
  "storageKey": null
},
v12 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "approved",
  "storageKey": null
},
v13 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "createdBy",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": [
      (v0/*: any*/),
      (v1/*: any*/),
      (v2/*: any*/),
      (v3/*: any*/),
      (v4/*: any*/)
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "AddLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "createOneLink",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "OwnerEntity",
            "kind": "LinkedField",
            "name": "entity",
            "plural": false,
            "selections": [
              (v9/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [
      (v1/*: any*/),
      (v3/*: any*/),
      (v0/*: any*/),
      (v4/*: any*/),
      (v2/*: any*/)
    ],
    "kind": "Operation",
    "name": "AddLinkMutation",
    "selections": [
      {
        "alias": null,
        "args": (v5/*: any*/),
        "concreteType": "Link",
        "kind": "LinkedField",
        "name": "createOneLink",
        "plural": false,
        "selections": [
          (v6/*: any*/),
          (v7/*: any*/),
          (v8/*: any*/),
          (v9/*: any*/),
          (v10/*: any*/),
          (v11/*: any*/),
          {
            "alias": null,
            "args": null,
            "concreteType": "OwnerEntity",
            "kind": "LinkedField",
            "name": "entity",
            "plural": false,
            "selections": [
              (v9/*: any*/),
              (v6/*: any*/)
            ],
            "storageKey": null
          },
          (v12/*: any*/),
          (v13/*: any*/)
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v5/*: any*/),
        "filters": null,
        "handle": "appendNode",
        "key": "",
        "kind": "LinkedHandle",
        "name": "createOneLink",
        "handleArgs": [
          {
            "kind": "Variable",
            "name": "connections",
            "variableName": "connections"
          },
          {
            "kind": "Literal",
            "name": "edgeTypeName",
            "value": "LinkEdge"
          }
        ]
      }
    ]
  },
  "params": {
    "cacheID": "895c02fc24de82d32d6764256a0168b3",
    "id": null,
    "metadata": {},
    "name": "AddLinkMutation",
    "operationKind": "mutation",
    "text": "mutation AddLinkMutation(\n  $name: String!\n  $actualUrl: String!\n  $redirectUrl: String!\n  $entityId: ID!\n) {\n  createOneLink(input: {link: {name: $name, actualUrl: $actualUrl, redirectUrl: $redirectUrl, entityId: $entityId}}) {\n    id\n    createdAt\n    updatedAt\n    name\n    actualUrl\n    redirectUrl\n    entity {\n      name\n      id\n    }\n    approved\n    createdBy\n  }\n}\n"
  }
};
})();

(node as any).hash = "3ba7885727408e282595b1ff8076b47c";

export default node;
