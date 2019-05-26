const routes = require('next-routes')

module.exports = routes()
  .add('/', '/')
  .add('/login', '/public/authentication/login')
  .add('/register', '/public/authentication/register')
  .add('/dashboard', '/dashboard')

/*
{
  '/about': { page: '/public/about/' },
  '/projects': { page: '/public/projects' },
  '/services': { page: '/public/services' },
  '/blog': { page: '/public/blog' },
  '/contact': { page: '/public/contact' },
  '/privacy': { page: '/public/legal/privacy' },
  '/terms': { page: '/public/legal/terms' },
  '/templates/colors': { page: '/public/templates/colors' },
  '/confirmation': { page: '/public/authentication/confirmation' },
  '/changepassword': { page: '/public/authentication/changepassword' },
  '/forgotpassword': { page: '/public/authentication/forgotpassword' },
  '/search': { page: '/public/search' },
  '/dashboard/profile': { page: '/dashboard/profile' },
  '/admin': { page: '/admin/login' },
  '/admin/menu': { page: '/admin/menu' },
  '/admin/tools': { page: '/admin/tools/modules' },
  '/admin/tools/labels': { page: '/admin/tools/labels' },
  '/admin/pages': { page: '/admin/pages/home' },
  '/admin/pages/about': { page: '/admin/pages/about' },
  '/admin/pages/changepassword': { page: '/admin/pages/changepassword' },
  '/admin/pages/contact': { page: '/admin/pages/contact' },
  '/admin/pages/forgotpassword': { page: '/admin/pages/forgotpassword' },
  '/admin/pages/login': { page: '/admin/pages/login' },
  '/admin/pages/register': { page: '/admin/pages/register' },
  '/admin/pages/privacy': { page: '/admin/pages/privacy' },
  '/admin/pages/terms': { page: '/admin/pages/terms' },
  '/admin/pages/projects': { page: '/admin/pages/projects' },
  '/admin/pages/dashboard': { page: '/admin/pages/dashboard' },
  '/admin/pages/dashboard/profile': { page: '/admin/pages/dashboard/profile' },
  '/admin/pages/blog': { page: '/admin/pages/blog' },
  '/admin/pages/blog/category': { page: '/admin/pages/blog/category' },
  '/admin/pages/blog/post': { page: '/admin/pages/blog/post' },
  '/admin/pages/blog/posts': { page: '/admin/pages/blog/posts' }
}
*/
