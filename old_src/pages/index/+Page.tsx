import { InfiniteBanner } from "@components/routes/index/components/customer_banner";
import { Macbook } from "@components/routes/index/components/macbook/Macbook.tsx";
import { NewsBanner } from "@components/routes/index/components/news_banner/NewsBanner.tsx";
import { Features } from "@components/routes/index/components/product_features/Features.tsx";
import { IntroHeader } from "@components/routes/index/components/text_banner/IntroHeader.tsx";
import {
    background_wrapper,
    customer_banner_wrapper,
    index_page_wrapper,
    next_section,
    space,
    stone_space,
    stone_space_bottom,
    stone_space_top,
    stone_wall,
} from "@styles/routes/index/styled.css.ts";
import { githubPagesLinkHelper } from "@utils/githubPagesLinkHelper.ts";

export default function Page() {
    return (
        <>
            <Macbook />
            <div class={background_wrapper}>
                <div class={index_page_wrapper}>
                    <IntroHeader />
                </div>

                <img
                    class={space}
                    width="100%"
                    height="100%"
                    alt="background"
                    src={githubPagesLinkHelper("assets/Midnight.jpeg")}
                />
                <div class={customer_banner_wrapper}>
                    <InfiniteBanner>
                        <InfiniteBanner.Item index={0}>
                            <InfiniteBanner.Customer>
                                amazon
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                        <InfiniteBanner.Item index={1}>
                            <InfiniteBanner.Customer>
                                apple
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>{" "}
                        <InfiniteBanner.Item index={1}>
                            <InfiniteBanner.Customer>
                                apple
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                        <InfiniteBanner.Item index={2}>
                            <InfiniteBanner.Customer>
                                google
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                        <InfiniteBanner.Item index={3}>
                            <InfiniteBanner.Customer>
                                netflix
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                        <InfiniteBanner.Item index={4}>
                            <InfiniteBanner.Customer>
                                microsoft
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                        <InfiniteBanner.Item index={5}>
                            <InfiniteBanner.Customer>
                                pipe piper
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                        <InfiniteBanner.Item index={6}>
                            <InfiniteBanner.Customer>
                                unicorn.com
                            </InfiniteBanner.Customer>
                        </InfiniteBanner.Item>
                    </InfiniteBanner>
                </div>
                <div class={stone_space}>
                    <div class={stone_space_top} />
                    <div class={stone_space_bottom}>
                        <img
                            class={stone_wall}
                            width="100%"
                            height="100%"
                            alt="background"
                            src={githubPagesLinkHelper(
                                "assets/stone_wall.webp",
                            )}
                        />
                    </div>
                </div>
            </div>
            <div class={next_section}>
                <Features />
            </div>

            <div class={next_section}>
                <NewsBanner />
            </div>
        </>
    );
}
