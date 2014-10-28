var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:notificationfx',
	summary: 'NotificationFX Package',
	version: '0.1.0',
	git: 'https://github.com/koretech/meteor-krt-notificationfx.git'
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@0.9.4');

	api.use([
		'mquandalle:bower@0.1.11'
	], both);

	api.addFiles([
		'bower.json',
		'lib/ns-default.css',
		'lib/ns-style-attached.css',
		'lib/ns-style-bar.css',
		'lib/ns-style-growl.css',
		'lib/ns-style-other.css',
		'lib/modernizr.custom.js',
		'lib/notificationFx.js'
	], client);

});
