var reg = require("cla/reg");

reg.register('service.junit.test', {
    name: _('JUnit launch test'),
    icon: '/plugin/cla-junit-plugin/icon/junit.svg',
    form: '/plugin/cla-junit-plugin/form/junit-service-form.js',
    handler: function(ctx, params) {

        var reg = require('cla/reg');
        var fs = require('cla/fs');
        var log = require('cla/log');

        var server = params.junitServer;
        var libPath = params.libPath;
        var testClass = params.testClass;
        var errors = params.errors || 'fail';
        var fullCommand = "";

        if (!server) {
            log.fatal(_("No server selected"));
        }

        function remoteCommand(params, command, server, errors) {

            var output = reg.launch('service.scripting.remote', {
                name: 'JUnit test',
                config: {
                    errors: errors,
                    server: server,
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
        var response = remoteCommand(params, fullCommand, server, errors);
        log.info(_("JUnit test finished"), response.output);
        return response.output;
    }
});