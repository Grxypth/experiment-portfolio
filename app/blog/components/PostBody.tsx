import  CodeBlock  from './SyntaxHighler'


const ptComponents = {
    types: {
      code: ({ value }: any) => {
        return <CodeBlock value={value} />
      },
    },
  }
  export default ptComponents