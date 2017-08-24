
# Junit plugin

Junit plugin will allow you to launch Junit tests from a Clarive instance.

## Requirements

Junit is needed in order for it to work properly .

## Installation

To install the plugin, place the cla-junit-plugin folder inside the `CLARIVE_BASE/plugins`
directory in a Clarive instance.

## How to use

Once the plugin is correctly installed, you will have a new palette service called 'Junit test'.

### Junit test service:

This palette service will let you write the test that you wish to perform with Junit.
The various parameters from the palette service are:

- **Server** - Choose the server where you wish to execute the Junit test. 
- **Class path** - Full path where the class is located.
- **Libraries path** - Full path for the library or libraries needed.
- **Test runner** - Name of the test to launch.
- **Test class** - Name of the class to test.
- **Errors and output** - These two fields are related to manage control errors. Options are:
   - **Fail and output error** - Search for configurated error pattern in script output. If found, an error message is displayed in monitor showing the match.
   - **Warn and output warn** - Search for configurated warning pattern in script output. If found, an error message is displayed in monitor showing the match.,
   - **Custom** - In case combo box errors is set to custom a new form is showed to define the behavior with these fields:
   - **OK** - Range of return code values for the script to have succeeded. No message will be displayed in monitor.
   - **Warn** - Range of return code values to warn the user. A warn message will be displayed in monitor.
   - **Error** - Range of return code values for the script to have failed. An error message will be displayed in monitor.


Configuration example:

    Server: Junit-Server
    Class path: /opt/src/
    Libraries path: /opt/src/lib/*  // This mean all libraries in the path
    Test runner: junit.textui.TestRunner
    Test class: TestClass
    Errors: fail

The service will return the console output for the command.