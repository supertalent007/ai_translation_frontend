// assets
import { IconCloudUpload, IconBrandDatabricks, IconHelpHexagon, IconCashBanknote, IconMessage } from '@tabler/icons-react';

// constant
const icons = { IconCloudUpload, IconBrandDatabricks, IconHelpHexagon, IconCashBanknote, IconMessage };

// ==============================|| SAMPLE PAGE & DOCUMENTATION MENU ITEMS ||============================== //

const other = {
  id: 'sample-docs-roadmap',
  type: 'group',
  children: [
    {
      id: 'uploads',
      title: 'Uploads',
      type: 'item',
      url: '/uploads',
      icon: icons.IconCloudUpload,
      breadcrumbs: false
    },
    {
      id: 'my_data',
      title: 'My Data',
      type: 'item',
      url: '/translations',
      icon: icons.IconBrandDatabricks,
      breadcrumbs: false
    },
    {
      id: 'pricing',
      title: 'Subscriptions',
      type: 'item',
      url: '/plans',
      icon: icons.IconCashBanknote,
      breadcrumbs: false
    },
    {
      id: 'faq',
      title: 'FAQ',
      type: 'item',
      url: '/faq',
      icon: icons.IconHelpHexagon,
      breadcrumbs: false
    },
    {
      id: 'contact',
      title: 'Contact Us',
      type: 'item',
      url: '/contact-us',
      icon: icons.IconMessage,
      breadcrumbs: false
    },
  ]
};

export default other;
