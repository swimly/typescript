module.exports = plop => {
  // 创建生成器
  plop.setGenerator('component', {
    // 生成器描述
    description: '创建一个新组件！',
    // 询问
    prompts: [
      // 组件名称
      {
        type: 'input',
        name: 'name',
        message: '请填写组件名称！',
        default: 'name'
      },
      {
        type: 'confirm',
        name: 'ismodule',
        message: '是否创建module？'
      }
    ],
    // 把基于模板创建的文件，放到指定的目录
    actions: (data) => {
      const name = data.name
      const isModule = data.ismodule
      const actions = [
        isModule ? {
          type: 'add',
          path: `../src/components/${name}/${name}.module.css`,
          templateFile: `../src/temp/css-module.hbs`
        } : {
          type: 'add',
          path: `../src/components/${name}/${name}.css`,
          templateFile: `../src/temp/css.hbs`
        },
        isModule ? {
          type: 'add',
          path: `../src/components/${name}/${name}.ts`,
          templateFile: '../src/temp/typescript-module.hbs'
        } : {
          type: 'add',
          path: `../src/components/${name}/${name}.ts`,
          templateFile: '../src/temp/typescript.hbs'
        },
        {
          type: 'add',
          path: `../src/components/${name}/README.md`,
          templateFile: `../src/temp/readme.hbs`
        },
        isModule ? {
          type: 'add',
          path: `../src/components/${name}/${name}.module.css.json`,
          templateFile: `../src/temp/css.json.hbs`
        } : {
          type: 'add',
          path: `../src/components/${name}/${name}.css.json`,
          templateFile: `../src/temp/css.json.hbs`
        },
        {
          type: 'add',
          path: `../src/components/${name}/pug/index.pug`,
          templateFile: `../src/temp/pug.hbs`
        }
      ]
      return actions
    }
  })
}