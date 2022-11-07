# Nil test Websites

The PHP project used to serve 100s of trades people's websites.
we use symfony for this test

## Install

To install this on a new server the required minimal packages are: [Git], [Composer], [MySQL], [PHP 7+] and [NPM]/[Yarn (recommended)]. Please follow the update section on how to use these correctly.

To serve the website, the `/public` directory should be hosted as the root.

A new `.env.local` file should be created from the `.env.template` file with website specific defaults.

A database will also need to be setup, and `composer install` ran before `composer migrate` to create a database table.

## Update

To update this project, you need to perform the following tasks:

- Pull from the latest Git 'master' branch: `git pull`.
- Run the `package.json` 'build' command to compile JS/CSS for production: `yarn build`.

> Please note, all other commands that need to be run are handled by [our website scripts], please refer to these if you need to perform them manually.

[Git]: https://git-scm.com/
[Composer]: https://getcomposer.org/
[MySQL]: https://www.mysql.com/
[PHP 7+]: https://php.net/
[NPM]: https://www.npmjs.com/


# Nil test Websites



