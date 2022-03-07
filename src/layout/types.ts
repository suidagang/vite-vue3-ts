import { RouteRecordRaw } from 'vue-router';
export type routeMetaType = {
  title?: string;
  i18n?: boolean;
  icon?: string;
  showLink?: boolean;
  savedPosition?: boolean;
  authority?: Array<string>;
  hidden?: boolean;
};

export type RouteConfigs = RouteRecordRaw & {
  path?: string;
  parentPath?: string;
  query?: object;
  meta?: routeMetaType;
  children?: RouteConfigs[];
  name?: string;
};

export type multiTagsType = {
  tags: Array<RouteConfigs>;
};
