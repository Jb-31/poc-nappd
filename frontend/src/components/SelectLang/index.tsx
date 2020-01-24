import { Icon, Menu } from 'antd';
import { formatMessage, getLocale, setLocale } from 'umi-plugin-react/locale';

import { ClickParam } from 'antd/es/menu';
import React from 'react';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

interface SelectLangProps {
  className?: string;
}
const SelectLang: React.FC<SelectLangProps> = props => {
  const { className } = props;
  const selectedLang = getLocale();
  const changeLang = ({ key }: ClickParam): void => setLocale(key);
  const locales = ['fr-FR', 'en-US'];
  const languageLabels = {
    'fr-FR': 'Français',
    'en-US': 'English',
  };
  const languageIcons = {
    'fr-FR': '🇺🇸',
    'en-US': '🇺🇸',
  };
  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames(styles.dropDown, className)}>
        <Icon type="global" title={formatMessage({ id: 'navBar.lang' })} />
      </span>
    </HeaderDropdown>
  );
};

export default SelectLang;
