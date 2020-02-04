
## ApexDoc

### Usage

```
ApexDoc - a tool for generating documentation from Salesforce Apex code class files.

    Invalid Arguments detected.  The correct syntax is:

apexdoc -s <source_directory> [-t <target_directory>] [-g <source_url>] [-h <homefile>] [-a <authorfile>] [-p <scope>]

<source_directory> - The folder location which contains your apex .cls classes
<target_directory> - Optional. Specifies your target folder where documentation will be generated.
<source_url> - Optional. Specifies a URL where the source is hosted (so ApexDoc can provide links to your source).
<homefile> - Optional. Specifies the html file that contains the contents for the home page's content area.
<authorfile> - Optional. Specifies the text file that contains project information for the documentation header.
<scope> - Optional. Semicolon seperated list of scopes to document.  Defaults to 'global;public'. 

```

### pom.xml

```xml

<project xmlns="http://maven.apache.org/POM/4.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/POM/4.0.0 http://maven.apache.org/xsd/maven-4.0.0.xsd">
  <modelVersion>4.0.0</modelVersion>
  <groupId>ApexDoc</groupId>
  <artifactId>ApexDoc</artifactId>
  <version>1.2.0-SNAPSHOT</version>
  <name>ApexDoc</name>
  <description>A documentation generator for Apex using JavaDoc style comment blocks</description>

  <packaging>jar</packaging>

  <build>
    <sourceDirectory>src</sourceDirectory>
    <resources>
      <resource>
        <directory>src</directory>
        <excludes>
          <exclude>**/*.java</exclude>
        </excludes>
      </resource>
    </resources>
    <plugins>
      <plugin>
        <artifactId>maven-compiler-plugin</artifactId>
        <version>3.8.1</version>
        <configuration>
          <source/>
          <target/>
        </configuration>
      </plugin>
      <plugin>
		<groupId>org.apache.maven.plugins</groupId>
		<artifactId>maven-jar-plugin</artifactId>
		<configuration>
		  <!-- DO NOT include log4j.properties file in your Jar -->
		  <excludes>
			<exclude>**/log4j.properties</exclude>
		  </excludes>
		  <archive>
			<manifest>
				<!-- Jar file entry point -->
				<mainClass>org.salesforce.apexdoc.ApexDoc</mainClass>
			</manifest>
		  </archive>
		</configuration>
	  </plugin>
    </plugins>
  </build>
</project>



```

### Source

- [ApexDoc github](https://github.com/SalesforceFoundation/ApexDoc)
- [Jar file](jar/ApexDoc-1.2.0-SNAPSHOT.jar)
