import {Component, onMount} from "solid-js";


const setTemporaryViewTransitionNames = async (entries, vtPromise) => {
    for (const [$el, name] of entries) {
        $el.style.viewTransitionName = name;
    }

    await vtPromise;

    for (const [$el, name] of entries) {
        $el.style.viewTransitionName = '';
    }
}
export const ViewTransition:Component = () =>{
    onMount(()=>{
        window.addEventListener('pagereveal', async (e) => {
            if (e.viewTransition) {
                const fromURL = new URL(navigation.activation.from.url);
                const currentURL = new URL(navigation.activation.entry.url);

                // Navigating from a profile page back to the homepage
                if (isProfilePage(fromURL) && isHomePage(currentURL)) {
                    const profile = extractProfileNameFromUrl(currentURL);

                    // Set view-transition-name values on the elements in the list
                    // Clean up after the snapshots have been taken
                    setTemporaryViewTransitionNames([
                        [document.querySelector(`#${profile} span`), 'name'],
                        [document.querySelector(`#${profile} img`), 'avatar'],
                    ], e.viewTransition.ready);
                }
            }
        });
        window.addEventListener("pagereveal", async (e) => {
            if (e.viewTransition) {
                const transitionType = determineTransitionType(navigation.activation.from, navigation.activation.entry);
                e.viewTransition.types.add(transitionType);
            }
        });
    })
}