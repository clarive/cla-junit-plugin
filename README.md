# Junit plugin

<img src="https://cdn.rawgit.com/clarive/cla-junit-plugin/master/public/icon/junit.svg?sanitize=true" alt="JUnit Plugin" title="JUnit Plugin" width="120" height="120">

JUnit plugin will allow you to launch JUnit tests from a Clarive instance.

## What is JUnit

JUnit is a unit testing framework for the Java programming language. JUnit has been important in the development of test-driven development, and is one of a family of unit testing frameworks which is collectively known as xUnit that originated with SUnit.

## Requirements

JUnit is needed in order for it to work properly.

## Installation

To install the plugin, place the cla-junit-plugin folder inside the `$CLARIVE_BASE/plugins`
directory in a Clarive instance.

## Parameters

This palette service will let you call the test that you wish to perform with JUnit.
The various parameters from the palette service are:

- **Server (variable name: server)** - Choose the generic server where you wish to execute the JUnit test. 
- **User (user)** - User which will be used to connect to the server.
- **Libraries path (lib_path)** - Full path for the library or libraries needed.
- **Test class (test_class)** - Name of the class to test.

**Only Clarive EE**

- **Errors and output** - These two fields are related to manage control errors. Options are:
   - **Fail and output error** - Search for configurated error pattern in script output. If found, an error message is displayed in monitor showing the match.
   - **Warn and output warn** - Search for configurated warning pattern in script output. If found, an error message is displayed in monitor showing the match.,
   - **Custom** - In case combo box errors is set to custom a new form is showed to define the behavior with these fields:
   - **OK** - Range of return code values for the script to have succeeded. No message will be displayed in monitor.
   - **Warn** - Range of return code values to warn the user. A warn message will be displayed in monitor.
   - **Error** - Range of return code values for the script to have failed. An error message will be displayed in monitor.

## How to use

### In Clarive EE

Once the plugin is placed in its folder, you can find this service in the palette in the section of generic service and can be used like any other palette op.

Op Name: **Junit test**

Example:

```yaml
    Server: Junit-Server
    Libraries path: /opt/src/lib/junit.jar
                    /opt/javaproject/
    Test class: TestClass
    Errors: fail
``` 

### In Clarive SE

#### Rulebook

If you want to use the plugin through the Rulebook, in any `do` block, use this ops as examples to configure the different parameters:

```yaml
rule: JUnit demo
do:
   - junit_task:
       server: junit_server   # Required. Use the mid set to the resource you created
       user: ${username}     
       test_class: "TestClass"  # Required
       lib_path: ["/opt/lib1/junit.jar", "/opt/lib2"]  # Required   
```

##### Outputs

###### Success

The service will return the console output for the test you have executed.

###### Possible configuration failures

**Variable required**

```yaml
Error in rulebook (compile): Required argument(s) missing for op "junit_task": "server"
```

Make sure you have all required variables defined.

**Not allowed variable**

```yaml
Error in rulebook (compile): Argument `Test` not available for op "junit_task"
```

Make sure you are using the correct paramaters (make sure you are writing the variable names correctly).

## More questions?

Feel free to join **[Clarive Community](https://community.clarive.com/)** to resolve any of your doubts.