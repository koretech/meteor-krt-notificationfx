var globals = {
	layout: 'attached',
	effect: 'flip',
	wrapper: document.body,
	ttl: 3000
};
var defaults = _.extend({}, globals);

var currentNotification = null;

KRT.NFX.setGlobals = function(param) {
	globals = _.extend({}, defaults, param);
};

KRT.NFX.show = function(message, layout, effect, type, ttl) {
	layout = layout || globals.layout;
	effect = effect || globals.effect;
	type = type || 'notice';
	ttl = ttl || globals.ttl;

	if (currentNotification && currentNotification.active) {
		currentNotification.dismiss();
	}

	currentNotification = new NotificationFx({
		wrapper: document.body,
		message: message,
		layout: layout,
		effect: effect,
		type: type,
		ttl: ttl
	});
	currentNotification.show();
};

KRT.NFX.success = function(message, ttl) {
	ttl = ttl || globals.ttl;
	KRT.NFX.show(message, globals.layout, globals.effect, 'success', ttl);
};

KRT.NFX.error = function(message, ttl) {
	ttl = ttl || globals.ttl;
	KRT.NFX.show(message, globals.layout, globals.effect, 'error', ttl);
};

KRT.NFX.warning = function(message, ttl) {
	ttl = ttl || globals.ttl;
	KRT.NFX.show(message, globals.layout, globals.effect, 'warning', ttl);
};

KRT.NFX.notice = function(message, ttl) {
	ttl = ttl || globals.ttl;
	KRT.NFX.show(message, globals.layout, globals.effect, 'notice', ttl);
};
