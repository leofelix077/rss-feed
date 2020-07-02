import Home from "./components/Home";
import RSSFeed from "./components/RSSFeed";

export interface RouteConfig {
  public: boolean;
  exact?: boolean;
  icon?: any;
  path: string;
  search?: string;
  label?: string;
  component: any;
  key: string;
  topLevel?: boolean;
  translate: string;
  children?: { [key: string]: RouteConfig };
}

export interface Routes {
  [key: string]: RouteConfig;
}
const ROUTES: Routes = {
  home: {
    component: Home,
    path: "/home",
    public: true,
    label: "Home",
    exact: true,
    translate: "home",
    key: "home",
  },
  rssFeed: {
    component: RSSFeed,
    path: "/rss",
    public: true,
    label: "RSS Feed",
    translate: "feed",
    key: "feed",
  },
};

export default ROUTES;
