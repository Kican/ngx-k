/*
 * Public API Surface of components
 */

export * from './lib/models/color-type';
export * from './lib/models/size-type';
export * from './lib/k-components.module';

import {KButtonModule, ButtonDirective} from './lib/modules/button';
export {KButtonModule, ButtonDirective};

import {
	KAlertModule,
	AlertDirective,
	AlertDismissDirective,
	AlertDismissBtnDirective,
	AlertHeadingDirective,
	AlertLinkDirective
} from './lib/modules/alert';

export {
	KAlertModule,
	AlertDirective,
	AlertDismissDirective,
	AlertDismissBtnDirective,
	AlertHeadingDirective,
	AlertLinkDirective
};

import {BadgeModule, BadgeDirective} from './lib/modules/badge';
export {BadgeModule, BadgeDirective};
