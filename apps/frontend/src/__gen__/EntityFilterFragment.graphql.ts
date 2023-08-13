/**
 * @generated SignedSource<<442600aaa11c2305ea329b433b67ea9e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type EntityFilterFragment$data = {
  readonly ownerEntities: {
    readonly __id: string;
    readonly edges: ReadonlyArray<{
      readonly node: {
        readonly id: string;
        readonly name: string;
      };
    }>;
  };
  readonly " $fragmentType": "EntityFilterFragment";
};
export type EntityFilterFragment$key = {
  readonly " $data"?: EntityFilterFragment$data;
  readonly " $fragmentSpreads": FragmentRefs<"EntityFilterFragment">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "EntityFilterFragment",
  "selections": [
    {
      "alias": null,
      "args": [
        {
          "kind": "Literal",
          "name": "first",
          "value": 100
        },
        {
          "kind": "Literal",
          "name": "sorting",
          "value": [
            {
              "direction": "ASC",
              "field": "name"
            }
          ]
        }
      ],
      "concreteType": "OwnerEntityConnection",
      "kind": "LinkedField",
      "name": "ownerEntities",
      "plural": false,
      "selections": [
        {
          "alias": null,
          "args": null,
          "concreteType": "OwnerEntityEdge",
          "kind": "LinkedField",
          "name": "edges",
          "plural": true,
          "selections": [
            {
              "alias": null,
              "args": null,
              "concreteType": "OwnerEntity",
              "kind": "LinkedField",
              "name": "node",
              "plural": false,
              "selections": [
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "id",
                  "storageKey": null
                },
                {
                  "alias": null,
                  "args": null,
                  "kind": "ScalarField",
                  "name": "name",
                  "storageKey": null
                }
              ],
              "storageKey": null
            }
          ],
          "storageKey": null
        },
        {
          "kind": "ClientExtension",
          "selections": [
            {
              "alias": null,
              "args": null,
              "kind": "ScalarField",
              "name": "__id",
              "storageKey": null
            }
          ]
        }
      ],
      "storageKey": "ownerEntities(first:100,sorting:[{\"direction\":\"ASC\",\"field\":\"name\"}])"
    }
  ],
  "type": "Query",
  "abstractKey": null
};

(node as any).hash = "6ad524ef1cfa37b93ba7a5c980ba0466";

export default node;
