# docusaurus_tab
This repo documents problem using tabs and tabitems for Docusaurus 2.3.1

To reproduce the problem, run `npm run typecheck`

Typescript will return with error

```
> my-website@0.0.0 typecheck
> tsc

src/components/TabEx/TabEx.tsx:9:5 - error TS2322: Type '{ children: Element[]; groupId: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'children' does not exist on type 'IntrinsicAttributes & Props'.

9    <Tabs groupId="demo">
      ~~~~

src/components/TabEx/TabEx.tsx:10:4 - error TS2322: Type '{ children: string; value: string; key: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'children' does not exist on type 'IntrinsicAttributes & Props'.

10   <TabItem value="1" key="1">
      ~~~~~~~

src/components/TabEx/TabEx.tsx:13:4 - error TS2322: Type '{ children: string; value: string; key: string; }' is not assignable to type 'IntrinsicAttributes & Props'.
  Property 'children' does not exist on type 'IntrinsicAttributes & Props'.

13   <TabItem value="2" key="2">
      ~~~~~~~


Found 3 errors in the same file, starting at: src/components/TabEx/TabEx.tsx:9
```

Note that when downgraded to Docusaurus 2.2.0, typescript does not show any problem
