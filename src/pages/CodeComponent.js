import { CodeBlock, dracula } from "react-code-blocks";
import './CodeComponent.css';




const CodeComponent = () => {

const cppSnippet = `#include <iostream>
using namespace std;

int main()
{
    int tablica[5] = { 5, 7, 9, 2, 1 };
    int temp;

    for (int i = 0; i < 5; i++) {
        for (int j = i + 1; j < 5; j++) {
            if (tablica[i] > tablica[j]) {
                temp = tablica[i];
                tablica[i] = tablica[j];
                tablica[j] = temp;
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
      theme={dracula}
    /> 
    </div>);
}
 
export default CodeComponent;