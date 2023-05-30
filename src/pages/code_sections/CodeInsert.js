import { CodeBlock, dracula, monokai } from "react-code-blocks";



const CodeSelection = () => {

const cppSnippet = `#include <iostream>
#include <algorithm>
#include <cstdlib>
using namespace std;

int main()
{
	int tablica[6] = { 7, 3, 5, 2, 1, 32 };
	int key,i,j;

	for (i = 1; i < 6; i++) {
		key = tablica[i];
		j = i - 1;
		while (j >= 0 && tablica[j] > key) {
			tablica[j + 1] = tablica[j];
			j = j - 1;
		}
		tablica[j + 1] = key;
	}

	for (i = 0; i < 6; i++) {
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