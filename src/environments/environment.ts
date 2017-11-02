// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  apiUrl: 'http://api.openweathermap.org/data/2.5/forecast',
  iconUrl: 'http://openweathermap.org/img/w/',
  apiKey: '82082ecec131e7b4b4747e3a4dc6e98b'
};
