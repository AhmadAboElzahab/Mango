export default function (plop) {
  plop.setGenerator('component', {
    description: 'Generate a new React component with folder structure',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'Component name (e.g., Button, Card, Modal, etc.)',
      },
      {
        type: 'input',
        name: 'path',
        message: 'Component path (e.g., Common, UI, Dashboard, etc.)',
      },
    ],
    actions: [
      // Individual actions for each file to control the naming
      {
        type: 'add',
        path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.styles.ts',
        templateFile: 'plop-templates/component/Component.styles.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.test.tsx',
        templateFile: 'plop-templates/component/Component.test.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{path}}/{{pascalCase name}}/index.ts',
        templateFile: 'plop-templates/component/index.ts.hbs',
      },
      {
        type: 'add',
        path: 'src/components/{{path}}/{{pascalCase name}}/{{pascalCase name}}.types.ts',
        templateFile: 'plop-templates/component/Component.types.ts.hbs',
      },
    ],
  });
}
