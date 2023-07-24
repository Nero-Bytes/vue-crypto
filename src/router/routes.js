import store from "@/state/store";
export default [
  {
    path: "/login",
    name: "login",
    component: () => import("../views/account/login.vue"),
    meta: {
      title: "Login",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/account/register.vue"),
    meta: {
      title: "Register",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },
  {
    path: "/forgot-password",
    name: "Forgot password",
    component: () => import("../views/account/forgot-password.vue"),
    meta: {
      title: "Forgot Password",
      beforeResolve(routeTo, routeFrom, next) {
        // If the user is already logged in
        if (store.getters["auth/loggedIn"]) {
          // Redirect to the home page instead
          next({ name: "default" });
        } else {
          // Continue to the login page
          next();
        }
      },
    },
  },

  // User
    {
    path: "/",
    name: "crypto default",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/crypto/index"),
  },
  {
    path: "/orders",
    name: "crypto orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/apps/crypto/orders"),
  },
  {
    path: "/leads",
    name: "crypto leads",
    meta: { title: "Leads", authRequired: true },
    component: () => import("../views/apps/crm/leads"),
  },
  {
    path: "/buy-sell",
    name: "crypto buy/sell",
    meta: { title: "Buy & Sell", authRequired: true },
    component: () => import("../views/apps/crypto/buy-sell"),
  },
  {
    path: "/strategies",
    name: "crypto strategies",
    meta: { title: "Strategies ", authRequired: true },
    component: () => import("../views/apps/crypto/ico"),
  },
  {
    path: "/my-wallet",
    name: "crypto wallet",
    meta: { title: "My Wallet", authRequired: true },
    component: () => import("../views/apps/crypto/wallet"),
  },
  {
    path: "/positions",
    name: "crypto Positions",
    meta: { title: "Positions", authRequired: true },
    component: () => import("../views/apps/crypto/positions"),
  },
  {
    path: "/transactions",
    name: "crypto transactions",
    meta: { title: "Transactions", authRequired: true },
    component: () => import("../views/apps/crypto/transactions"),
  },
  {
    path: "/billing",
    name: "crypto billing",
    meta: { title: "Billing", authRequired: true },
    component: () => import("../views/apps/crypto/transactions"),
  },
  {
    path: "/broker",
    name: "broker",
    meta: { title: "broker", authRequired: true },
    component: () => import("../views/apps/nft/nft-wallet"),
  },
  {
    path: "/profile-kyc",
    name: "crypto kyc",
    meta: { title: "KYC Application", authRequired: true },
    component: () => import("../views/apps/crypto/kyc"),
  },
  {
    path: "/profile",
    name: "crypto profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/pages/profile/simple"),
  },
  {
    path: "/profile-setting",
    name: "crypto profile-setting",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/pages/profile/setting"),
  },

  // user

  // admin
  
  {
    path: "/admin",
    name: "admin crypto default",
    meta: {
      title: "Dashboard",
      authRequired: true,
    },
    component: () => import("../views/dashboard/crypto/index"),
  },
  {
    path: "/admin/users",
    name: "admin crypto users",
    meta: { title: "Users", authRequired: true },
    component: () => import("../views/apps/crm/users"),
  },
  {
    path: "/admin/orders",
    name: "admin crypto orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/apps/crypto/orders"),
  },
  {
    path: "/admin/leads",
    name: "admin crypto leads",
    meta: { title: "Leads", authRequired: true },
    component: () => import("../views/apps/crm/leads"),
  },
  {
    path: "/admin/buy-sell",
    name: "admin crypto buy/sell",
    meta: { title: "Buy & Sell", authRequired: true },
    component: () => import("../views/apps/crypto/buy-sell"),
  },
  {
    path: "/admin/strategies",
    name: "admin crypto strategies",
    meta: { title: "Strategies ", authRequired: true },
    component: () => import("../views/apps/crypto/ico"),
  },
  {
    path: "/admin/my-wallet",
    name: "admin crypto wallet",
    meta: { title: "My Wallet", authRequired: true },
    component: () => import("../views/apps/crypto/wallet"),
  },
  {
    path: "/admin/positions",
    name: "admin crypto Positions",
    meta: { title: "Positions", authRequired: true },
    component: () => import("../views/apps/crypto/positions"),
  },
  {
    path: "/admin/transactions",
    name: "admin crypto transactions",
    meta: { title: "Transactions", authRequired: true },
    component: () => import("../views/apps/crypto/transactions"),
  },
  {
    path: "/admin/billing",
    name: "admin crypto billing",
    meta: { title: "Billing", authRequired: true },
    component: () => import("../views/apps/crypto/transactions"),
  },
  {
    path: "/admin/broker",
    name: "admin broker",
    meta: { title: "broker", authRequired: true },
    component: () => import("../views/apps/nft/nft-wallet"),
  },
  {
    path: "/admin/profile-kyc",
    name: "admin crypto kyc",
    meta: { title: "KYC Application", authRequired: true },
    component: () => import("../views/apps/crypto/kyc"),
  },
  {
    path: "/admin/profile",
    name: "admin crypto profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/pages/profile/simple"),
  },
  {
    path: "/admin/profile-setting",
    name: "admin crypto profile-setting",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/pages/profile/setting"),
  },
  // admin
  
  // {
  //   path: "/",
  //   name: "default",
  //   meta: {
  //     title: "Dashboard",
  //     authRequired: true,
  //   },
  //   component: () => import("../views/dashboard/ecommerce/index.vue"),
  // },
  {
    path: "/dashboard/crypto",
    name: "dashboard-crypto",
    meta: {
      title: "Crypto",
      authRequired: true,
    },
    component: () => import("../views/dashboard/crypto/index"),
  },
  {
    path: "/logout",
    name: "logout",
    meta: {
      title: "Logout", authRequired: true,
      beforeResolve(routeTo, routeFrom, next) {
        localStorage.clear();
        sessionStorage.clear();
        next();
      },
    },
    component: () => import("../views/auth/logout/basic")
  },
  {
    path: "/calendar",
    name: "calendar",
    meta: { title: "Calendar", authRequired: true },
    component: () => import("../views/calendar/index"),
  },
  {
    path: "/chat",
    name: "chat",
    meta: { title: "Chat", authRequired: true },
    component: () => import("../views/apps/chat"),
  },
  {
    path: "/apps-file-manager",
    name: "file manager",
    meta: { title: "File Manager", authRequired: true },
    component: () => import("../views/apps/filemanager"),
  },
  {
    path: "/apps-todo",
    name: "To Do List",
    meta: { title: "To Do List", authRequired: true },
    component: () => import("../views/apps/todo"),
  },
  {
    path: "/apps/crm-leads",
    name: "crm-leads",
    meta: { title: "CRM Leads", authRequired: true },
    component: () => import("../views/apps/crm/leads"),
  },
  {
    path: "/crypto/buy-sell",
    name: "buy/sell",
    meta: { title: "Buy & Sell", authRequired: true },
    component: () => import("../views/apps/crypto/buy-sell"),
  },
  {
    path: "/crypto/kyc",
    name: "kyc",
    meta: { title: "KYC Application", authRequired: true },
    component: () => import("../views/apps/crypto/kyc"),
  },
  {
    path: "/crypto/ico",
    name: "ico",
    meta: { title: "ICO List", authRequired: true },
    component: () => import("../views/apps/crypto/ico"),
  },
  {
    path: "/crypto/orders",
    name: "crypto-orders",
    meta: { title: "Orders", authRequired: true },
    component: () => import("../views/apps/crypto/orders"),
  },
  {
    path: "/crypto/wallet",
    name: "wallet",
    meta: { title: "My Wallet", authRequired: true },
    component: () => import("../views/apps/crypto/wallet"),
  },
  {
    path: "/crypto/transactions",
    name: "transactions",
    meta: { title: "Transactions", authRequired: true },
    component: () => import("../views/apps/crypto/transactions"),
  }, 
  {
    path: "/widgets",
    name: "widgets",
    meta: { title: "Widgets", authRequired: true },
    component: () => import("../views/widgets/index"),
  },
  {
    path: "/landing",
    name: "landing",
    meta: { title: "Landing", authRequired: true },
    component: () => import("../views/landing/index"),
  }, 
  {
    path: "/pages/profile",
    name: "profile",
    meta: { title: "Profile", authRequired: true },
    component: () => import("../views/pages/profile/simple"),
  },
  {
    path: "/pages/profile-setting",
    name: "profile-setting",
    meta: { title: "Setting", authRequired: true },
    component: () => import("../views/pages/profile/setting"),
  },
  {
    path: "/pages/maintenance",
    name: "maintenance",
    meta: { title: "Maintanance", authRequired: true },
    component: () => import("../views/pages/maintenance"),
  },
  {
    path: "/pages/coming-soon",
    name: "coming-soon",
    meta: { title: "Comming Soon", authRequired: true },
    component: () => import("../views/pages/coming-soon"),
  },
  {
    path: "/pages/timeline",
    name: "timeline",
    meta: { title: "Timeline", authRequired: true },
    component: () => import("../views/pages/timeline"),
  },
  {
    path: "/pages/faqs",
    name: "FAQs",
    meta: { title: "FAQs", authRequired: true },
    component: () => import("../views/pages/faqs"),
  },

  {
    path: "/pages/search-results",
    name: "search-results",
    meta: { title: "Search Results", authRequired: true },
    component: () => import("../views/pages/search-results"),
  },
  {
    path: '/auth/signin-basic',
    name: 'signin-basic',
    meta: {
      title: "Signin Basic", authRequired: true,
    },
    component: () => import('../views/auth/signin/basic')
  },
  {
    path: '/auth/signin-cover',
    name: 'signin-cover',
    meta: {
      title: "Signin Cover", authRequired: true,
    },
    component: () => import('../views/auth/signin/cover')
  },
  {
    path: '/auth/signup-basic',
    name: 'signup-basic',
    meta: {
      title: "Signup Basic", authRequired: true,
    },
    component: () => import('../views/auth/signup/basic')
  },
  {
    path: '/auth/signup-cover',
    name: 'signup-cover',
    meta: {
      title: "Signup Cover", authRequired: true,
    },
    component: () => import('../views/auth/signup/cover')
  },
  {
    path: '/auth/reset-pwd-basic',
    name: 'reset-pwd-basic',
    meta: {
      title: "Reset Password", authRequired: true,
    },
    component: () => import('../views/auth/reset/basic')
  },
  {
    path: '/auth/reset-pwd-cover',
    name: 'reset-pwd-cover',
    meta: {
      title: "Reset Password", authRequired: true,
    },
    component: () => import('../views/auth/reset/cover')
  },

  {
    path: '/auth/lockscreen-basic',
    name: 'lock-screen-basic',
    meta: {
      title: "Lock Screen", authRequired: true,
    },
    component: () => import('../views/auth/lockscreen/basic')
  },
  
  {
    path: '/auth/twostep-basic',
    name: 'twostep-basic',
    meta: {
      title: "Two Step Auth", authRequired: true,
    },
    component: () => import('../views/auth/twostep/basic')
  }, 
  {
    path: '/auth/404-cover',
    name: '404-cover',
    meta: {
      title: "Error 404", authRequired: true,
    },
    component: () => import('../views/auth/errors/404-cover')
  },
];