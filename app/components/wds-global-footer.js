import Component from '@ember/component';
import track from '../utils/track';

export default Component.extend({
	tagName: 'footer',
	classNames: 'wds-global-footer',

	click(event) {
		if (this.track) {
			track(event, this.element, this.track);
		}
	}

});
