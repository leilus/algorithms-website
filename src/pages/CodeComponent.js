import { CodeBlock, dracula, monokai } from "react-code-blocks";
import './CodeComponent.css';


const CodeComponent = () => {

const cppSnippet = `#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
    int tablica[5] = { 5, 7, 9, 2, 1 };
    int temp;

    for (int i = 0; i < 5; i++) {
        for (int j = i + 1; j < 5; j++) {
            if (tablica[i] > tablica[j]) {
               swap(tablica[i], tablica[j]);
            }
        }
    }

    for (int i = 0; i < 5; i++) {
        cout << tablica[i] << endl;
    }
}`

    return ( 

<div className="codeblock-look"> 
<CodeBlock 
      text={cppSnippet}
      language='cpp'
      showLineNumbers={true}
      theme={monokai}
    /> 
    </div>);
}
 
export default CodeComponent;