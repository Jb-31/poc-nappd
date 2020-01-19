import component from './fr-FR/component';
import globalHeader from './fr-FR/globalHeader';
import menu from './fr-FR/menu';
import pwa from './fr-FR/pwa';
import settingDrawer from './fr-FR/settingDrawer';
import settings from './fr-FR/settings';

export default {
  'navBar.lang': 'Langue',
  'layout.user.link.help': 'Aide',
  'layout.user.link.privacy': 'Confidentialité',
  'layout.user.link.terms': 'Terms',
  'app.preview.down.block': 'Download this page to your local project',
  'app.welcome.link.fetch-blocks': 'Get all block',
  'app.welcome.link.block-list': 'Quickly build standard, pages based on `block` development',
  ...globalHeader,
  ...menu,
  ...settingDrawer,
  ...settings,
  ...pwa,
  ...component,
};
