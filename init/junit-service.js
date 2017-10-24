var reg = require("cla/reg");

reg.register('service.junit.test', {
    name: _('JUnit test'),
    icon: '/plugin/cla-junit-plugin/icon/junit.svg',
    form: '/plugin/cla-junit-plugin/form/junit-service-form.js',
    rulebook: {
        moniker: 'junit_task',
        description: _('Executes JUnit commands'),
        required: ['server', 'test_class', 'lib_path'],
        allow: ['server', 'test_class', 'user', 'lib_path', 'errors'],
        mapper: {
            'server': 'junitServer',
            'test_class': 'testClass',
            'lib_path': 'libPath'
        },
        examples: [{
            junit_task: {
                server: 'junit_server',
                user: 'clarive_user',
                test_class: "TestClass",
                lib_path: ["/opt/lib1", "/opt/lib2"]
            }
        }]
    },
    handler: function(ctx, params) {

        var reg = require('cla/reg');
        var fs = require('cla/fs');
        var log = require('cla/log');

        var server = params.junitServer;
        var libPath = params.libPath || [];
        var testClass = params.testClass || "";
        var errors = params.errors || 'fail';
        var user = params.user || "";
        var fullCommand = "";

        if (!server) {
            log.fatal(_("No server selected"));
        }

        function remoteCommand(params, command, server, errors, user) {

            var output = reg.launch('service.scripting.remote', {
                name: 'JUnit test',
                config: {
                    errors: errors,
                    server: server,
                    user: user,
                    path: command,
                    output_error: params.output_error,
                    output_warn: params.output_warn,
                    output_capture: params.output_capture,
                    output_ok: params.output_ok,
                    meta: params.meta,
                    rc_ok: params.rcOk,
                    rc_error: params.rcError,
                    rc_warn: params.rcWarn
                }
            });
            return output;
        }

        var paths = libPath.join(":");

        fullCommand = "java -cp " + paths + " org.junit.runner.JUnitCore " + testClass;

        log.info(_("Starting JUnit test"));
        var response = remoteCommand(params, fullCommand, server, errors, user);
        log.info(_("JUnit test finished"), response.output);
        return response.output;
    }
});