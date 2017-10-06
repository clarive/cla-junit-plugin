(function(params) {

    var data = params.data;

    var junitServerCombo = Cla.ui.ciCombo({
        name: 'junitServer',
        role: 'Server',
        fieldLabel: _('Server'),
        value: data.junitServer || '',
        allowBlank: false,
        with_vars: 1
    });

    var libPathArray = Cla.ui.arrayGrid({
        name: 'libPath',
        fieldLabel: _('Libraries path'),
        value: data.libPath,
        description: _('Libraries path'),
        default_value: '.',
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
            libPathArray,
            testClassTextField,
            errorBox
        ]
    });

    return panel;
})