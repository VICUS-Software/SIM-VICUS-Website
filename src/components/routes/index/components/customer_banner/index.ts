

import {Customer} from "@components/routes/index/components/customer_banner/Customer.tsx";

import {Item} from "./components/Item.tsx"
import {InfiniteScrollBannerRoot} from "@components/routes/index/components/customer_banner/InfiniteScrollBanner.tsx";

export {Item,Customer}

export const InfiniteBanner = Object.assign(InfiniteScrollBannerRoot,{Item,Customer})