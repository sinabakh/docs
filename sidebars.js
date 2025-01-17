module.exports = {
  someSidebar: [
    {
      type: 'doc',
      id: 'getting_started',
    },
    {
      type: 'doc',
      id: 'supported_resources',
    },
    {
      type: 'doc',
      id: 'usage_based_resources',
    },
    {
      type: 'doc',
      id: 'faq',
    },
    {
      type: 'category',
      label: 'Integrations',
      collapsed: false,
      items: [
        'integrations/cicd',
        'integrations/environment_variables',
        'integrations/infracost_api',
      ],
    },
    {
      type: 'category',
      label: 'Infra-as-code tools',
      collapsed: false,
      items: [
        'iac_tools/terraform_cloud_enterprise',
        'iac_tools/terragrunt',
      ],
    },
    {
      type: 'category',
      label: 'Multi-project setups',
      collapsed: false,
      items: [
        'multi_project/config_file',
        'multi_project/report',
      ], 
    },
    {
      type: 'category',
      label: 'Guides',
      collapsed: true,
      items: [
        'guides/v0.8_migration',
        `guides/advanced_usage`,
        'guides/terraform_modules',
      ],
    },
  ]
};
