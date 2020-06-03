import "./forms.ts"
import "./textPage/text-page.ts"

import { domReady, App, EventListener } from "./xpage/index";


declare global {
	interface Window {
		$: Function;
		is: any;
		requestIdleCallback: Function;
		cancelIdleCallback: Function;
		defaultSlideInit: Function;
		swiperThumbsReady: any;
		notificator: any
	}
}

domReady(() => {

	if (!window.is.touchDevice())
		(async function(){
			const select = await import ("./xpage/select");
			App.each(".my-select", function(el: HTMLSelectElement) {
				new select.default(el);
			});
		})();

})