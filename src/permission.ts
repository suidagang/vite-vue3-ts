import { router } from './router/index';
import NProgress from 'nprogress'; // progress bar
import 'nprogress/nprogress.css'; // progress bar style
import { openLink } from './utils/link';

router.beforeEach((to, from, next) => {
  NProgress.start();
  const externalLink: string = to?.name as string;

  if (externalLink && externalLink.includes('http')) {
    openLink(externalLink);
    NProgress.done();
  } else {
    next();
  }
});
router.afterEach(() => {
  NProgress.done();
});
