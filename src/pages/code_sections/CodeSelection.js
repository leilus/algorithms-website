import { CodeBlock, dracula, monokai } from "react-code-blocks";
import './CodeSelection.css';


const CodeSelection = () => {

const cppSnippet = `#include <iostream>
#include <algorithm>
using namespace std;

int main()
{
	int i, j, min_index;
	int tablica[5] = {2, 1, 4, 3, 9};
	for (i = 0; i < 5; i++) {
		min_index = i;
		
		for (j = i + 1; j < 5; j++) {
			if (tablica[j] < tablica[min_index]) {
				min_index = j;	
				
			}
		}
		swap(tablica[min_index], tablica[i]);
	}
	for (int i = 0; i < 5; i++) {
		cout << tablica[i];
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
 
export default CodeSelection;