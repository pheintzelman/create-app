import { getViewModel } from './getViewModel';

const configString = `{
  "name": "Test Config",
  "models": {
    "Animal": null
  }
}`;

describe('getViewModel', () => {
  test('should handle model with no properties', () => {
    const config = {
      name: 'Test Config',
      models: {
        Animal: null
      }
    };

    const expected = {
      appName: 'Test Config',
      appNameCamel: 'testConfig',
      appNamePascal: 'TestConfig',
      appNameSnake: 'test-config',
      configString,
      dir: undefined,
      models: [
        {
          componentImports: [],
          defaultState: '{}',
          modelName: 'Animal',
          modelNameCamel: 'animal',
          modelNamePascal: 'Animal',
          modelNameSnake: 'animal',
          properties: []
        }
      ],
      templateName: 'test',
      templateVersion: '1.2.3'
    };

    const actual = getViewModel({
      config,
      manifesto: { name: 'test', version: '1.2.3' }
    });

    expect(actual).toStrictEqual(expected);
  });
});
