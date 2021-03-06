import { addExtensionMethods } from './hubextensions';
import * as ApmIntegrations from './integrations';

export { ApmIntegrations as Integrations };
export { Span, TRACEPARENT_REGEXP } from './span';

// We are patching the global object with our hub extension methods
addExtensionMethods();
