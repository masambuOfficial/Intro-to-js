// while loops
// The while statement evaluates the expression before each iteration of the loop.
// If the expression evaluates to true,  the while statement executes the statement
    // most used loop is for loop
    // avoid use loops where applicable because loops consumes a lot of memory
let count = 1;

// do While loops 
// unlike the while loop, the do-while loop always executes the body at least once before it evaluates the expression. 
// Because the expression is evaluated only after the body of the loop has been executed, the do-while loop is called a post-test loop
// least used loop for it has no applicability
let count = 0;
    do {
        count++;
        console.log('count is:' + count);
    }
    while(count < 10);
