Use: https://github.com/gseguin/grunt-hash-manifest instead

> Creates an MD5 manifest

## Getting Started
This plugin requires Grunt `~0.4.0`

```shell
npm install grunt-md5-manifest --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-md5-manifest');
```

*This plugin was designed to work with Grunt 0.4.x.

### Usage Examples

```js
"md5-manifest": {
  dist: {
    options: {
        cwd: "dist"
    },
    src: [ "**/*" ],
    dest: "MANIFEST"
  }
}
```
