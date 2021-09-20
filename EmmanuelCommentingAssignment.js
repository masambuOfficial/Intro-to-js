 function tests(test1, test2){
    let greater = test1 > test1? test1:test2;
    return greater;
 }
 /* This function didn't have a closing curly brackets, so i introduced it on line 4*/
/* I also introduced terminations on line 2 and 3*/
// On line 1 we have defined the function tests and assigned it parameters test1, test2 to make it  a dynamic function.
// Line 2, we declared a local variable greater and initialised it with test1 being greater than test1 with a true or false operator, the value of the variable "greater" will be "test1", otherwise the value of greater will be "test2".
// Since variable greater is local we returned it on line 3 to make it available

  function coursework(cswork){
     let coursework = cswork + tests(80,80);
         console.log(coursework);
         return coursework;
  }
//   line 10, we define a dynamic function coursework with a parameter cswork, line 11 we declare a local variable coursework and intialize it with cswork + tests(80,80); where function tests is assigned parameters 80,80, later on line 13 we return coursework so that it can be available for use in the following functions
/* I introduced terminations on line 9, 10 and 11*/

 function avg(a){
    let avg = coursework(90)/a;
    return avg;
 }
 
 /* 
 * Defined a function avg and assigned to it a parameter a 
 * Declared a local variable avg which is storing the return value of coursework on line 14 that has a parameter 90 divided by parameter a
 * avg is returned on line 21 to make it availabe for use 
 */
 function crsmark(a){
      let exm = avg(2)*(a/100);
         return exm;
 }
/* 
 * Function crsmark is defined on line 26 with a parameter a
 * A Local variable exm is declared on line 29 storing the value returned on line 21 which takes a parameter 2 and multiply it with parammeter "a" divided by 100
 * a value exm is returned on line 31 to make it accessible since it is a local variable 
*/
 function exam(a){
    let fexam = (60/100)*a;
    return fexam;
 
}
 /**
 * Defined a function 'exam' that is assigned parameter 'a' on line 38
 * Declaring a local variable 'fexam' that stores 60 divided by 100 multiplied by a on line 39
 * returning 'fexam'
 */
 function fnal(){
    let fmark = exam(75)+crsmark(40);
    console.log(fmark);
 }
 fnal();
 /*
 * A static Function "fnal" is defined on line 48
 * A Local variable "fmark" is declared on line 49 that calls function "exam" with parameter 75 added to function "crsmark" with a parameter 40
 * on line 50 we print the value of "fmark"
 * Introduced a termination on the called function "final" on line 52
 * the function "fnal" is called on line 52.
 */

//  As it is a good practice, i realized that most of the statements werenot terminated so i introduced the terminantion to them.