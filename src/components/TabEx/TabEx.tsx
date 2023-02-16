import React from 'react';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

// This module demonstrates the problem with tabs in Docusaurus 2.3.1
export function problem(): JSX.Element {
  return (
	<>
	  <Tabs groupId="demo">
		<TabItem value="1" key="1">
			Item 1
		</TabItem>
		<TabItem value="2" key="2">
			Item 2
		</TabItem>
	  </Tabs>
	</>
  )
}