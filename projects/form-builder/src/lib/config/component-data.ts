import {InjectionToken} from '@angular/core';
import {ComponentConfig} from './component-config';

export const COMPONENT_DATA = new InjectionToken<ComponentConfig>('k_component_data');
