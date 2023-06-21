import { HomePage, FollowPage, UploadPage, ProfilePage, LivePage, ErrorPage } from '../pages';
import HeaderOnly from '../Components/Layouts/HeaderOnly';
// import ContentOnly from '../Components/Layouts/ContentOnly';
import routeConfig from '../configs/routes';
import ContentOnly from '../Components/Layouts/ContentOnly';

const routes = [
    {
        path: routeConfig.home,
        component: HomePage,
    },
    {
        path: routeConfig.follow,
        component: FollowPage,
    },
    {
        path: routeConfig.upload,
        component: UploadPage,
        layout: HeaderOnly,
    },
    {
        path: routeConfig.profile,
        component: ProfilePage,
    },
    {
        path: routeConfig.live,
        component: LivePage,
    },
    {
        path: routeConfig.error,
        component: ErrorPage,
        layout: ContentOnly,
    },
];

// Lưu ý không thêm @trước: vì từ phiên bản mới, ko sử dụng @ nữa, còn bên file accountItem, nếu muốn thêm @
// thì ta vẫn có thể thêm như bình thường

export default routes;
