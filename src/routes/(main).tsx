import { Footer } from "~/layout/components/footer/Footer.tsx";
import { Navbar } from "~/layout/components/navbar/Navbar.tsx";
import { Page } from "~/layout/components/page/Page.tsx";
import { Theme } from "~/layout/theme/Theme";
import { ThemeProvider } from "~/layout/theme/Theme_Context";
import { base_layout_style } from "../layout/base_layout.css.ts";
import { type ParentComponent, Suspense} from "solid-js";
import {ViewTransition} from "~/layout/ViewTransition.tsx";

const Main: ParentComponent = (props) => {
    return (
      <>
        <ViewTransition />
        <ThemeProvider>
          <Theme>
            <div class={base_layout_style}>
              <Navbar />
              <Page>{props.children}</Page>
              <Footer />
            </div>
          </Theme>
        </ThemeProvider>
      </>
    );
};

export default Main

