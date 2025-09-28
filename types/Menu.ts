import {Building2, CircleUserRound, Home, Inbox, UsersRound} from "lucide-vue-next";

export const sidebarMenuList = [
  {
    title: 'Application',
    items: [
      { title: 'Inicio', url: '/', icon: Home },
      { title: 'Notificaciones', url: '/notifications', icon: Inbox },
    ]
  },
  {
    title: 'Sistema',
    items: [
      { title: 'Usuarios', url: '/system/users', icon: UsersRound },
      { title: 'Roles', url: '/system/roles', icon: CircleUserRound },
      { title: 'Organizaciones', url: '/system/organizations', icon: Building2 },
    ]
  }
];