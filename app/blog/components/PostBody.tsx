import  CodeBlock  from './SyntaxHighler'
import { slugify } from "@/lib/helpers";



const ptComponents = {
    types: {
      code: ({ value }: any) => {
        return <CodeBlock value={value} />
      },
    },
    block:{
      h2: ({ value }: any) => (
        <h2
          id={slugify(value.children[0].text)}
          className="text-3xl font-bold mb-3"
        >
          {value.children[0].text}
        </h2>
      ),
      h3: ({ value }: any) => (
        <h3
          id={slugify(value.children[0].text)}
          className="text-2xl font-bold mb-3"
        >
          {value.children[0].text}
        </h3>
      ),
      h4: ({ value }: any) => (
        <h4
          id={slugify(value.children[0].text)}
          className="text-2xl font-bold mb-3"
        >
          {value.children[0].text}
        </h4>
      ),
      h5: ({ value }: any) => (
        <h5
          id={slugify(value.children[0].text)}
          className="text-2xl font-bold mb-3"
        >
          {value.children[0].text}
        </h5>
      ),
      h6: ({ value }: any) => (
        <h6
          id={slugify(value.children[0].text)}
          className="text-xl font-bold mb-3"
        >
          {value.children[0].text}
        </h6>
      ),
    },
  }
  export default ptComponents