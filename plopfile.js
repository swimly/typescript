const fs = require('fs')
const path = require('path')
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
      }
    ],
    // 把基于模板创建的文件，放到指定的目录
    actions: async (data) => {
      const name = data.name
      // const content = await fs.readFileSync(path.resolve(__dirname,'./index.ts'), {
      //   encoding: 'utf-8'
      // })
      // console.log(content)
      const actions = [
        {
          type: 'add',
          path: `src/components/${name}/${name}.css`,
          templateFile: `src/temp/css.hbs`
        },
        {
          type: 'add',
          path: `src/components/${name}/${name}.css.json`,
          templateFile: `src/temp/css.json.hbs`
        },
        {
          type: 'add',
          path: `src/components/${name}/${name}.story.mdx`,
          templateFile: `src/temp/story.hbs`
        },
        {
          type: 'add',
          path: `src/components/${name}/${name}.ts`,
          templateFile: 'src/temp/typescript.hbs'
        },
        {
          type: 'add',
          path: `src/components/${name}/README.md`,
          templateFile: `src/temp/readme.hbs`
        }
      ]
      return actions
    }
  })
}