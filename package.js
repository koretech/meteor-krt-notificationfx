var client = 'client', server = 'server', both = ['client', 'server'];

Package.describe({
	name: 'krt:notificationfx',
	summary: 'NotificationFX Package',
	version: '0.2.1',
	git: 'https://github.com/koretech/meteor-krt-notificationfx.git',
	documentation: null
});

Package.onUse(function(api){

	api.versionsFrom('METEOR@1.2');

	api.use([
		'underscore',
		'krt:core@0.1.4',
		'flemay:less-autoprefixer@1.1.0',
		'mquandalle:bower@1.5.2'
	], both);

	api.imply([
		'krt:core'
	]);

	api.addFiles([
		'bower.json',
		'namespaces.js',
		'styles/styles.less',
		'lib/ns-default.css',
		'lib/ns-style-attached.css',
		'lib/ns-style-bar.css',
		'lib/ns-style-growl.css',
		'lib/ns-style-other.css',
		'lib/modernizr.custom.js',
		'lib/notificationFx.js',
		'lib/meteor.js'
	], client);

});
