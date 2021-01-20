/*import Messages from "./components/Messages/Messages.vue";
import CreateMessage from "./components/Messages/CreateMessage.vue";

export const routes = [
    {
        name: "home",
        path: "/",
        component: Messages,
    },
    {
        name: "create",
        path: "/create",
        component: CreateMessage,
    },
];*/

import AllPosts from './components/AllPosts.vue';
import AddPost from './components/AddPost.vue';
import EditPost from './components/EditPost.vue';

export const routes = [
    {
        name: 'home',
        path: '/',
        component: AllPosts
    },
    {
        name: 'add',
        path: '/add',
        component: AddPost
    },
    {
        name: 'edit',
        path: '/edit/:id',
        component: EditPost
    }
];
