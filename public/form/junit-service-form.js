(function(params) {

    var data = params.data;

    var junitServerCombo = Cla.ui.ciCombo({
        name: 'junitServer',
        class: 'generic_server',
        fieldLabel: _('Server'),
        value: data.junitServer || '',
        allowBlank: false,
        with_vars: 1
    });

    var classPathTextField = Cla.ui.textField({
            name: 'classPath',
            fieldLabel: _('Class path'),
            value: data.classPath || '',
            allowBlank: false
        });

    var libPathTextField = Cla.ui.textField({
            name: 'libPath',
            fieldLabel: _('Libraries path'),
            value: data.libPath || '',
            allowBlank: false
        });

    var testRunnerTextField = Cla.ui.textField({
            name: 'testRunner',
            fieldLabel: _('Test runner'),
            value: data.testRunner || '',
            allowBlank: false
        });

    var testClassTextField = Cla.ui.textField({
            name: 'testClass',
            fieldLabel: _('Test class'),
            value: data.testClass || '',
            allowBlank: false
        });


    var errorBox = Cla.ui.errorManagementBox({
        errorTypeName: 'errors',
        errorTypeValue: data.errors || 'fail',
        rcOkName: 'rcOk',
        rcOkValue: data.rcOk,
        rcWarnName: 'rcWarn',
        rcWarnValue: data.rcWarn,
        rcErrorName: 'rcError',
        rcErrorValue: data.rcError,
        errorTabsValue: data
    });

    var panel = Cla.ui.panel({
        layout: 'form',
        items: [
            junitServerCombo,
            classPathTextField,
            libPathTextField,
            testRunnerTextField,
            testClassTextField,
            errorBox
        ]
    });

    return panel;
})