//  ******************* Javascript Execution Context **************

/**
 *  type of EC 
 *      1. Global EC - is diff of diff env like (browser-Window.object) diff for (node) diff for other EC like (DINO) and (BUN)
 *      2. Functional EC
 *      3. Eval EC - mongoose doc
 * 
 *  In program - 1) Memory creation phase
 *               2) Execution phase
 * 
 *  for e.g  let val1 = 10
 *           let val2 = 5
 *           function addNum(num1,num2){
 *              let total = num1 + num2;
 *              return total;
 *           }
 *          let result1 = addNum(val1,val2);
 *          let result2 = addNum(10,2);
 *      
 *      for this code How js code executes :
 *  Step1] Global Execution Context - this for program
 *  Step2] Memory Phase - val1 = undefined
 *                        val2 = undefined
 *                        addNum = definition
 *                        result1 = undefined
 *                        result2 = undefined
 *  Step3] Execution Phase - val1 = 10
 *                           val2 = 5
 *                           addNum = |------------------|----> sub Step1) Memory phase - val1 / num1 = undefined
 *                    result1 = 15 <--|  new variable    |                                val2 / num2 = undefined  
 *                                    |    environment   |                                total = undefined
 *                                    |         +        |----> sub Step2) Memory phase - num1 = 10
 *                                    | Execution Thread |                                num2 = 5    
 *                                    |__________________|                                total = 15  ---> returns to the global ec
 * 
 *                           addNum = |------------------|----> sub Step1) Memory phase - val1 / num1 = undefined
 *                    result2 = 12 <--|  new variable    |                                val2 / num2 = undefined  
 *                                    |    environment   |                                total = undefined
 *                                    |         +        |----> sub Step2) Memory phase - num1 = 10
 *                                    | Execution Thread |                                num2 = 5    
 *                                    |__________________|                                total = 15  ---> returns to the global ec
 * 
 * 
 *      Call Stacks
 *      browser -> inspect -> sources-> snippet -> chaiaurcodeSnippet.js
 *                                                  this code snippet is written in browser itself 
 * 
 */                                 

