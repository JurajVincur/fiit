// @ts-check

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.

 @type {import('@docusaurus/plugin-content-docs').SidebarsConfig}
 */
const sidebars = {
  projectsSidebar: [
    {
      type: 'doc',
      id: 'projects/index',
      label: 'Projekty'
    }
  ],
  msoftSidebar: [
    {
      type: 'doc',
      id: 'msoft/index',
      label: 'O predmete'
    },
    {
      type: 'category',
      label: 'Projekt',
      items: [
        {
          type: 'doc',
          id: 'msoft/project/part1',
          label: 'Časť 1'
        },
        {
          type: 'doc',
          id: 'msoft/project/part23',
          label: 'Časti 2-3'
        },
        {
          type: 'doc',
          id: 'msoft/project/part46',
          label: 'Časti 4-6'
        }
      ]
    },
    {
      type: 'doc',
      id: 'msoft/schedule',
      label: 'Harmonogram'
    }
  ]
};

export default sidebars;
